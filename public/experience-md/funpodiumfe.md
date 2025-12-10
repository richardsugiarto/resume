# ![Funpodium Logo](/experience-md/funpodiumfe/image1.png) Funpodium 

## Introduction
As a CMS React Frontend Developer, my role involved maintaining the existing project and developing new features based on UI/UX requirements. We built interfaces aligned with UI/UX designs to improve the usability of the CMS system.  
The React project operated under **Drupal CMS**, where Drupal accessed React pages through provided React module URLs (react-router).

### React Packages Used
- Antd  
- React-location (similar to React Router)  
- Zustand  
- Zod  
- React-query  
- React-dnd  
- Tailwind CSS  
- Axios  

### Required Skills
- ReactJS  
- JavaScript  
- TypeScript  
- NodeJS  
- HTML  
- CSS  
- PHP  
- Drupal  
- UNIX (macOS Development)

---

## Development
The product mainly focused on form creation for inserting data into the database.  
In addition to forms, we also implemented tables and search functionality to help users track and manage information more efficiently.

Development required collaboration with backend engineers to design:
- Database data structure  
- API request and response formats  

### Screenshots
![Product UI](/experience-md/funpodiumfe/image2.png)  
![Product UI](/experience-md/funpodiumfe/image3.png)  
![Product UI](/experience-md/funpodiumfe/image4.png)  
![Product UI](/experience-md/funpodiumfe/image5.png)

The navigation shown in the images is Drupal’s built-in navigation menu.  
Each item redirects to a specific React URL, which loads the corresponding React page.  
Access control is managed via **Drupal permission settings**, allowing us to restrict React page access for users without the required roles.

---

## Deployment
Deployment is divided into four stages:
1. Pre-stage  
2. Stage  
3. Pre-production  
4. Production  

The DevOps team manages the entire deployment pipeline using **Jenkins** for automated deployment.  
Our responsibility is simply to execute the provided Jenkins scripts during each deployment stage.