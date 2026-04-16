import { create } from "zustand";


type Transaction = {
    id: string;
    amount: number;
    type: "income" | "expense";
    description: string;
}

type Store = {
    balance: number;
    transactions: Transaction[];
    addTransaction: (tx: Transaction) => void;
}


export const useStore = create<Store>((set) => ({
    balance: 0,
    transactions: [],
    addTransaction: (tx) => set((state) => ({
        transactions: [...state.transactions, tx],
        balance: tx.type === "income" ? state.balance + tx.amount : state.balance - tx.amount,
    })),
}));


