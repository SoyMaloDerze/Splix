import { useState } from "react";
import { motion } from "framer-motion";
import PageContainer from "@/components/ui/PageContainer";
import { Users, Equalizer, Lightning, Check } from "phosphor-react";

type SplitMode = "equal" | "custom" | "smart";

const people = ["You", "Tunde", "Ada", "John"];

export default function Splyt() {
    const [amount, setAmount] = useState<number>(0);
    const [selected, setSelected] = useState<string[]>(["You", "Tunde"]);
    const [mode, setMode] = useState<SplitMode>("equal");

    const togglePerson = (name: string) => {
        setSelected(prev =>
            prev.includes(name)
                ? prev.filter(p => p !== name)
                : [...prev, name]
        );
    };

    const splitAmount =
        selected.length > 0 ? (amount / selected.length).toFixed(2) : "0";

    return (
        <PageContainer title="Split Expense">

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
            >

                {/* 💰 Amount Input */}
                <div className="bg-card/80 backdrop-blur p-5 rounded-3xl border border-white/10">
                    <p className="text-muted text-sm">Amount</p>

                    <input
                        type="number"
                        value={amount || ""}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="₦0.00"
                        className="
                            w-full mt-2 bg-transparent outline-none
                            text-3xl font-extrabold text-white
                            placeholder:text-white/30
                        "
                    />
                </div>


                {/* 👥 Participants */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted text-sm">
                        <Users size={16} />
                        Participants
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        {people.map(person => {
                            const active = selected.includes(person);

                            return (
                                <motion.button
                                    key={person}
                                    onClick={() => togglePerson(person)}
                                    whileTap={{ scale: 0.9 }}
                                    className={`
                                        px-4 py-2 rounded-full text-sm
                                        border transition
                                        ${
                                            active
                                                ? "bg-accent text-white border-accent shadow-glow"
                                                : "bg-white/5 text-muted border-white/10"
                                        }
                                    `}
                                >
                                    {person}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>


                {/* ⚙️ Split Mode */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted text-sm">
                        <Equalizer size={16} />
                        Split Mode
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { key: "equal", label: "Equal", icon: Equalizer },
                            { key: "custom", label: "Custom", icon: Users },
                            { key: "smart", label: "Smart", icon: Lightning }
                        ].map(item => {
                            const active = mode === item.key;
                            const Icon = item.icon;

                            return (
                                <motion.button
                                    key={item.key}
                                    onClick={() => setMode(item.key as SplitMode)}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        p-3 rounded-xl border text-sm flex flex-col items-center gap-1 transition
                                        ${
                                            active
                                                ? "bg-accent text-white border-accent"
                                                : "bg-white/5 text-muted border-white/10"
                                        }
                                    `}
                                >
                                    <Icon size={18} />
                                    {item.label}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>


                {/* 🧠 Live Preview */}
                <motion.div
                    layout
                    className="
                        bg-linear-to-br from-accent/20 to-accent-secondary/10
                        p-5 rounded-3xl border border-white/10
                    "
                >
                    <p className="text-muted text-sm">Split Preview</p>

                    <div className="mt-3 space-y-2">
                        {selected.map(name => (
                            <motion.div
                                key={name}
                                layout
                                className="flex justify-between text-sm text-white"
                            >
                                <span>{name}</span>
                                <span>₦{splitAmount}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


                {/* 🚀 Confirm */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="
                        w-full py-4 rounded-2xl
                        bg-linear-to-r from-accent to-accent-secondary
                        text-white font-semibold
                        shadow-[0_0_20px_rgba(168,85,247,0.6)]
                        flex items-center justify-center gap-2
                    "
                >
                    <Check size={18} weight="bold" />
                    Confirm Split
                </motion.button>

            </motion.div>
        </PageContainer>
    );
}