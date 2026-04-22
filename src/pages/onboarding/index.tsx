import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    Sparkle,
    UsersThree,
    Brain,
    TrendUp
} from "phosphor-react";

export default function Onboarding() {
    const navigate = useNavigate();

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="min-h-screen bg-base text-white overflow-hidden"
        >

            {/* 🌌 BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-125 h-125 bg-accent/20 blur-[120px] rounded-full -top-25 -left-25" />
                <div className="absolute w-100 h-100 bg-accent-secondary/20 blur-[120px] rounded-full -bottom-25 -right-25" />
            </div>

            <div className="px-6 py-10 space-y-16">

                {/* 🚀 HERO */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-accent to-accent-secondary flex items-center justify-center font-bold">
                            SX
                        </div>
                        <span className="text-xl font-extrabold text-accent">
                            Splix
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold leading-tight md:text-nowrap md:flex justify-center items-center">
                        Split smarter. <br className="md:hidden" />
                        Understand your money.
                    </h1>

                    <p className="text-white/70 text-sm md:text-nowrap md:flex justify-center items-center">
                        Not just splitting bills — Splix shows you how you spend,
                        who you spend with, and how to do better.
                    </p>
                </motion.div>


                {/* ✨ FEATURES */}
                <div className="space-y-10 md:flex justify-center items-center">

                    {/* Feature 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-4 items-start"
                    >
                        <div className="p-3 rounded-xl bg-white/5">
                            <UsersThree size={22} className="text-accent" />
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                Smart Splitting
                            </h3>
                            <p className="text-sm text-white/60">
                                Assign items, split fairly, and minimize payments.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-4 items-start"
                    >
                        <div className="p-3 rounded-xl bg-white/5">
                            <Brain size={22} className="text-accent-secondary" />
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                AI Insights
                            </h3>
                            <p className="text-sm text-white/60">
                                Know where your money goes and how to improve.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-4 items-start"
                    >
                        <div className="p-3 rounded-xl bg-white/5">
                            <TrendUp size={22} className="text-accent" />
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                Financial Control
                            </h3>
                            <p className="text-sm text-white/60">
                                Track habits, control spending, and grow smarter.
                            </p>
                        </div>
                    </motion.div>
                </div>


                {/* 💎 VISUAL CARD (WOW SECTION) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="
                        p-6 rounded-3xl
                        bg-linear-to-br from-accent/30 via-accent-secondary/20 to-indigo-500/20
                        border border-white/10
                        space-y-4
                    "
                >
                    <div className="flex items-center gap-2 text-accent">
                        <Sparkle size={18} />
                        <span className="text-sm">Your weekly insight</span>
                    </div>

                    <p className="text-sm text-white/80">
                        You spent <span className="text-accent">₦12,000 on food</span>.
                        That’s <span className="text-red-400">18% more</span> than last week.
                    </p>

                    <p className="text-sm text-white/60">
                        Splix helps you understand and improve — automatically.
                    </p>
                </motion.div>


                {/* 🚀 CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="pt-6 flex justify-center items-center"
                >
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="
                            w-sm py-3 rounded-xl
                            bg-linear-to-r from-accent to-accent-secondary
                            text-white font-semibold
                            shadow-lg glow-accent
                            hover:opacity-90 transition
                        "
                    >
                        Continue
                    </button>
                </motion.div>

            </div>
        </motion.div>
    );
}