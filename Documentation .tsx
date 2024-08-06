import React from 'react';
import styles from './Documentation.module.css';

const Documentation: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#getting-started">Getting Started</a></li>
          <li><a href="#install-dependencies">Install Dependencies</a></li>
          <li><a href="#project-structure">Set Up Project Structure</a></li>
          <li><a href="#import-components">Import and Use Components</a></li>
          <li><a href="#example-button">Example Component: Button</a></li>
          <li><a href="#responsive-design">Responsive Design</a></li>
          <li><a href="#code-copy">Code Copy Functionality</a></li>
        </ul>
      </aside>

      <div className={styles.container}>
        <h1 className={styles.title}>UI Toolkit Documentation</h1>
        
        <section className={styles.section} id="getting-started">
          <h2 className={styles.sectionTitle}>Getting Started</h2>
          <p>Follow these steps to set up and use the UI Toolkit in your project.</p>
          
          <h3 className={styles.stepTitle} id="install-dependencies">Step 1: Install Dependencies</h3>
          <p>First, install the required dependencies:</p>
          <pre className={styles.code}>
            {`npm install react-router-dom
npm install @emotion/react @emotion/styled
npm install @mui/material @mui/icons-material
npm install axios
npm install react-copy-to-clipboard`}
          </pre>
          
          <h3 className={styles.stepTitle} id="project-structure">Step 2: Set Up Project Structure</h3>
          <p>Ensure your project structure is as follows:</p>
          <pre className={styles.code}>
            {`
my-react-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.module.css
│   │   ├── Documentation/
│   │   │   ├── Documentation.tsx
│   │   │   └── Documentation.module.css
│   ├── App.tsx
│   ├── index.tsx
│   └── App.css
            `}
          </pre>
          
          <h3 className={styles.stepTitle} id="import-components">Step 3: Import and Use Components</h3>
          <p>To use a component, import it into your project:</p>
          <pre className={styles.code}>
            {`import Button from './components/Button/Button';`}
          </pre>
          <p>Then include it in your JSX:</p>
          <pre className={styles.code}>
            {`<Button>Click Me</Button>`}
          </pre>
        </section>

        <section className={styles.section} id="example-button">
          <h2 className={styles.sectionTitle}>Example Component: Button</h2>
          <p>Buttons are used to trigger actions in the UI.</p>
          
          <h3 className={styles.stepTitle}>Button Component</h3>
          <pre className={styles.code}>
            {`import React from 'react';
import styles from './Button.module.css';

const Button: React.FC = ({ children }) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
};

export default Button;`}
          </pre>
          
          <h3 className={styles.stepTitle}>Button CSS</h3>
          <pre className={styles.code}>
            {`.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}`}
          </pre>
        </section>

        <section className={styles.section} id="responsive-design">
          <h2 className={styles.sectionTitle}>Responsive Design</h2>
          <p>All components are designed to be responsive and work across various devices.</p>
          <p>To ensure responsiveness, use the provided CSS classes and media queries.</p>
        </section>

        <section className={styles.section} id="code-copy">
          <h2 className={styles.sectionTitle}>Code Copy Functionality</h2>
          <p>Each component comes with a code copy functionality. Click the copy button to copy the code snippet to your clipboard.</p>
        </section>
      </div>
    </div>
  );
};

export default Documentation;


.wrapper {
  display: flex;
}

.sidebar {
  width: 200px;
  padding: 20px;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
}

.sidebar h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 10px;
}

.sidebar ul li a {
  text-decoration: none;
  color: #007bff;
}

.sidebar ul li a:hover {
  text-decoration: underline;
}

.container {
  margin-left: 220px;
  max-width: 800px;
  padding: 40px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.section {
  margin-bottom: 40px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sectionTitle {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.stepTitle {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #555;
}

.code {
  background-color: #2d2d2d;
  color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 20px;
  overflow-x: auto;
}

p {
  line-height: 1.6;
  margin-bottom: 20px;
}
