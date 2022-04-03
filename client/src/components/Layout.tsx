//import styles from "./Layout.module.scss"
import { FC } from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/LayoutStyle.scss'

interface LayoutProps {
}


const Layout: FC<LayoutProps> = function ({ children }) {
    return (
        <>
            <header className='header'>
                <nav className='nav'>
                    <NavLink className='nav__navLink' to={"/"}>Главная</NavLink>
                    <NavLink className='nav__navLink' to={"/"}>не Главная</NavLink>
                </nav>
            </header>
            <div className="globalCont">
                {children}
            </div>
        </>
    )
}
export { Layout };
