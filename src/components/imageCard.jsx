import { Container } from "react-bootstrap";
import styles from './imageCard.module.scss'

export default function ImageCard(prop) {
    return (
        <Container className={styles.wrapper}>
            <p className={styles.title}>
                {prop.title}
            </p>
            <img className={styles.pic} src={prop.src} alt="img" />
        </Container>
    )
}