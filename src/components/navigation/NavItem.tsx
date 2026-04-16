import { NavLink } from "react-router-dom";
import { icons, type IconName } from "@/components/ui/Icon";


type Props = {
    to: string;
    icon: IconName;
    label?: string;
}

export default function NavItem({ to, icon, label }: Props) {
    const Icon = icons[icon];

    return (
        <NavLink
            to={to}   
        >
            {({ isActive }) => (
                <div
                    className={`
                        flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200
                        ${
                            isActive ? "bg-accent-soft text-accent" : 
                            "text-muted hover:text-white hover:bg-white/5"
                        }
                    `}
                >
                    <Icon size={20} weight={isActive ? "fill" : "duotone"} />
                    {label && <span className="text-sm">{label}</span>}
                </div>
            )}
            
        </NavLink>
    );
}

