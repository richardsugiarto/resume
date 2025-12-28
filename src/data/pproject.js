const base = process.env.PUBLIC_URL || ""

const pprojectData = [
    {
        id: "helmet_presence_detection",
        coverImage: base + "/pproject-md/helmet_presence_detection/helmet_detection_output.jpg",
        description: "A lightweight, multi-stage pipeline to detect motorcyclists and determine helmet presence in dashcam images by combining a YOLO-based object detector and a ResNet-18 helmet classifier.",
        mdFile: base + "/pproject-md/helmet_presence_detection.md",
        title: "Helmet Presence Detection on Motorcyclists",
        skills: "Python, OpenCV, PyTorch, Yolo, Machine Learning, Computer Vision"
    },
    {
        id: "motorcyclist_classifier",
        coverImage: base + "/pproject-md/motorcyclist_classifier/motorcyclist_classifier.png",
        description: "Built a PyTorch-based CNN image classifier to detect motorcyclists, reimplementing a published Keras model and achieving ~88% test accuracy with stable convergence and end-to-end training and inference support.",
        mdFile: base + "/pproject-md/motorcyclist_classifier.md",
        title: "Motorcyclist Classification System Using PyTorch and OpenCV",
        skills: "Python, OpenCV, PyTorch, Machine Learning, Computer Vision"
    },
    {
        id: "aichat",
        coverImage: base + "/pproject-md/aichat/aichat_v0_2.png",
        description: "An AI chat application with a React frontend and Python FastAPI backend, integrating Google Gemini and Ollama models for dynamic conversations, chat history, and responsive design.",
        mdFile: base + "/pproject-md/aichat.md",
        title: "AI Chat Application with React and Python FastAPI Backend",
        skills: "Python, FastAPI, React, Google Gemini, Ollama"
    },
    {
        id: "smarthome",
        coverImage: base + "/pproject-md/smarthome/image5.jpeg",
        description: "A home automation system that monitors and controls home appliances using IoT technology, featuring a web dashboard and Android app for remote access.",
        mdFile: base + "/pproject-md/smarthome.md",
        title: "IoT-Based Smart Home Automation System with Web Dashboard and Android Application",
        skills: "Arduino, ESP8266, Node.js, Express, MongoDB, React, Android (Java)"
    }
]

export default pprojectData;