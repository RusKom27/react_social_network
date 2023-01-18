import React, {FC, MouseEventHandler} from "react"
import {useEffect, useState} from "react";

import {ReactComponent as ThreeDots} from "../../../static/images/svg/three-dots.svg";
import {useOutsideClickAlert} from "../../../hooks";
import {Button} from "../Button/Button";

import styles from "./DropdownButton.module.scss"

type PropsType = {
    options: any
}

export const DropdownButton: FC<PropsType> = ({options}) => {
    const [isOpened, toggleMenu] = useState(false)
    const {ref, isComponentVisible, setIsComponentVisible} = useOutsideClickAlert()
    const optionsButtons = Object.keys(options).map((option, i) => {
        return <Button key={i} onClick={options[option]}>{option}</Button>
    })

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => setIsComponentVisible(!isComponentVisible)}>
                <ThreeDots/>
            </button>
            {isComponentVisible && <div ref={ref} className={styles.button_container}>
                { optionsButtons }
            </div> }
        </div>
    )
}