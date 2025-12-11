# University’s Final Project Portfolio (Bachelor Degree)

## Introduction
Helmet Usage Detection on Motorcyclists is an automated system designed to detect riders who are not wearing helmets using dashcam footage. The workflow is divided into two main steps: **motorcyclist detection** and **rule violation detection**.  
A convolutional neural network with a sliding window is used to detect motorcyclists. For rule violation detection, two residual network architectures are used—one model counts the number of passengers, while another counts the number of helmets. A violation is flagged when the number of helmets detected is less than the number of passengers.

### Required Skills
- Python  
- TensorFlow  
- Keras  
- OpenCV  

---

## Development

### Detection Workflow
![System Workflow](/thesis-md/bachelorthesis/image1.png)

The workflow begins by extracting frames from the dashcam video.  
Each frame goes through a sliding-window process and is classified as either **motorcyclist** or **non-motorcyclist**.  
Detected motorcyclists are then passed into the ResNet-based models for passenger counting and helmet counting.  
After processing all frames, the results are compiled back into a video.

---

### Dataset Collection
![Motorcyclist dataset](/thesis-md/bachelorthesis/image2.png)  
![Motorcyclist dataset](/thesis-md/bachelorthesis/image3.png)  
![Helmet Dataset](/thesis-md/bachelorthesis/image4.png)

These images show examples of the dataset used to train and test each model.  
All training data was collected from **car dashcam footage**, providing real-world scenarios for detection.

---

### Detection Results
![Detection Result](/thesis-md/bachelorthesis/image5.png)

This image shows the final detection output.  
- **Red boxes** indicate violators (riders without helmets).  
- **Green boxes** indicate non-violators.  

All processed frames are then reassembled into a final output video showing the detection results.

---

## Publication
- [**IEEE Xplore**](https://ieeexplore.ieee.org/document/9431914)