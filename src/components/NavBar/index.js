import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import './style.scss'

export const NavBar = ({header = null}) => {
    const [hide, setHide] = useState(true);

    const width = window.innerWidth;

    if (header){
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light h-1 header">
                {/*<div className="logo">Sukhachev</div>*/}
                <button
                    className="navbar-toggler p-0"
                    type="button"
                    onClick={() => setHide(!hide)}
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <ul className="navbar-nav ml-lg-3" style={hide && width < 992 ? {display: 'none'} : {display: 'flex'}}>
                    <li className="nav-item pr-1" onClick={() => setHide(true)}>
                        <NavLink className="nav-link" to="/" exact={true}>Главная</NavLink>
                    </li>
                    <li className="nav-item" onClick={() => setHide(true)}>
                        <NavLink className="nav-link" to="/bio">О себе</NavLink>
                    </li>
                    <li className="nav-item" onClick={() => setHide(true)}>
                        <NavLink className="nav-link" to="/hobbies">Хобби и увлечения</NavLink>
                    </li>
                    <li className="nav-item" onClick={() => setHide(true)}>
                        <NavLink className="nav-link" to="/notes">Заметки</NavLink>
                    </li>
                    <li className="nav-item" onClick={() => setHide(true)}>
                        <NavLink className="nav-link" to="/url-shorter">Сокращение ссылок</NavLink>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <div className="bg-light fixed-bottom footer">
                <p className="linkIn" onClick={() => window.open('https://www.linkedin.com/in/ivan-sukhachev/')}> &copy; 2020 bySukhachev</p>
            </div>
        );
    }
};