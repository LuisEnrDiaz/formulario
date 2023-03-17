import { SyntheticEvent, useEffect, useState } from "react";
import { RegisterI } from "../../type/registerI";
import { Button } from "../../utils/button/button";
import { Header } from "../header/header";
import { Inputs } from "../../utils/inputs/inputs";
import { ErrorsI } from "../../type/errorI";
import { Errors } from "../../utils/errors/errors";
import { Spinner } from "../../utils/spiner/spinner";

export function Register() {
    const initialState: RegisterI = {
        name: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
    };

    const initialStateError: ErrorsI = {
        name: false,
        lasName: false,
        userName: false,
        email: false,
        password: false,
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
        event?.preventDefault();

        const newErrors: ErrorsI = {
            name: !values.name,
            lasName: !values.lastName,
            userName: !values.userName,
            email: !values.email,
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
        <section className="h-full w-96 font-serif bg-white">
            <Header title="Crear cuenta" />

            <form className="grid place-content-center">
                <Inputs
                    type="text"
                    text="Nombre"
                    handleForm={handleForm}
                    values={values.name}
                    name="name"
                    border={!error.name ? "border-blue-200" : "border-red-500"}
                ></Inputs>

                {!error.name ? (
                    <></>
                ) : (
                    <Errors text="Nombre requerido"></Errors>
                )}

                <Inputs
                    type="text"
                    text="Apellidos"
                    handleForm={handleForm}
                    values={values.lastName}
                    name="lastName"
                    border={
                        !error.lasName ? "border-blue-200" : "border-red-500"
                    }
                ></Inputs>

                {!error.lasName ? (
                    <></>
                ) : (
                    <Errors text="Apellidos requeridos"></Errors>
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
                ></Inputs>

                {!error.userName ? (
                    <></>
                ) : (
                    <Errors text="Nombre de usuario requerido"></Errors>
                )}

                <Inputs
                    type="email"
                    text="Correo electronico"
                    handleForm={handleForm}
                    values={values.email}
                    name="email"
                    border={!error.email ? "border-blue-200" : "border-red-500"}
                ></Inputs>

                {!error.email ? (
                    <></>
                ) : (
                    <Errors text="Correo electronico requerido"></Errors>
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
                ></Inputs>

                {!error.password ? (
                    <></>
                ) : (
                    <Errors text="Contraseña requerida requerido"></Errors>
                )}

                {(error.email ||
                    error.userName ||
                    error.password ||
                    error.name ||
                    error.lasName) && (
                    <div className="px-4 bg-red-200 p-1 rounded-sm">
                        <p className="text-red-600 text-xs font-bold">
                            Campos requeridos
                        </p>
                    </div>
                )}

                {isVisible === true ? (
                    <Spinner></Spinner>
                ) : (
                    <Button onClick={handleClick} color="bg-blue-300">
                        Registrarse
                    </Button>
                )}
            </form>
        </section>
    );
}
