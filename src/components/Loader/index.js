import React from "react";

export const Loader = (dark = false) => (
    <div className="text-center mt-1">
        <span
            className="font-italic"
            style={dark ? {color: "darkgrey"} : {color: "whitesmoke"}}
        >
            Загрузка данных с сервера...
        </span>
        <br/>
        <div className="spinner-grow" style={dark ? {color: "darkgrey"} : {color: "white"}}>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);