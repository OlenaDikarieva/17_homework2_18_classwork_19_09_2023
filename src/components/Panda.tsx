import React from "react";
import pandaImage from "./images/Panda.jpeg";
import style from "./Panda.module.css";

export default function Panda(): JSX.Element {
    return (
        <div className={style.container}>
            <h1 className={style.heading}>Panda</h1>
            <p className={style.description}>Информация про панду</p>
            <h2> image 1</h2>
            <img src={pandaImage} alt="panda" />
            <h2> image 2</h2>
            <img src="/Panda.jpeg" alt="panda" />
        </div>
    );
}
