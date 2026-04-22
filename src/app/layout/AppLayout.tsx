import { Outlet } from "react-router-dom";
import TopNav from "@/components/navigation/TopNav";
import BottomNav from "@/components/navigation/BottomNav";

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-base flex flex-col">
            {/* TopNav (desktop) */}
            <TopNav />

            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8 pb-30 md:pb-10">
                <Outlet />
            </main>

            {/* Bottom Nav (Mobile) */}
            <BottomNav />
        </div>
    );
}


