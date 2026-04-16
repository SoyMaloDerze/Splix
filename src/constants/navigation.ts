import { type IconName } from "@/components/ui/Icon";

export type NavItemType = {
    label: string;
    path: string;
    icon: IconName;
}


export const NAV_ITEMS: NavItemType[] = [
    { label: "Dashboard", path: "/dashboard", icon: "home" },
    { label: "Split", path: "/splyt", icon: "split" },
    { label: "Overview", path: "/overview", icon: "overview" },
    { label: "Profile", path: "/profile", icon: "profile" },
];

