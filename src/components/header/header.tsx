export function Header({ title }: { title: string }) {
    return (
        <header className="text-3xl font-bold bg-blue-300 p-4 shadow-md flex flex-row place-content-between items-center ">
            <h1 className="text-azure-radiance-600">{title}</h1>
            <img
                src="./assets/close.png"
                alt=""
                className="w-6 h-6 cursor-pointer active:translate-y-1"
            />
        </header>
    );
}
