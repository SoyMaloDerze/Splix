import { useState } from "react";
import PageContainer from "@/components/ui/PageContainer";
import { Eye, EyeSlash, Bell, SquaresFour } from "phosphor-react";

const Dashboard = () => {
    const [showBalance, setShowBalance] = useState(true);

    return (
        <PageContainer title="">

            <div className="space-y-6">

                {/* 📱 MOBILE TOP BAR */}
                <div className="md:hidden flex items-center justify-between">
                    
                    {/* Menu */}
                    <SquaresFour size={22} className="text-accent cursor-pointer" />

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="text-accent-light w-7 h-7 rounded-lg bg-linear-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-xs font-bold">
                            SX
                        </div>
                        <span className="font-bold text-white">Splix</span>
                    </div>

                    {/* Notification */}
                    <Bell size={22} className="text-accent cursor-pointer" />
                </div>


                {/* 💰 BALANCE CARD */}
                <div className="
                    relative overflow-hidden
                    rounded-3xl p-5
                    bg-linear-to-br from-accent/30 via-accent-secondary/20 to-indigo-500/20
                    border border-white/10
                ">

                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-white/80">
                            Total Balance
                        </span>

                        <button
                            onClick={() => setShowBalance(prev => !prev)}
                            className="text-white/70 hover:text-white transition"
                        >
                            {showBalance ? <Eye size={18} /> : <EyeSlash size={18} />}
                        </button>
                    </div>

                    {/* Balance */}
                    <h1 className="text-3xl font-extrabold mt-2 text-white tracking-tight">
                        {showBalance ? "₦124,500" : "••••••"}
                    </h1>

                    {/* Sub Info */}
                    <div className="flex justify-between mt-6 text-sm">

                        <div>
                            <p className="text-white/60">You owe</p>
                            <p className="text-red-400 font-semibold">
                                {showBalance ? "₦15,200" : "••••"}
                            </p>
                        </div>

                        <div>
                            <p className="text-white/60">You are owed</p>
                            <p className="text-green-400 font-semibold">
                                {showBalance ? "₦28,700" : "••••"}
                            </p>
                        </div>

                    </div>
                </div>


                {/* 📊 INSIGHTS */}
                <div className="bg-card p-4 rounded-2xl border border-white/5 space-y-3">

                    <div className="flex items-center justify-between">
                        <h2 className="text-sm text-muted">Smart Insights</h2>
                        <span className="text-xs text-accent">AI</span>
                    </div>

                    <div className="space-y-2 text-sm">

                        <p className="text-white">
                            You spent <span className="text-accent font-semibold">₦45k</span> on food this week
                        </p>

                        <p className="text-muted">
                            ↑ 18% compared to last week
                        </p>

                        <p className="text-white">
                            Most expensive friend: <span className="text-accent">Tunde</span>
                        </p>

                    </div>
                </div>


                {/* 🧾 TRANSACTIONS */}
                <div className="space-y-3">

                    <div className="flex items-center justify-between">
                        <h2 className="text-sm text-muted">Transactions</h2>
                        <span className="text-xs text-accent">See all</span>
                    </div>

                    <div className="space-y-3">

                        {/* Item */}
                        <div className="flex items-center justify-between bg-card p-3 rounded-xl border border-white/5">

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">
                                    TR
                                </div>

                                <div>
                                    <p className="text-sm text-white">Dinner Split</p>
                                    <p className="text-xs text-muted">Today • 8:45 PM</p>
                                </div>
                            </div>

                            <p className="text-red-400 font-semibold">-₦8,000</p>
                        </div>


                        <div className="flex items-center justify-between bg-card p-3 rounded-xl border border-white/5">

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">
                                    JP
                                </div>

                                <div>
                                    <p className="text-sm text-white">John Paid You</p>
                                    <p className="text-xs text-muted">Today • 6:12 PM</p>
                                </div>
                            </div>

                            <p className="text-green-400 font-semibold">+₦5,500</p>
                        </div>


                        <div className="flex items-center justify-between bg-card p-3 rounded-xl border border-white/5">

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">
                                    TP
                                </div>

                                <div>
                                    <p className="text-sm text-white">Transport</p>
                                    <p className="text-xs text-muted">Yesterday • 9:30 AM</p>
                                </div>
                            </div>

                            <p className="text-red-400 font-semibold">-₦2,200</p>
                        </div>

                    </div>
                </div>

            </div>
        </PageContainer>
    );
};

export default Dashboard;