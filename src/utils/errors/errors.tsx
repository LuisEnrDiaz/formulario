export function Errors({ text }: { text: string }) {
    return (
        <div className="px-4 bg-red-200 p-1 rounded-sm">
            <p className="text-red-600 text-xs font-bold">{text}</p>
        </div>
    );
}
