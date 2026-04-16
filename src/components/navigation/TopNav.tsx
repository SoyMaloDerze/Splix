import { NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/constants/navigation";
import { Bell, SquaresFour } from "phosphor-react";

export default function TopNav() {
    const { pathname } = useLocation();
    const isDashboard = pathname === "/dashboard";

    return (
        <header className="hidden md:flex items-center justify-between px-6 h-16 border-b border-white/5 bg-base/80 backdrop-blur">
            
            {/* Left: Brand */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 text-accent-light rounded-lg bg-linear-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-sm font-bold">
                    SX
                </div>
                <span className="text-lg font-extrabold text-accent uppercase">
                    Splix
                </span>
            </div>

            {/* Center: Nav */}
            <nav className="flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                    <NavLink key={item.path} to={item.path}>
                        {({ isActive }) => (
                            <div className="relative inline-block pb-2">
                                
                                <span
                                    className={`text-sm transition ${
                                        isActive
                                            ? "text-accent"
                                            : "text-muted hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </span>

                                {/* Active Underline */}
                                {isActive && (
                                    <span
                                        className="
                                            absolute left-0 right-0 bottom-0
                                            h-0.75
                                            rounded-b-full
                                            bg-accent
                                        "
                                    />
                                )}
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* RIGHT: Actions (dashboard only) */}
            {isDashboard && (
                <div className="flex items-center gap-3">
                    
                    {/* Grid Menu */}
                    <button aria-label="menu" className="w-9 h-9 rounded-lg text-accent bg-white/5 hover:bg-white/10 flex items-center justify-center transition">
                        <SquaresFour size={18} weight="duotone" />
                    </button>

                    {/* Notification bell */}
                    <button aria-label="notification" className="w-9 h-9 rounded-lg text-accent bg-white/5 hover:bg-white/10 flex items-center justify-center transition">
                        <Bell size={18} weight="duotone" />
                    </button>

                </div>
            )}
        </header>
    );
}