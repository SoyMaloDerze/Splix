import { NAV_ITEMS } from "@/constants/navigation";
import { NavLink } from "react-router-dom";
import { icons } from "@/components/ui/Icon";
import { Plus } from "phosphor-react";
import { useState } from "react";

export default function BottomNav() {
    // const { pathname } = useLocation();
    // const isDashboard = pathname === "/dashboard";
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">

            {/* Background Bar */}
            <div className="relative bg-card/95 backdrop-blur rounded-t-2xl">

                {/* Top separator (with center gap for FAB) */}
                <div className="absolute top-0 left-0 right-0 h-px bg-white/10">
                    <div className="mx-auto w-20 h-full bg-card" />
                </div>

                {/* Floating FAB */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                    <button
                        aria-label="add"
                        onClick={() => setOpen(prev => !prev)}
                        className={`
                            w-14 h-14 rounded-full
                            flex items-center justify-center
                            bg-linear-to-br from-accent to-accent-secondary
                            text-white
                            transition-all duration-300 ease-out
                            ${open ? "scale-95 shadow-[0_0_30px_rgba(168,85,247,0.9)]" : "scale-100 shadow-[0_0_20px_rgba(168,85,247,0.6)]"}
                        `}
                    >
                        <Plus
                            size={24}
                            weight="bold"
                            className={`
                                transition-transform duration-300 ease-out
                                ${open ? "rotate-45" : "rotate-0"}
                            `}
                        />
                    </button>
                </div>

                {/* Nav Items */}
                <div className="border-none flex justify-around items-center h-16 px-4">

                    {NAV_ITEMS.map((item) => {
                        const Icon = icons[item.icon];

                        return (
                            <NavLink key={item.path} to={item.path}>
                                {({ isActive }) => (
                                    <div className="relative flex flex-col items-center justify-center">

                                        {/* Active Glow Line */}
                                        {isActive && (
                                            <span
                                                className="
                                                    absolute -bottom-1 w-8 h-0.75
                                                    rounded-full
                                                    bg-accent-soft
                                                    transition-all duration-200
                                                "
                                            />
                                        )}

                                        {/* Icon */}
                                        <div
                                            className={`
                                                transition-all duration-200 ease-out
                                                ${
                                                    isActive
                                                        ? "text-accent -translate-y-1 scale-110"
                                                        : "text-muted hover:text-white"
                                                }
                                            `}
                                        >
                                            <Icon
                                                size={22}
                                                weight={isActive ? "fill" : "duotone"}
                                            />
                                        </div>
                                    </div>
                                )}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}