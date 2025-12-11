const base = process.env.PUBLIC_URL || ""

const thesisData = [
    {
        id: "masterthesis",
        coverImage: base + "/thesis-md/masterthesis/image4.png",
        description: "A multi-camera motion learning system that reconstructs 3D human poses and evaluates motion similarity.",
        mdFile: base + "/thesis-md/masterthesis.md",
        title: "Motion Learning using 3D Reconstruction Pose from Multiple Cameras with Dynamic Time Warping.",
        skills: "OpenCV, C++, Python"
    },
    {
        id: "bachelorthesis",
        coverImage: base + "/thesis-md/bachelorthesis/image5.png",
        description: "Helmet Usage Detection on Motorcyclist is an automated way to detect motorcyclists who do not wear a helmet from dashcam footage.",
        mdFile: base + "/thesis-md/bachelorthesis.md",
        title: "Helmet Usage Detection on Motorcyclist Using Deep Residual Learning",
        skills: "Python, Tensorflow, Keras, OpenCV"
    }
];

export default thesisData;
