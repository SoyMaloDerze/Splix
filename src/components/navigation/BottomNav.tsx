import { NAV_ITEMS } from "@/constants/navigation";
import { NavLink, useNavigate  } from "react-router-dom";
import { icons } from "@/components/ui/Icon";
import { Plus } from "phosphor-react";
import { motion } from "framer-motion";

export default function BottomNav() {
    // const { pathname } = useLocation();
    // const isDashboard = pathname === "/dashboard";
    const navigate = useNavigate();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">

            {/* Background Bar */}
            <div className="relative bg-card/95 backdrop-blur rounded-t-2xl">

                {/* Top separator (with center gap for FAB) */}
                <div className="absolute top-0 left-0 right-0 h-px bg-white/10">
                    <div className="mx-auto w-20 h-full bg-card" />
                </div>

                {/* Floating FAB */}
                <motion.div
                    className="absolute -top-7 left-1/2 -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <motion.button
                        onClick={() => navigate("/add-money")}
                        whileTap={{ scale: 0.9, rotate: 90 }}
                        whileHover={{ scale: 1.05 }}
                        className="
                            w-14 h-14 rounded-full
                            bg-linear-to-br from-accent to-accent-secondary
                            flex items-center justify-center
                            shadow-lg glow-accent
                            relative
                        "
                    >
                        {/* Glow Ring */}
                        <span className="absolute inset-0 rounded-full bg-accent blur-xl opacity-40" />

                        {/* Icon */}
                        <span className="relative text-white text-2xl font-bold">
                            <Plus size={22} weight="duotone" />
                        </span>
                    </motion.button>
                </motion.div>

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