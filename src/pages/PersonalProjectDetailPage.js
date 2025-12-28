import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import pprojectData from "../data/pproject";
import { Container } from "@mui/material";
import CustomMarkdownLoader from "../components/CustomMarkdownLoader";

export default function PersonalProjectDetailPage() {
    const { pprojectId } = useParams();
    const [mdContent, setMdContent] = useState("");

    // Find project from JSON
    const project = pprojectData.find((p) => p.id === pprojectId);
    useEffect(() => {
        if (project) {
            fetch(project.mdFile)
                .then((res) => res.text())
                .then((text) => setMdContent(text))
                .catch((err) => console.error(err));
        }
    }, [project]);

    if (!project) return <div className="myContainer"><Container maxWidth="xl"><p>Project not found.</p></Container></div>;

    return (
        <div className="personal-project-detail-page myContainer" >
            <Container maxWidth="xl">
                <h1>{project.title}</h1>
                <p>Skills : {project.skills}</p>
                <p>{project.description}</p>
                <hr />
                <CustomMarkdownLoader mdFile={mdContent} />
            </Container>
        </div>
    );
}
