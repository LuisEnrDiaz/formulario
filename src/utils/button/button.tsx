export function Button({
    children,
    color,
    onClick,
}: {
    children: string;
    color: string;
    onClick: any;
}) {
    return (
        <div className="grid justify-center items-center h-20">
            <button
                onClick={onClick}
                className={`${color} bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  active:translate-y-1`}
            >
                {children}
            </button>
        </div>
    );
}
