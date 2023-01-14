import { Container } from "react-bootstrap";
import ModalImage from "react-modal-image";
import styles from './imagePopup.module.scss'

export default function ImagePopop(prop)
{
    return(
        <Container className={styles.wrapper}>
            <p className={styles.heading}>{prop.title}</p>
            <p className={styles.subheading}>(Click to view Poster)</p>
            <ModalImage
                small={prop.small}
                large = {prop.large}
            />
        </Container>
    )
}