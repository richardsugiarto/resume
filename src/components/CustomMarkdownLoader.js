import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CustomMarkdownLoader({ mdFile }) {
    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
            img({ src, alt }) {
                const base = process.env.PUBLIC_URL || "";
                return <img src={base + src} alt={alt} style={{ maxWidth: "100%" }} />;
            },
            table({ children }) {
                return (
                    <table style={{
                        border: "1px solid #ddd",
                        borderCollapse: "collapse"
                    }}>
                        {children}
                    </table>
                );
            },
            thead({ children }) {
                return (
                    <thead style={{ backgroundColor: "#f5f5f5" }}>
                        {children}
                    </thead>
                );
            },
            th({ children }) {
                return (
                    <th style={{
                        border: "1px solid #ddd",
                        padding: "8px 12px",
                        textAlign: "left"
                    }}>
                        {children}
                    </th>
                );
            },
            td({ children }) {
                return (
                    <td style={{
                        border: "1px solid #ddd",
                        padding: "8px 12px"
                    }}>
                        {children}
                    </td>
                );
            }
        }}>{mdFile}</ReactMarkdown>
    );
}