//import styles from "./Layout.module.scss"
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "../styles/LayoutStyle.scss";

const Layout: FC = function ({ children }) {
    return (
        <>
            <header className='header'>
                <nav className='nav'>
                    <NavLink className='nav__navLink' to={"/"}>
                        Главная
                    </NavLink>
                </nav>
            </header>
            <div className='globalCont'>{children}</div>
        </>
    );
};
export { Layout };
