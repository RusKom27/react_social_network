import React, {FC} from "react"

import {ReactComponent as ThreeDots} from "../../../static/images/svg/three-dots.svg";
import {useOutsideClickAlert} from "../../../hooks";
import {Button} from "../Button/Button";

import styles from "./DropdownButton.module.scss"

type PropsType = {
    options: any
}

export const DropdownButton: FC<PropsType> = ({options}) => {
    const {ref, isComponentVisible, setIsComponentVisible} = useOutsideClickAlert()
    const optionsButtons = Object.keys(options).map((option_name, i) => {
        return <Button key={i} onClick={options[option_name]}>{option_name}</Button>
    })
    return (
        <div data-is-expanded={isComponentVisible} className={styles.container}>
            <button className={styles.three_dots_button} onClick={() => setIsComponentVisible(!isComponentVisible)}>
                <ThreeDots/>
            </button>
            <div ref={ref} className={styles.button_container}>
                { optionsButtons }
            </div>
        </div>
    )
}