import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import thesisData from "../data/thesis";
import { Container } from "@mui/material";

export default function ThesisDetailPage() {
    const { thesisId } = useParams();
    const [mdContent, setMdContent] = useState("");

    // Find thesis from JSON
    const thesis = thesisData.find((t) => t.id === thesisId);

    useEffect(() => {
        if (thesis) {
            fetch(thesis.mdFile)
                .then((res) => res.text())
                .then((text) => setMdContent(text))
                .catch((err) => console.error(err));
        }
    }, [thesis]);

    if (!thesis) return <div className="myContainer"><Container maxWidth="xl"><p>Thesis not found.</p></Container></div>;

    return (
        <div className="thesis-detail-page myContainer" >
            <Container maxWidth="xl">
                <h1>{thesis.title}</h1>
                <p>Skills : {thesis.skills}</p>
                <p>{thesis.description}</p>
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
