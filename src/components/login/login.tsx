import { SyntheticEvent, useEffect, useState } from "react";
import { ErrorsI } from "../../type/errorI";
import { loginI } from "../../type/loginI";
import { Button } from "../../utils/button/button";
import { Errors } from "../../utils/errors/errors";
import { Header } from "../header/header";
import { Inputs } from "../../utils/inputs/inputs";
import { Spinner } from "../../utils/spiner/spinner";

export function Login() {
    const initialState: loginI = {
        password: "",
        email: "",
        userName: "",
    };

    const initialStateError: ErrorsI = {
        userName: false,
        password: false,
        email: false,
    };

    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(initialStateError);
    const [isVisible, setIsVisible] = useState(false);

    const handleForm = (event: SyntheticEvent) => {
        event.preventDefault();
        const element = event.target as HTMLFormElement;
        setValues({ ...values, [element.name]: element.value });
    };

    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();

        const newErrors: ErrorsI = {
            email: !values.email,
            userName: !values.userName,
            password: !values.password,
        };

        setError(newErrors);

        !Object.values(newErrors).some((error) => error)
            ? setIsVisible(true)
            : setIsVisible(false);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isVisible) {
            timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <section className="h-[43rem] w-96 font-serif bg-white ">
            <Header title="Iniciar sesion"></Header>

            <form className="grid place-content-center">
                <Inputs
                    type="email"
                    text="Correo electronico"
                    handleForm={handleForm}
                    values={values.email}
                    name="email"
                    border={!error.email ? "border-blue-200" : "border-red-500"}
                />

                {!error.email ? (
                    <></>
                ) : (
                    <Errors text="Correo electronico requerido"></Errors>
                )}

                <Inputs
                    type="text"
                    text="Nombre de usuario"
                    handleForm={handleForm}
                    values={values.userName}
                    name="userName"
                    border={
                        !error.userName ? "border-blue-200" : "border-red-500"
                    }
                />

                {!error.userName ? (
                    <></>
                ) : (
                    <Errors text="Nombre de usuario requerido"></Errors>
                )}

                <Inputs
                    type="password"
                    text="Contraseña"
                    handleForm={handleForm}
                    values={values.password}
                    name="password"
                    border={
                        !error.password ? "border-blue-200" : "border-red-500"
                    }
                />

                {!error.password ? (
                    <></>
                ) : (
                    <Errors text="Contraseña requerida"></Errors>
                )}

                {(error.email || error.userName || error.password) && (
                    <div className="px-4 bg-red-200 p-1 rounded-sm">
                        <p className="text-red-600 text-xs font-bold">
                            Campos requeridos
                        </p>
                    </div>
                )}

                {isVisible === true ? (
                    <Spinner></Spinner>
                ) : (
                    <Button
                        color=""
                        onClick={handleClick}
                        children="Entrar"
                    ></Button>
                )}
            </form>
        </section>
    );
}
