import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/ui/PageContainer";
import {
    Eye,
    EyeSlash,
    Bell,
    SquaresFour,
    UserCircle,
    ChatCircleDots,
    ArrowUpRight,
    ArrowDownLeft,
    UsersThree,
    TrendUp
} from "phosphor-react";

type TransactionType = "expense" | "income" | "split-paid" | "split-received";

type Transaction = {
    title: string;
    time: string;
    amount: string;
    type: TransactionType;
};

type Insight = {
    message: string;
    sub: string;
};

export default function Dashboard() {
    const [showBalance, setShowBalance] = useState(true);
    const [currentInsight, setCurrentInsight] = useState(0);

    const navigate = useNavigate();

    const accountNumber = "2130076767";

    /* ---------------- INSIGHTS ---------------- */
    const insights: Insight[] = [
        {
            message: "You spent ₦12,000 on food this week.",
            sub: "That’s higher than your usual pattern."
        },
        {
            message: "You tend to spend more on weekends.",
            sub: "Consider setting a weekend spending limit."
        },
        {
            message: "You recovered ₦5,500 from John.",
            sub: "Your cash flow is improving this week."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentInsight((prev) => (prev + 1) % insights.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [insights.length]);

    /* ---------------- TRANSACTIONS ---------------- */
    const transactions: Transaction[] = [
        {
            title: "Dinner Split (You paid)",
            time: "Today • 8:42PM",
            amount: "-₦8,000",
            type: "split-paid"
        },
        {
            title: "John settled you",
            time: "Today • 2:10PM",
            amount: "+₦5,500",
            type: "split-received"
        },
        {
            title: "Transport",
            time: "Yesterday • 9:02AM",
            amount: "-₦2,200",
            type: "expense"
        },
        {
            title: "Transfer from Olamide",
            time: "Yesterday • 6:00AM",
            amount: "+₦6,500",
            type: "income"
        }
    ];

    const renderIcon = (type: TransactionType) => {
        if (type === "income") return <ArrowDownLeft size={18} className="text-green-400" />;
        if (type === "expense") return <ArrowUpRight size={18} className="text-red-400" />;
        if (type === "split-paid") return <UsersThree size={18} className="text-accent" />;
        return <ArrowDownLeft size={18} className="text-green-400" />;
    };

    return (
        <PageContainer title="">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
            >

                {/* 🔝 TOP BAR */}
                <div className="flex items-center justify-between md:hidden">

                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-sm font-bold">
                            SX
                        </div>
                        <span className="font-bold text-lg text-accent">Splix</span>
                    </div>

                    <div className="flex items-center gap-3">

                        <button
                            aria-label="Open tools menu"
                            className="text-accent hover:opacity-80 transition"
                        >
                            <SquaresFour size={20} weight="duotone" />
                        </button>

                        <button
                            aria-label="Open Splix AI assistant"
                            className="text-accent hover:opacity-80 transition"
                        >
                            <ChatCircleDots size={20} weight="duotone" />
                        </button>

                        <button
                            aria-label="View notifications"
                            className="text-accent hover:opacity-80 transition"
                        >
                            <Bell size={20} weight="duotone" />
                        </button>

                    </div>
                </div>

                {/* 👤 PROFILE CONTEXT */}
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <UserCircle size={36} weight="duotone" className="text-accent" />
                        <div>
                            <p className="text-white text-sm font-medium">Your account</p>
                            <p className="text-xs text-white/50">Smart financial overview</p>
                        </div>
                    </div>

                    <button
                        aria-label="Open profile page"
                        onClick={() => navigate("/profile")}
                        className="text-xs text-accent hover:underline"
                    >
                        View Profile
                    </button>

                </div>

                {/* 💰 BALANCE */}
                <div className="relative overflow-hidden rounded-3xl p-5 bg-linear-to-br from-accent/30 via-accent-secondary/20 to-indigo-500/20 border border-white/10 space-y-4">

                    <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">Total Balance</span>

                        <button
                            aria-label="Toggle balance visibility"
                            onClick={() => setShowBalance(prev => !prev)}
                            className="text-white/70 hover:text-white transition"
                        >
                            {showBalance ? <Eye size={18} /> : <EyeSlash size={18} />}
                        </button>
                    </div>

                    <h1 className={`text-3xl font-extrabold text-white ${!showBalance && "blur-sm"}`}>
                        ₦145,200
                    </h1>

                    <div className="text-xs text-white/60">
                        Account No: {accountNumber}
                    </div>

                    <div className="flex justify-between text-sm mt-4">

                        <div>
                            <p className="text-white/60">You owe</p>
                            <p className={`text-red-400 font-semibold ${!showBalance && "blur-sm"}`}>
                                ₦15,200
                            </p>
                        </div>

                        <div>
                            <p className="text-white/60">You are owed</p>
                            <p className={`text-green-400 font-semibold ${!showBalance && "blur-sm"}`}>
                                ₦28,700
                            </p>
                        </div>

                    </div>
                </div>

                {/* ⚡ ACTIONS */}
                <div className="grid grid-cols-3 gap-3">

                    <motion.button
                        aria-label="Add money"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/add-money")}
                        className="p-3 rounded-xl bg-card border border-white/5 text-sm text-white hover:border-accent/40 transition"
                    >
                        Add Money
                    </motion.button>

                    <motion.button
                        aria-label="Split bill"
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-xl bg-card border border-white/5 text-sm text-white hover:border-accent/40 transition"
                    >
                        Split
                    </motion.button>

                    <motion.button
                        aria-label="Send money"
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-xl bg-card border border-white/5 text-sm text-white hover:border-accent/40 transition"
                    >
                        Send
                    </motion.button>

                </div>

                {/* 🧠 AUTO INSIGHT */}
                <div className="bg-card p-4 rounded-2xl border border-white/5 overflow-hidden">

                    <div className="flex justify-between mb-2">
                        <p className="text-sm text-muted">Smart Insight</p>
                        <TrendUp size={16} className="text-accent" />
                    </div>

                    <div className="relative h-17.5">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentInsight}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute w-full"
                            >
                                <p className="text-sm text-white">
                                    {insights[currentInsight].message}
                                </p>
                                <p className="text-xs text-white/50 mt-1">
                                    {insights[currentInsight].sub}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex gap-1 mt-3">
                        {insights.map((_, i) => (
                            <span
                                key={i}
                                className={`
                                    h-1.5 rounded-full transition-all duration-300
                                    ${i === currentInsight ? "w-4 bg-accent" : "w-1.5 bg-white/20"}
                                `}
                            />
                        ))}
                    </div>

                </div>

                {/* 🧾 TRANSACTIONS */}
                <div className="space-y-4">

                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <span className="text-muted text-sm">Recent Activity</span>

                        <button
                            aria-label="View all transactions"
                            onClick={() => navigate("/transactions")}
                            className="text-accent text-xs hover:underline"
                        >
                            See all
                        </button>
                    </div>

                    {/* List */}
                    <div className="space-y-2">
                        {transactions.map((tx, i) => {

                            const getContext = () => {
                                if (tx.type === "split-paid") return "You covered a group expense";
                                if (tx.type === "split-received") return "You were reimbursed";
                                if (tx.type === "income") return "Money received";
                                return "Personal expense";
                            };

                            return (
                                <motion.button
                                    key={i}
                                    aria-label={`Open transaction ${tx.title}`}
                                    onClick={() => navigate("/transactions")}
                                    whileTap={{ scale: 0.97 }}
                                    className="
                                        w-full flex items-center justify-between
                                        bg-card p-3 rounded-xl border border-white/5
                                        hover:border-white/10 transition text-left
                                    "
                                >

                                    {/* LEFT */}
                                    <div className="flex items-center gap-3">

                                        {/* Icon */}
                                        <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                            {renderIcon(tx.type)}
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <p className="text-sm text-white">
                                                {tx.title}
                                            </p>

                                            <p className="text-xs text-white/40">
                                                {getContext()} • {tx.time}
                                            </p>
                                        </div>

                                    </div>

                                    {/* RIGHT */}
                                    <span
                                        className={`text-sm font-medium ${
                                            tx.amount.includes("+")
                                                ? "text-green-400"
                                                : "text-red-400"
                                        }`}
                                    >
                                        {tx.amount}
                                    </span>

                                </motion.button>
                            );
                        })}
                    </div>

                </div>

            </motion.div>
        </PageContainer>
    );
}