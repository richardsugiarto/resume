# 🏍️ Helmet Presence Detection

A computer vision system for detecting motorcyclists and determining helmet usage in real-world dashcam footage.  
This project is an enhanced, production-oriented evolution of my bachelor thesis, focusing on efficiency, robustness, and practical deployment.

---

## 🔍 Problem Statement

Helmet usage detection in traffic scenes is challenging due to:

- Small and partially occluded riders
- Multiple riders on a single motorcycle
- Varying camera viewpoints (front / rear)
- Class imbalance (helmet vs no-helmet)
- Real-time constraints

My original bachelor thesis relied on **sliding windows and multiple CNNs**, which were computationally heavy and difficult to scale.

This project redesigns the pipeline to be **lighter, faster, and more robust**.

---

## 🧠 Solution Overview

![System Architecture](/pproject-md/helmet_presence_detection/Helmet_Presence_Architecture.png)

The system follows a **two-stage architecture**:

### Stage 1 — Detection & Association
- YOLOv8 detects **person** and **motorcycle** objects
- Riders are associated to motorcycles using IoU and distance heuristics
- Supports **multiple riders per motorcycle**
- Produces a unified *motorcyclist bounding box*

### Stage 2 — Helmet Classification
- Cropped rider regions are classified using **ResNet-18**
- Binary classification: `helmet` / `no_helmet`
- Class-weighted training to address imbalance

---

## 🎨 Decision Logic & Visualization

Each motorcycle is assigned a final status based on all associated riders:

| Color   | Meaning |
|--------|---------|
| 🟢 Green | All riders wear helmets |
| 🟡 Yellow | Uncertain (low confidence / partial visibility) |
| 🔴 Red | At least one rider without helmet |

> If any rider violates helmet usage, the **entire motorcycle** is flagged as a violation.

![Inference Example](/pproject-md/helmet_presence_detection/helmet_detection_output.jpg)

---

## 📊 Model Performance

### Dataset Summary

| Class     | Train | Validation | Total |
|----------|-------|------------|-------|
| Helmet   | 3,974 | 443        | 4,417 |
| NoHelmet| 342   | 86         | 428   |
| **Total**| 4,316 | 529        | 4,845 |

> Dataset mainly contains **rear-view riders**, which may affect front-facing classification accuracy.

---

### Training Curves

- **F1 Score**
  ![F1 Score Curve](/pproject-md/helmet_presence_detection/f1.png)

- **Loss**
  ![Loss Curve](/pproject-md/helmet_presence_detection/loss.png)

---

### Best Validation Results

| Metric | Value |
|------|-------|
| F1-score | **0.994** |
| Recall (NoHelmet) | **0.988** |
| Validation Loss | **0.0081** |

**Key Insight:**  
High recall on the **NoHelmet** class ensures violations are rarely missed, which is critical for safety-related applications.

---

## 🚀 Improvements Over Previous Thesis

| Aspect | Bachelor Thesis | This Project |
|-----|-----------------|--------------|
| Detection | Sliding windows | YOLOv8 |
| Classifiers | 2× ResNet + CNN | Single ResNet-18 |
| Riders | Single | Multiple riders supported |
| Speed | Heavy | Lightweight & real-time friendly |
| Robustness | Limited | Occlusion-aware association |

---

## 📚 Background Publication

This project is an improved implementation of:

**Helmet Usage Detection on Motorcyclist Using Deep Residual Learning**  
Richard Sugiarto, Evan Kusuma Susanto, Yosi Kristian  
EIConCIT 2021 — [DOI:10.1109/eiconcit50028.2021.9431914](https://doi.org/10.1109/eiconcit50028.2021.9431914)

---

## ⚠️ Limitations

- Helmet classifier trained mainly on **rear-view images**
- Extreme occlusion may cause uncertain classification
- Heuristic association may fail in dense traffic
- Does not yet track riders across frames (no temporal consistency)

---

## 🔮 Future Improvements

- Train helmet classifier with **front-view and side-view data**
- Add **object tracking** (ByteTrack / DeepSORT)
- Extend to video-level violation

---

## 🧑‍💻 Skills Demonstrated

- Computer Vision system design
- YOLO-based detection pipelines
- CNN fine-tuning with imbalanced data
- Multi-object association logic
- End-to-end ML engineering
- Research-to-production transition

---

## 📂 Repository

[GitHub Repository](https://github.com/richardsugiarto/motorcyclist_classifier)

---

> This project demonstrates my ability to transform academic research into a practical, scalable computer vision system suitable for real-world deployment.
