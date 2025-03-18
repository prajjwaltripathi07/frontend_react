# Landing Page with React, Three.js, and TailwindCSS

This project is a modern landing page built using **React**, **Three.js**, and **TailwindCSS**. It features a 3D interactive MacBook model, smooth animations, and a responsive design.

## Features

- **3D Model Integration**: A MacBook model rendered using Three.js and controlled with React Three Fiber.
- **Dynamic Animations**: Smooth scrolling and rotation animations for the 3D model.
- **Responsive Design**: Fully responsive layout using TailwindCSS.
- **Gradient Background**: Animated gradient background for a visually appealing effect.
- **Masked Text Effect**: Text with a masked image background for a unique design.
- **Environment Lighting**: Realistic lighting using HDRI environments.

## Technologies Used

- **React**: For building the user interface.
- **Three.js**: For rendering 3D graphics.
- **React Three Fiber**: A React renderer for Three.js.
- **TailwindCSS**: For styling and responsive design.
- **Vite**: For fast development and build tooling.
- **PostCSS**: For CSS processing.
- **ESLint**: For linting and maintaining code quality.

## Screenshots

### Landing Page
![Image](https://github.com/user-attachments/assets/029b5c92-de5c-41a4-9a7a-6e2a6cfa211d)

### 3D MacBook Model
![Image](https://github.com/user-attachments/assets/029b5c92-de5c-41a4-9a7a-6e2a6cfa211d)

## Demo Video
https://github.com/user-attachments/assets/670580f1-b45b-4ba9-9d1d-05256a2ede5f


## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/landing-page.git
   ```
2. Navigate to the project directory:
   ```bash
   cd landing-page
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Building for Production

Build the project for production:
```bash
npm run build
```

### Previewing the Production Build

Preview the production build:
```bash
npm run preview
```

## Folder Structure

```
landing-page/
├── src/
│   ├── App.jsx
│   ├── MacContainer.jsx
│   ├── main.jsx
│   ├── style.css
│   ├── index.css
├── public/
├── screenshots/
│   ├── landing-page.png
│   ├── macbook-model.png
│   ├── video-thumbnail.png
├── videos/
│   ├── demo.mp4
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## License

This project is licensed under the MIT License.
