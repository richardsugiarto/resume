# ![EUI Logo](/experience-md/euidl/image0.png)

## Introduction
This project focuses on creating a lightweight module that helps administrators validate data submitted by users.  
It consists of two main sections:

1. **Glare Detection** – When taking a photo of an ARC card, glare detection ensures the captured image is clear.  
   If glare is detected, the system notifies the user to retake the photo.

2. **ARC & Face Position Validation** – Ensures that the ARC card does not cover the user’s face when capturing the final photo.

### Required Skills
- Python  
- C++ (Swift)  
- Java (Android Studio)  
- Machine Learning  
- TensorFlow  
- Keras  
- OpenCV  

---

## Development

### Glare Detection
![EUI Mobile Glare detection](/experience-md/euidl/image2.jpg)

For the first section, glare detection is implemented using **OpenCV**.  
If the color contrast between the environment and the ARC is too high, the system identifies it as invalid (indicating glare).  
The sample result is shown in the image above.

---

### Dataset Collection & Annotation
To validate ARC and face positioning, we first collected a dataset containing ARC images and human faces.  
**Roboflow** was used for dataset annotation and augmentation.

![EUI dataset collection](/experience-md/euidl/image3.png)

---

### Model Training & Desktop Testing
We trained the model using **Tiny YOLO** and tested it on a desktop environment.  
If the ARC falls outside the red bounding box during detection, it is marked as invalid.

![EUI desktop ARC validation](/experience-md/euidl/image4.png)

---

### Android Integration (TFLite)
After completing desktop validation, the model was converted to **TensorFlow Lite (TFLite)** for mobile deployment.  
Within Android Studio, the TFLite model is loaded and executed using the device camera for real-time detection.

![EUI mobile ARC validation](/experience-md/euidl/image5.jpg)