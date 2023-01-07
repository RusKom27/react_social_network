import React from "react"
import styles from "./DropdownMenu.module.scss"
import {useEffect, useState} from "react";
import {ReactComponent as ThreeDots} from "../../../static/images/svg/three-dots.svg";
import {Button} from "../Button/Button";

function DropdownMenu({options}) {
    const [isDropdownOpened, toggleDropdown] = useState(false)

    const optionsButtons = Object.keys(options).map((option, i) => {
        return <Button key={i} onClick={options[option]}>{option}</Button>
    })

    useEffect(() => {
        const isClickOutOfDropdown = event => {
            if(!event.target.parentElement.classList.contains(styles.post_dropdown) &&
                isDropdownOpened &&
                (event.target.tagName !== "BUTTON" && event.target.tagName !== "svg" && event.target.tagName !== "path"))
                toggleDropdown(false)
        }
        window.addEventListener('click', isClickOutOfDropdown)
        return () => {
            window.removeEventListener('click', isClickOutOfDropdown)
        }
    })

    return (
        <div className={styles.container}>
            <button onClick={() => toggleDropdown(!isDropdownOpened)}>
                <ThreeDots/>
            </button>
            {isDropdownOpened &&
                <div className={styles.post_dropdown}>
                    {optionsButtons}
                </div>
            }
        </div>
    )
}

export {DropdownMenu}