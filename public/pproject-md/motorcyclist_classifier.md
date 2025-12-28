# Motorcyclist Image Classifier (PyTorch)

Binary image classification system that detects whether an image contains a motorcyclist or not. This project is a PyTorch reimplementation of a previously published Keras-based model, focusing on reproducibility, training stability, and inference clarity.

![Motorcyclist Classifier](/pproject-md/motorcyclist_classifier/motorcyclist_classifier.png)

## 🔧 What I built

- Designed and implemented a custom 5-layer CNN using PyTorch
- Reimplemented the original Keras architecture into idiomatic PyTorch
- Built a complete training + validation + testing pipeline
- Added single-image inference support for real-world usage
- Logged and visualized training metrics for analysis

## 🧠 Model & training details

**Architecture:** 5× Conv2D blocks with ReLU + MaxPool
- Channel sizes: [16, 32, 64, 128, 256]
- Fully connected head: Linear → ReLU → Dropout(0.5) → Linear (2 logits)
- Input resolution: 200×400 RGB images

**Training configuration:**
- Loss function: CrossEntropyLoss
- Optimizer: SGD (lr=0.05, momentum=0.9, Nesterov, weight decay)
- Dataset split: Train / Validation / Test

## 📊 Results

- Test Accuracy: ~87.8%
- Test Loss: ~0.45
- Stable convergence observed after ~15 epochs
- Validation accuracy peaks at ~90%

![Training accuracy plot](/pproject-md/motorcyclist_classifier/training_curves_acc.png)
_Training accuracy plot_

![Training loss plot](/pproject-md/motorcyclist_classifier/training_curves_loss.png)
_Training loss plot_

## 🚀 Tools & technologies

- PyTorch, torchvision
- Python, NumPy
- PIL (image preprocessing)
- Matplotlib (training visualization)
- scikit-learn (dataset splitting)

## 🧩 Key engineering considerations

- Handled variable batch dimensions correctly during training and inference
- Ensured correct use of raw logits with CrossEntropyLoss
- Implemented safe inference pipeline using `torch.no_grad()` and `model.eval()`
- Identified and addressed architectural constraints related to input image sizing

## 📂 Repository

[GitHub Repository](https://github.com/richardsugiarto/motorcyclist_classifier)