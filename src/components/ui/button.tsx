import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

    const variants = {
        primary: "bg-[#EC4899] text-white hover:bg-[#db2777] shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50",
        secondary: "bg-[#8B5CF6] text-white hover:bg-[#7c3aed] shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50",
        outline: "border-2 border-[#EC4899] text-[#EC4899] hover:bg-[#EC4899]/10",
        ghost: "text-[#1F2937] hover:bg-gray-100",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
