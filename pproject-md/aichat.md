# AIChat

Stacks: React (frontend), Python FastAPI (backend), Docker, Kubernetes (manifests included)

---

## Introduction
AIChat is a full‑stack conversational assistant that demonstrates real‑time streaming LLM interactions in a modern web app. The project pairs a lightweight Python backend with a React frontend to deliver a responsive chat UI, streaming responses, and production‑ready deployment artifacts (Docker + Kubernetes manifests).

![Aichat Screenshot](/pproject-md/aichat/aichat_v0_2.png)

---

## Core features
- Real‑time streaming of LLM responses to the browser (streaming API integration).
- Intuitive, responsive React-based chat UI with typewriter effect.
- Configurable LLM connectors (example Google LLM integration module).
- Dockerfiles and Kubernetes manifests for containerized deployment.
- Clear developer experience: scripts, README, and environment configuration.

---

## Tech stack
- Frontend: React, JavaScript, CSS (src/ folder contains App.js, Chat.js, Typewriter.js)
- Backend: Python (main.py), FastAPI (requirements.txt included)
- DevOps: Dockerfile(s), .dockerignore, kube.yaml manifests
- Tooling: npm, pytest/jest (App.test.js), CI friendly structure

---

## Architecture (high level)
- Browser UI (React) <--> Backend API (Python) <--> LLM provider (streaming)
- Frontend uses streaming endpoints (streamLLM.js) and LLM hooks (useGoogleLLM.js).
- Backend exposes an entrypoint (main.py) that forwards/streams LLM responses and handles auth/ENV config.

---

## Quick setup (Windows)
Backend:
- Open PowerShell in \aichatbot\backend
- python -m venv .venv
- .\.venv\Scripts\Activate
- pip install -r requirements.txt
- python main.py

Frontend:
- Open PowerShell in \aichatbot\aichat
- npm install
- npm start

Docker (example):
- docker build -t aichat-frontend:latest .\aichat
- docker build -t aichat-backend:latest .\backend
- docker run -p 3000:3000 aichat-frontend:latest
- docker run -p 8000:8000 aichat-backend:latest

Kubernetes:
- kubectl apply -f kube.yaml (in each service folder as appropriate)

---

## Key accomplishments / Metrics to highlight
- Implemented streaming LLM responses to UI for low latency UX.
- Built containerized services with orchestration manifests for staging.
- Created modular LLM integration allowing vendor swap (Google LLM example).
- Unit test scaffolding and accessibility of deployment scripts.

---

## Summary
- Built AIChatBot — full‑stack conversational app using React + Python; implemented streaming LLM responses and typewriter UI for real‑time user experience.
- Packaged services with Docker and produced Kubernetes manifests for scalable deployment.
- Designed modular LLM adapter layer to enable rapid provider changes and A/B testing.

---

## Possible Improvement
- Add robust rate limiting and session management on the backend.
- Introduce end‑to‑end tests and CI pipeline to build and push images automatically.
- Add example deployment README with env vars and secrets management (Vault/Kubernetes Secrets).

---
## 📂 Repository

[GitHub Repository](https://github.com/richardsugiarto/AIchat)