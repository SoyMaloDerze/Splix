import PageContainer from "@/components/ui/PageContainer";
import { motion } from "framer-motion";
import {
    ArrowUp,
    ArrowDown,
    // TrendUp,
    Wallet,
    Brain,
    ChatCircleDots,
    Sparkle
} from "phosphor-react";

export default function Overview() {
    return (
        <PageContainer title="Overview">

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
            >

                {/* 💰 BALANCE CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                        p-5 rounded-3xl
                        bg-linear-to-br from-accent/30 via-accent-secondary/20 to-indigo-500/20
                        border border-white/10
                        space-y-4
                    "
                >
                    <div className="flex justify-between items-center text-sm text-white/70">
                        <span>Total Balance</span>
                        <Sparkle size={16} />
                    </div>

                    <h2 className="text-3xl font-bold text-white">
                        ₦145,200
                    </h2>

                    <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-2 text-green-400">
                            <ArrowDown size={16} />
                            ₦82,000 income
                        </div>
                        <div className="flex items-center gap-2 text-red-400">
                            <ArrowUp size={16} />
                            ₦36,800 spent
                        </div>
                    </div>
                </motion.div>


                {/* 📊 ANALYTICS CARDS */}
                <div className="grid grid-cols-2 gap-4">

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-card p-4 rounded-2xl border border-white/5"
                    >
                        <p className="text-xs text-muted">Weekly Spend</p>
                        <p className="text-lg text-white font-semibold">₦24,500</p>
                        <p className="text-xs text-red-400">+12% vs last week</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-card p-4 rounded-2xl border border-white/5"
                    >
                        <p className="text-xs text-muted">Top Category</p>
                        <p className="text-lg text-white font-semibold">Food 🍜</p>
                        <p className="text-xs text-white/50">41% of spend</p>
                    </motion.div>

                </div>


                {/* 🧠 SMART INSIGHTS */}
                <motion.div
                    className="bg-card p-5 rounded-2xl border border-white/5 space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="flex items-center gap-2 text-accent">
                        <Brain size={18} />
                        <span className="text-sm font-semibold">Smart Insights</span>
                    </div>

                    <div className="space-y-3 text-sm text-white/80">

                        <p>
                            You spent <span className="text-accent font-medium">₦12,000 on food</span> this week.
                        </p>

                        <p>
                            Your spending increased by <span className="text-red-400">18%</span> compared to last week.
                        </p>

                        <p>
                            You spend more on <span className="text-accent-secondary">weekends</span>.
                        </p>

                        <p>
                            Most expensive friend this month 😂: <span className="text-white font-medium">Tunde</span>
                        </p>

                    </div>
                </motion.div>


                {/* 🎯 SAVINGS + BEHAVIOR */}
                <motion.div
                    className="bg-card p-5 rounded-2xl border border-white/5 space-y-4"
                >
                    <div className="flex items-center gap-2 text-accent">
                        <Wallet size={18} />
                        <span className="text-sm font-semibold">Savings & Control</span>
                    </div>

                    <div className="space-y-3 text-sm text-white/80">

                        <p>
                            If you reduce food spending by ₦5,000/week,
                            you save <span className="text-green-400">₦20,000/month</span>.
                        </p>

                        <p>
                            Suggested weekly budget:
                            <span className="text-accent ml-1">₦18,000</span>
                        </p>

                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                            <div className="bg-accent h-full w-[70%]" />
                        </div>

                        <p className="text-xs text-white/50">
                            You’ve used 70% of your budget
                        </p>

                    </div>
                </motion.div>


                {/* 🤖 AI ASSISTANT */}
                <motion.div
                    className="bg-card p-5 rounded-2xl border border-white/5 space-y-4"
                >
                    <div className="flex items-center gap-2 text-accent">
                        <ChatCircleDots size={18} />
                        <span className="text-sm font-semibold">Ask Splix AI</span>
                    </div>

                    <div className="bg-white/5 rounded-xl p-3 text-sm text-white/60">
                        “How can I reduce my weekly spending?”
                    </div>

                    <div className="flex gap-2">
                        <input
                            placeholder="Ask anything about your spending..."
                            className="
                                flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2
                                text-sm outline-none
                            "
                        />

                        <button
                            className="
                                px-4 rounded-xl
                                bg-accent text-white text-sm
                                hover:opacity-90 transition
                            "
                        >
                            Ask
                        </button>
                    </div>
                </motion.div>

            </motion.div>
        </PageContainer>
    );
}