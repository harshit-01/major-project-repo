import { Container } from "react-bootstrap";
import ContentCard from "./contentCard";


export default function ContentContainer(props) {
    return (
        <Container className="contentContainer">
        {props.heading &&   <p className="contentHeading">{props.heading}</p>}
            <p className="contentSubheading">{props.subheading}</p>
            <Container>
                {props.data.map(e =>(
                    <ContentCard content={e.content} url={e.URL} doi={e.DOI}/>
                ))}
            </Container>
        </Container>
    )
}