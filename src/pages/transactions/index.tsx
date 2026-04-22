import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/ui/PageContainer";
import {
    ArrowUpRight,
    ArrowDownLeft,
    UsersThree,
    FunnelSimple,
    MagnifyingGlass,
    ArrowLeft,
    Repeat,
    WarningCircle
} from "phosphor-react";

type TransactionType =
    | "expense"
    | "income"
    | "split-paid"
    | "split-received";

type Transaction = {
    id: string;
    title: string;
    description: string;
    amount: string;
    time: string;
    type: TransactionType;
};

type Section = {
    label: string;
    data: Transaction[];
};

const sections: Section[] = [
    {
        label: "Today",
        data: [
            {
                id: "TXN-839201",
                title: "Dinner Split",
                description: "You paid for group (3 people)",
                amount: "-₦8,000",
                time: "8:42 PM",
                type: "split-paid"
            },
            {
                id: "TXN-928112",
                title: "John settled you",
                description: "Split reimbursement",
                amount: "+₦5,500",
                time: "2:10 PM",
                type: "split-received"
            }
        ]
    },
    {
        label: "Yesterday",
        data: [
            {
                id: "TXN-552210",
                title: "Transport",
                description: "Morning commute",
                amount: "-₦2,200",
                time: "9:02 AM",
                type: "expense"
            }
        ]
    }
];

export default function Transactions() {
    const navigate = useNavigate();
    const [activeTx, setActiveTx] = useState<string | null>(null);

    const renderIcon = (type: TransactionType) => {
        if (type === "income") return <ArrowDownLeft size={18} className="text-green-400" />;
        if (type === "expense") return <ArrowUpRight size={18} className="text-red-400" />;
        if (type === "split-paid") return <UsersThree size={18} className="text-accent" />;
        return <ArrowDownLeft size={18} className="text-green-400" />;
    };

    const getInsight = (tx: Transaction) => {
        if (tx.type === "split-paid") {
            return "You covered a group expense. Ensure others settle to maintain balance.";
        }
        if (tx.type === "split-received") {
            return "This reimbursement improves your weekly cash flow.";
        }
        if (tx.type === "expense") {
            return "This type of expense occurs frequently. Monitor to avoid overspending.";
        }
        return "This income contributes positively to your financial balance.";
    };

    return (
        <PageContainer title="">

            <div className="space-y-6">

                {/* 🔙 HEADER */}
                <div className="flex items-center gap-3">
                    <button
                        aria-label="Go back"
                        onClick={() => navigate(-1)}
                        className="text-white/70 hover:text-white transition"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <h1 className="text-lg font-semibold text-white">Transactions</h1>
                </div>


                {/* 🔍 SEARCH */}
                <div className="flex gap-2">

                    <div className="flex items-center gap-2 flex-1 bg-card border border-white/5 rounded-xl px-3 py-2">
                        <MagnifyingGlass size={16} className="text-white/40" />
                        <input
                            placeholder="Search transactions..."
                            className="bg-transparent outline-none text-sm w-full"
                        />
                    </div>

                    <button
                        aria-label="Filter transactions"
                        className="px-3 rounded-xl bg-card border border-white/5 hover:border-accent/40 transition"
                    >
                        <FunnelSimple size={18} />
                    </button>

                </div>


                {/* 🧾 TIMELINE */}
                <div className="space-y-5">

                    {sections.map((section) => (
                        <div key={section.label} className="space-y-3">

                            <p className="text-xs text-muted">{section.label}</p>

                            {section.data.map((tx) => {
                                const isOpen = activeTx === tx.id;

                                return (
                                    <div key={tx.id} className="space-y-2">

                                        {/* MAIN ROW */}
                                        <motion.button
                                            aria-label={`Open transaction ${tx.title}`}
                                            onClick={() =>
                                                setActiveTx(isOpen ? null : tx.id)
                                            }
                                            whileTap={{ scale: 0.97 }}
                                            className="
                                                w-full flex items-center justify-between
                                                bg-card p-3 rounded-xl border border-white/5
                                                hover:border-white/10 transition text-left
                                            "
                                        >

                                            <div className="flex items-center gap-3">

                                                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                                    {renderIcon(tx.type)}
                                                </div>

                                                <div>
                                                    <p className="text-sm text-white">{tx.title}</p>
                                                    <p className="text-xs text-white/40">
                                                        {tx.description} • {tx.time}
                                                    </p>
                                                </div>

                                            </div>

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


                                        {/* EXPANDED PANEL */}
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="bg-card border border-white/5 rounded-xl p-4 space-y-3 overflow-hidden"
                                                >

                                                    {/* Reference */}
                                                    <p className="text-xs text-white/50">
                                                        Ref ID: {tx.id}
                                                    </p>

                                                    {/* Insight */}
                                                    <div className="bg-white/5 rounded-lg p-3 text-sm text-white/80">
                                                        {getInsight(tx)}
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="flex gap-2">

                                                        <button
                                                            aria-label="Repeat transaction"
                                                            className="
                                                                flex-1 flex items-center justify-center gap-1
                                                                text-xs bg-white/5 border border-white/10
                                                                rounded-lg py-2 hover:border-accent/40 transition
                                                            "
                                                        >
                                                            <Repeat size={14} />
                                                            Repeat
                                                        </button>

                                                        <button
                                                            aria-label="Report transaction"
                                                            className="
                                                                flex-1 flex items-center justify-center gap-1
                                                                text-xs bg-white/5 border border-white/10
                                                                rounded-lg py-2 hover:border-red-400/40 transition
                                                            "
                                                        >
                                                            <WarningCircle size={14} />
                                                            Report
                                                        </button>

                                                    </div>

                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                    </div>
                                );
                            })}

                        </div>
                    ))}

                </div>

            </div>

        </PageContainer>
    );
}