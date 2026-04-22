import PageContainer from "@/components/ui/PageContainer";
import { motion } from "framer-motion";
import {
    User,
    Gear,
    ShieldCheck,
    CreditCard,
    Crown,
    CaretRight,
    SignOut
} from "phosphor-react";

type MenuItem = {
    label: string;
    icon: React.ElementType;
};

const accountItems: MenuItem[] = [
    { label: "Personal Info", icon: User },
    { label: "Security & Privacy", icon: ShieldCheck },
    { label: "Payment Methods", icon: CreditCard },
];

const settingsItems: MenuItem[] = [
    { label: "App Settings", icon: Gear },
];

export default function Profile() {
    return (
        <PageContainer title="Profile">

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
            >

                {/* 👤 PROFILE CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                        relative overflow-hidden
                        p-5 rounded-3xl
                        bg-linear-to-br from-accent/30 via-accent-secondary/20 to-indigo-500/20
                        border border-white/10
                    "
                >
                    <div className="flex items-center gap-4">

                        {/* Avatar */}
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                            D
                        </div>

                        {/* Info */}
                        <div>
                            <p className="text-white font-semibold">Derze</p>
                            <p className="text-white/60 text-sm">derze@email.com</p>
                        </div>
                    </div>

                    {/* Sub stats */}
                    <div className="flex justify-between mt-6 text-sm text-white/70">
                        <div>
                            <p>Splits</p>
                            <p className="text-white font-semibold">128</p>
                        </div>
                        <div>
                            <p>Friends</p>
                            <p className="text-white font-semibold">24</p>
                        </div>
                        <div>
                            <p>Since</p>
                            <p className="text-white font-semibold">2024</p>
                        </div>
                    </div>
                </motion.div>


                {/* 💼 ACCOUNT SECTION */}
                <div className="bg-card rounded-2xl border border-white/5 divide-y divide-white/5">

                    {accountItems.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                key={i}
                                href="#"
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-between px-4 py-4"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={18} className="text-accent" />
                                    <span className="text-sm text-white">{item.label}</span>
                                </div>

                                <CaretRight size={16} className="text-muted" />
                            </motion.a>
                        );
                    })}
                </div>


                {/* ⚙️ SETTINGS */}
                <div className="bg-card rounded-2xl border border-white/5 divide-y divide-white/5">

                    {settingsItems.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                key={i}
                                href="#"
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-between px-4 py-4"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={18} className="text-accent" />
                                    <span className="text-sm text-white">{item.label}</span>
                                </div>

                                <CaretRight size={16} className="text-muted" />
                            </motion.a>
                        );
                    })}
                </div>


                {/* 👑 UPGRADE CARD */}
                <motion.div
                    whileTap={{ scale: 0.97 }}
                    className="
                        p-5 rounded-2xl
                        bg-linear-to-br from-accent to-accent-secondary
                        text-white
                        shadow-[0_0_25px_rgba(168,85,247,0.5)]
                        space-y-2
                    "
                >
                    <div className="flex items-center gap-2">
                        <Crown size={18} weight="fill" />
                        <span className="font-semibold">Upgrade to Pro</span>
                    </div>

                    <p className="text-sm text-white/80">
                        Unlock smart split suggestions, insights & advanced analytics.
                    </p>

                    <div className="text-xs underline">
                        Learn more
                    </div>
                </motion.div>


                {/* 🚪 LOGOUT */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="
                        w-full flex items-center justify-center gap-2
                        py-4 rounded-xl
                        bg-white/5 border border-white/10
                        text-red-400 text-sm
                    "
                >
                    <SignOut size={16} />
                    Log out
                </motion.button>

            </motion.div>
        </PageContainer>
    );
}