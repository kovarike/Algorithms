interface PropsDoilog {
    children?: React.ReactNode;
}

export function Doilog({ children }: PropsDoilog) {
    return (
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black ">
            {children}
        </div>
    );
}