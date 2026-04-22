import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    CreditCard,
    Wallet,
    Bank,
    Lightning,
    CurrencyCircleDollar,
    Coins,
    type Icon,
} from "phosphor-react";

type Method = {
    title: string;
    desc: string;
    icon: Icon;
    highlight?: boolean;
};

export default function AddMoney() {
    const navigate = useNavigate();

    const accountNumber = "2130076767";

    const walletMethods: Method[] = [
        {
            title: "Instant Wallet",
            desc: "Fund instantly with supported wallets",
            icon: Wallet,
            highlight: true
        },
        {
            title: "PalmPay",
            desc: "Normally within 2 minutes",
            icon: Coins
        }
    ];

    const bankMethods: Method[] = [
        {
            title: "Card Payment",
            desc: "Visa / Mastercard",
            icon: CreditCard
        },
        {
            title: "Paystack",
            desc: "Secure checkout",
            icon: Lightning
        },
        {
            title: "Flutterwave",
            desc: "Global payments",
            icon: Bank
        },
        {
            title: "PayPal",
            desc: "International funding",
            icon: CurrencyCircleDollar
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="min-h-screen bg-base text-white px-4 py-6 space-y-6"
        >

            {/* 🔝 HEADER */}
            <div className="flex items-center justify-between">
                <button aria-label="back" onClick={() => navigate(-1)}>
                    <ArrowLeft size={22} />
                </button>

                <h1 className="text-lg font-semibold">Add Money</h1>

                <div className="w-6" />
            </div>


            {/* 💳 BALANCE + ACCOUNT */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                    p-5 rounded-3xl
                    bg-linear-to-br from-accent/30 via-accent-secondary/20 to-indigo-500/20
                    border border-white/10
                    space-y-3
                "
            >
                <p className="text-sm text-white/70">Your Splix Account</p>

                <h2 className="text-2xl font-bold">
                    ₦145,200
                </h2>

                <p className="text-xs text-white/60">
                    Account No: {accountNumber}
                </p>

                <p className="text-xs text-white/50">
                    Transfer to this account to fund instantly
                </p>
            </motion.div>


            {/* ⚡ RECOMMENDED */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
            >
                <p className="text-xs text-muted">Recommended</p>

                {walletMethods
                    .filter(m => m.highlight)
                    .map((method, i) => {
                        const Icon = method.icon;

                        return (
                            <motion.div
                                key={i}
                                whileTap={{ scale: 0.97 }}
                                className="
                                    p-4 rounded-2xl
                                    bg-linear-to-r from-accent/20 to-accent-secondary/20
                                    border border-accent/30
                                    flex items-center justify-between
                                    shadow-[0_0_20px_rgba(168,85,247,0.3)]
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={22} className="text-accent" />

                                    <div>
                                        <p className="font-medium">
                                            {method.title}
                                        </p>
                                        <p className="text-xs text-white/60">
                                            {method.desc}
                                        </p>
                                    </div>
                                </div>

                                <span className="text-accent text-sm">Fast</span>
                            </motion.div>
                        );
                    })}
            </motion.div>


            {/* 💼 WALLET METHODS */}
            <div className="space-y-3">
                <p className="text-xs text-muted">Wallets</p>

                {walletMethods.map((method, i) => {
                    const Icon = method.icon;

                    return (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="
                                p-4 rounded-2xl
                                bg-card border border-white/5
                                flex items-center justify-between
                            "
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-white/5">
                                    <Icon size={20} />
                                </div>

                                <div>
                                    <p className="text-sm font-medium">
                                        {method.title}
                                    </p>
                                    <p className="text-xs text-white/50">
                                        {method.desc}
                                    </p>
                                </div>
                            </div>

                            <span className="text-white/40">›</span>
                        </motion.div>
                    );
                })}
            </div>


            {/* 🏦 BANK METHODS */}
            <div className="space-y-3">
                <p className="text-xs text-muted">Banking & Cards</p>

                {bankMethods.map((method, i) => {
                    const Icon = method.icon;

                    return (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="
                                p-4 rounded-2xl
                                bg-card border border-white/5
                                flex items-center justify-between
                            "
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-white/5">
                                    <Icon size={20} />
                                </div>

                                <div>
                                    <p className="text-sm font-medium">
                                        {method.title}
                                    </p>
                                    <p className="text-xs text-white/50">
                                        {method.desc}
                                    </p>
                                </div>
                            </div>

                            <span className="text-white/40">›</span>
                        </motion.div>
                    );
                })}
            </div>

        </motion.div>
    );
}