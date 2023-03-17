import { SyntheticEvent, useState } from "react";

import { Button } from "../../utils/button/button";
import { Login } from "../login/login";
import { Register } from "../register/register";

export function Main() {
    const [currentPage, setCurrentPage] = useState("login");

    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        setCurrentPage(currentPage === "login" ? "register" : "login");
    };

    return (
        <main className="flex flex-row shadow-2xl border-b-4 border-blue-700">
            <section
                className="h-full w-[30rem] bg-gradient-to-tr from-rose-500 to-buttercup-500 bg-cover bg-center border-r-4 border-black grid items-end "
                style={{ backgroundImage: `url('./assets/logo.jpg')` }}
            >
                <div className="flex flex-row place-content-around ">
                    <Button
                        color=""
                        onClick={handleClick}
                        children={
                            currentPage === "login" ? "Crear cuenta" : "Entrar"
                        }
                    ></Button>
                </div>
            </section>

            {currentPage === "register" ? (
                <div className="">
                    <Register></Register>
                </div>
            ) : (
                <Login></Login>
            )}
        </main>
    );
}
