import { Routes, Route } from "react-router-dom"
import AppLayout from "@/app/layout/AppLayout"
import Entry from "@/pages/entry/"
import Onboarding from "@/pages/onboarding/"
import Dashboard from "@/pages/dashboard/"
import Splyt from "@/pages/splyt/"
import Overview from "@/pages/overview/"
import Profile from "@/pages/profile/"
import AddMoney from "@/pages/add-money";
import Transactions from "@/pages/transactions";


export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Entry />} />
      <Route path="/onboarding" element={<Onboarding />} />

      {/* Layout Routes */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/splyt" element={<Splyt />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>

      {/* Add Money Route */}
      <Route path="/add-money" element={<AddMoney />} />
    </Routes>
  );
}
