export function Inputs({
    handleForm,
    values,
    text,
    type,
    name,
    border,
}: {
    handleForm: any;
    values: string;
    text: string;
    type: string;
    name: string;
    border: string;
}) {
    return (
        <div className="flex flex-col p-4 ">
            <label className="text-lg font-semibold p-2 ">{text}</label>
            <input
                type={type}
                name={name}
                value={values}
                onInput={handleForm}
                className={`bg-blue-100 rounded w-60 h-8 border-2 ${border} text-base px-1 focus:outline-none focus:bg-blue-200 focus:border-blue-300`}
                autoComplete="off"
            />
        </div>
    );
}
