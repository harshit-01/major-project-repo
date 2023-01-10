import { Container } from "react-bootstrap"


export default function ContentCard(props) {
    return (
        <Container className="contentCardContainer">
            <p className="contentCardText">{props.content}</p>
            {props.url && 
                <p className="contentCardText">URL <a className="contentCardLink" href={props.url}>{props.url}</a></p>
            }
            {props.doi &&
                <p className="contentCardText">DOI <a className="contentCardLink" href={props.doi}>{props.doi}</a></p>
            }
        </Container>
        
        
    )
}