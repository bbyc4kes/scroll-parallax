# <p align="center">Parallax Scroll Project</p>

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&labelColor=black&color=3178C6)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&labelColor=000000&color=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&labelColor=black&color=0055FF)
![Static Badge](https://img.shields.io/badge/Tailwind%20CSS-FFFFFF?style=for-the-badge&logo=Tailwind%20CSS&labelColor=black&color=rgb(56%20189%20248))
![Static Badge](https://img.shields.io/badge/Lenis-FFFFFF?style=for-the-badge&logo=Lenis&labelColor=black&color=rgb(191%2C%2079%2C%20116))

![image](https://github.com/bbyc4kes/scroll-parallax/assets/153362892/6904e85a-5eae-435f-949f-ccc3a965f4c3)

### This project is a parallax scrolling website built using Next.js, Framer Motion, Tailwind CSS, and Lenis for smooth scrolling effects.


## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Framer Motion**: A library for creating animations in React applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Lenis**: A lightweight library for smooth scrolling.

## Features

- Smooth parallax scrolling animations
- Advanced CSS for responsive and visually appealing design
- Performance optimization with server-side rendering and static site generation

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/parallax-scroll.git
    cd parallax-scroll
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Project

To start the development server, run:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To build the project for production, run:
    ```bash
    npm run build
    npm run start
    # or
    yarn build
    yarn start
    ```

### Deployment

You can deploy the project using platforms like Vercel, Netlify, or any other static site hosting service.

## Usage

### Parallax Scroll Implementation

- **Next.js** is used for setting up the project structure and routing.
- **Framer Motion** is utilized for creating animations. Example usage in components:
    ```jsx
    import { motion } from 'framer-motion';

    const ExampleComponent = () => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your content here
        </motion.div>
      );
    };
    ```

- **Tailwind CSS** is used for styling. Example usage:
    ```html
    <div className="p-4 bg-blue-500 text-white">
      Tailwind CSS Styled Component
    </div>
    ```

- **Lenis** is used for smooth scrolling:
    ```jsx
    import Lenis from '@studio-freight/lenis';
    import { useEffect } from 'react';

    const SmoothScroll = () => {
      useEffect(() => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      }, []);

      return null;
    };

    export default SmoothScroll;
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lenis](https://github.com/studio-freight/lenis)
