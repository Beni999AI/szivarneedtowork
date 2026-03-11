"use client";
import React, { useEffect, useRef } from "react";

interface AnimatedDotsProps {
    dotsNum?: number;
    dotRadius?: number;
    dotSpacing?: number;
    speedRange?: [number, number];
    backgroundColor?: string;
    opacity?: number;
    blendMode?: GlobalCompositeOperation;
    fullScreen?: boolean;
    className?: string;
    colors?: [("red" | "green" | "blue"), number, number, number][];
    trailLength?: number;
}

export const AnimatedDots: React.FC<AnimatedDotsProps> = ({
    dotsNum = 60,
    dotRadius = 20, // Increased from 10 to 20 (2x)
    dotSpacing = 0,
    speedRange = [1, 4],
    backgroundColor = "transparent",
    opacity = 1,
    blendMode = "normal",
    fullScreen = true,
    className = "",
    trailLength = 8, // Number of trail dots
    colors = [
        ["red", 255, 69, 58],
        ["orange", 255, 149, 0],
        ["yellow", 255, 214, 10],
        ["green", 52, 199, 89],
        ["mint", 0, 199, 190],
        ["teal", 48, 176, 199],
        ["blue", 0, 122, 255],
        ["indigo", 88, 86, 214],
        ["purple", 175, 82, 222],
        ["pink", 255, 45, 85],
        ["rose", 255, 100, 130],
        ["lime", 164, 255, 46],
        ["aqua", 46, 255, 220],
        ["sky", 100, 200, 255],
        ["violet", 205, 150, 255],
        ["gold", 255, 215, 0],
    ]
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const dotsRef = useRef<any[]>([]);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d")!;
        const TWO_PI = 2 * Math.PI;
        let width = fullScreen ? window.innerWidth : canvas.offsetWidth;
        let height = fullScreen ? window.innerHeight : canvas.offsetHeight;

        const requestAnimFrame =
            window.requestAnimationFrame ||
            (window as any).webkitRequestAnimationFrame ||
            (window as any).mozRequestAnimationFrame ||
            ((callback: FrameRequestCallback) => window.setTimeout(callback, 1000 / 60));

        interface TrailPoint {
            x: number;
            y: number;
            age: number;
        }

        class Dot {
            i: number;
            velocity: number;
            ranVelocity: number;
            ranColor: number;
            radius: number;
            x: number;
            y: number;
            trail: TrailPoint[];

            constructor(i: number) {
                this.i = i;
                this.velocity = 0;
                this.radius = dotRadius;
                this.trail = [];
                this.ranVelocity =
                    Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
                this.ranColor = Math.round(Math.random() * (colors.length - 1));
                this.x = this.radius + i * (this.radius * 2 + dotSpacing);
                this.y = -this.radius;
            }

            draw() {
                this.velocity += this.ranVelocity;
                const colorIncrement =
                    255 - Math.round(this.velocity * (255 / (height + this.radius)));

                // Update position
                this.y = -this.radius + this.velocity;

                // Add current position to trail
                this.trail.push({ x: this.x, y: this.y, age: 0 });

                // Limit trail length
                if (this.trail.length > trailLength) {
                    this.trail.shift();
                }

                // Update trail ages
                this.trail.forEach(point => point.age++);

                // Draw trail with fading effect
                this.trail.forEach((point, index) => {
                    const trailOpacity = (1 - (point.age / trailLength)) * opacity * 0.6;
                    const trailRadius = this.radius * (1 - (point.age / trailLength) * 0.4);

                    ctx.fillStyle = this.updateColors(colors[this.ranColor], colorIncrement, trailOpacity);
                    ctx.globalAlpha = trailOpacity;
                    ctx.globalCompositeOperation = blendMode as GlobalCompositeOperation;

                    ctx.beginPath();
                    ctx.arc(point.x, point.y, trailRadius, 0, TWO_PI, false);
                    ctx.fill();
                });

                // Draw main dot
                ctx.fillStyle = this.updateColors(colors[this.ranColor], colorIncrement);
                ctx.globalAlpha = opacity;
                ctx.globalCompositeOperation = blendMode as GlobalCompositeOperation;

                // Reset dot when it goes off screen
                if (this.velocity >= height + this.radius) {
                    this.velocity = 0;
                    this.trail = [];
                    this.ranColor = Math.round(Math.random() * (colors.length - 1));
                    this.ranVelocity =
                        Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
                }

                ctx.beginPath();
                ctx.arc(this.x % width, this.y, this.radius, 0, TWO_PI, false);
                ctx.fill();
            }

            updateColors(selectedColor: any, increment: number, alphaOverride?: number) {
                let [type, r, g, b] = selectedColor;

                if (type === "red") r = increment;
                else if (type === "green") g = increment;
                else if (type === "blue") b = increment;

                const alpha = alphaOverride !== undefined ? alphaOverride : 1;
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            }
        }

        const resizeCanvas = () => {
            width = fullScreen ? window.innerWidth : canvas.offsetWidth;
            height = fullScreen ? window.innerHeight : canvas.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            createDots();
        };

        const createDots = () => {
            dotsRef.current = [];
            // Calculate responsive dot count based on screen width
            const isDesktop = width >= 768;
            const responsiveDotsNum = isDesktop ? Math.floor(dotsNum * 2.5) : dotsNum;

            // Create vertical dots (falling from top)
            for (let i = 0; i < responsiveDotsNum; i++) {
                dotsRef.current.push(new Dot(i));
            }
        };

        const draw = () => {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, width, height);

            for (const dot of dotsRef.current) {
                dot.draw();
            }

            animationRef.current = requestAnimFrame(draw);
        };

        resizeCanvas();
        draw();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [
        dotsNum,
        dotRadius,
        colors,
        dotSpacing,
        speedRange,
        backgroundColor,
        opacity,
        blendMode,
        fullScreen,
        trailLength,
    ]);

    return (
        <div
            className={`relative ${fullScreen ? "w-screen h-screen" : ""} ${className}`}
        >
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};
