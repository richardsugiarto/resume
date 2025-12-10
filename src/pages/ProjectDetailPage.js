import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import experienceData from "../data/experience";
import { Container } from "@mui/material";

export default function ProjectDetailPage() {
    const { projectId } = useParams();
    const [mdContent, setMdContent] = useState("");

    // Find project from JSON
    const project = experienceData.find((p) => p.id === projectId);

    useEffect(() => {
        if (project) {
            fetch(project.mdFile)
                .then((res) => res.text())
                .then((text) => setMdContent(text))
                .catch((err) => console.error(err));
        }
    }, [project]);

    if (!project) return <div className="myContainer"><Container maxWidth="xl"><p>Portfolio not found.</p></Container></div>;

    return (
        <div className="project-detail-page myContainer" >
            <Container maxWidth="xl">
                <h1>{project.jobTitle} @ {project.companyNamePortfolio}</h1>
                <p>{project.description}</p>
                <hr />
                <ReactMarkdown components={{
                    img({ src, alt }) {
                        const base = process.env.PUBLIC_URL || "";
                        return <img src={base + src} alt={alt} style={{ maxWidth: "100%" }} />;
                    }
                }}>{mdContent}</ReactMarkdown>
            </Container>
        </div>
    );
}
