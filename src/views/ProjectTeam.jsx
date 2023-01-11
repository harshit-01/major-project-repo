import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
import Card from "../components/card";

import { teamMember } from "../assets/data/projectTeam";

export default function ProjectTeam() {
    return (
        <>
            <Header/>
            <p className="projectTeamHeading">Project Team</p>
            <Container className="projectTeamContainer">
                
                {
                    teamMember.map((member) => (
                        <Card name = {member.name} title = {member.title} img = {member.img} add = {member.add} social = {member.linkedin}/>
                    ))
                }
            </Container>
            <Footer/>
        </>
        
    )
}