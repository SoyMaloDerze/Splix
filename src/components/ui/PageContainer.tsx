

type Props = {
    children: React.ReactNode
    title?: string
}

export default function PageContainer({ children, title}: Props) {
    return (
        <div className="flex flex-col gap-6">
            {title && (
                <h1 className="text-2xl font-semibold tracking-tight">
                    {title}
                </h1>
            )}

            {children}
        </div>
    );
}




