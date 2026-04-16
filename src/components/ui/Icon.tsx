import {
    House,
    ArrowsLeftRight,
    ChartBar,
    User,
} from "phosphor-react";


export const icons = {
    home: House,
    split: ArrowsLeftRight,
    overview: ChartBar,
    profile: User,
}

export type IconName = keyof typeof icons;

