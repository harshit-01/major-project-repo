import { Container } from "react-bootstrap";

import styles from './videoCard.module.scss'

export default function VideoCard(prop) {
    return (
        <Container className={styles.wrapper}>
            <p className={styles.title}>
            {prop.title}
          </p>
          <video
            src={prop.src}
            controls
            class={styles.player}
          ></video>
        </Container>
        
    )
}