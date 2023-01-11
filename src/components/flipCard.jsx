import { useState } from "react";
import { Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import styles from './flipCard.module.scss'

export default function FlipCard(prop) {

    const [flip,setFlip] = useState(false)
    return (
        <ReactCardFlip isFlipped={flip}>
            <Container className={styles.wrapper}>
                <p className={styles.title}>{prop.title}</p>
                <img className={styles.pic} src={prop.src} onMouseEnter={()=>setFlip(true)} alt="sensor"/>
            </Container>
            <Container className={styles.wrapper}>
                <p className={styles.title}>{prop.title}</p>
                <div className={styles.descContainer} onMouseLeave={()=>setFlip(false)}>
                    <p>{prop.desc}</p>
                </div>
            </Container>

        </ReactCardFlip>
    )
}