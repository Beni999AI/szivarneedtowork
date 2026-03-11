export function Footer() {
    return (
        <footer className="bg-[#1F2937] text-white py-8 border-t-4 border-[#EC4899]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EC4899] to-[#F59E0B]">
                        Szivárvány Asztrológia
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                        Színes és játékos asztrológia a mindennapokra.
                    </p>
                </div>
                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Minden jog fenntartva.
                </div>
            </div>
        </footer>
    );
}
