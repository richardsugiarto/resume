# Thesis Portfolio (Master Degree)

## Introduction
Motion learning is commonly used to analyze and compare human movement based on skeletal joint data. This process works by comparing all joints of one skeleton against another. To obtain joint positions, a pose estimator is required—popular options include OpenPose, DensePose, and others.  
In this thesis, **OpenPose** is used as the 2D pose estimator.

A single-view 2D pose estimator is insufficient for capturing complete pose information, as it only provides data from a single viewpoint. To overcome this limitation, a **multi-camera approach** is adopted to gather information from multiple angles. Each camera requires **intrinsic and extrinsic calibration**, enabling accurate reconstruction of 3D coordinates.

Once 3D poses are obtained, **scoring** can be performed using **Dynamic Time Warping (DTW)**, an algorithm for measuring similarity between temporal sequences. DTW handles differences in speed or frame count, making it suitable for motion comparison tasks.

### Required Skills
- OpenCV  
- C++  
- Python  

---

## Development

### System Workflow
![System Workflow](/thesis-md/masterthesis/image1.png)

The system is composed of four major components:
1. **2D Pose Estimation**  
2. **Camera Projection**  
3. **Kalman Filter for Noise Reduction**  
4. **Scoring using Dynamic Time Warping (DTW)**  

The image above illustrates the system architecture.

---

### 2D to 3D Pose Estimation
![3D Pose App](/thesis-md/masterthesis/image2.png)

The bottom section of the image shows the **2D pose estimation** results, while the upper section displays the **3D pose estimation** reconstruction.  
Before calculating 3D joint positions, the system performs:
- **Intrinsic camera calibration**  
- **Extrinsic camera calibration**

Both calibrations are required due to the multi-camera setup.

### Camera Calibration Images
![Chessboard calibration](/thesis-md/masterthesis/image3.png)

---

### Motion Comparison & Scoring
![Motion comparison](/thesis-md/masterthesis/image4.png)

The image above shows the application's motion comparison result.  
Each joint is evaluated for error, and joints exceeding the error threshold are highlighted in **red**, making discrepancies easy to identify.