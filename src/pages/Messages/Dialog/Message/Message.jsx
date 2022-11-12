import styles from "./Message.module.scss"
import image_placeholder from "../../../../images/image-placeholder1.png";

function Message(props) {
    return (
        <div className={styles.from_user + " " + styles.message}>
            <img src={image_placeholder} alt=""/>
            Message1 awergqwvcasd waeefqwe wef wef qwerferfgwer qerfgwer qwewrfqerf
        </div>
    )
}

export {Message}