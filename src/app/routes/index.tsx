import { Routes, Route } from "react-router-dom"
import AppLayout from "@/app/layout/AppLayout"
import Entry from "@/pages/entry/"
import Onboarding from "@/pages/onboarding/"
import Dashboard from "@/pages/dashboard/"
import Splyt from "@/pages/splyt/"
import Overview from "@/pages/overview/"
import Profile from "@/pages/profile/"


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
      </Route>
    </Routes>
  );
}
