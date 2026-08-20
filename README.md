# 🚀 Personal Portfolio | Kiran Kakade

Welcome to the repository of my personal portfolio website! This site showcases my profile, academic journey, tech stack, certifications, and major projects. 

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-brightgreen?style=for-the-badge&logo=netlify)](https://kirankakade.netlify.app/)

🔗 **Live Demo Link:** [kirankakade.netlify.app](https://kirankakade.netlify.app/)

---

## 📁 Project Structure

Here is the organized directory layout of this repository:

```text
├── assets/
│   ├── certificates/   # Academic and training completion certificate images
│   ├── docs/           # CV / Resume PDF document
│   └── images/         # Project mockup screenshots, logos, and website graphics
├── index.html          # Main landing page for the portfolio
├── certificates.html   # Dedicated grid showcase for certifications
├── style.css           # Custom stylesheets containing responsive grids and custom themes
├── script.js           # Form validation and EmailJS service integration
└── README.md           # Project documentation and guide
```

---

## 🙋‍♂️ About Me
I'm a **Computer Engineering student at SPPU Pune (2023–2027)** passionate about building scalable web applications, AI-powered solutions, and Android applications. I specialize in Full Stack Development using Java, React, Node.js, and modern web technologies. I continuously explore new technologies, GenAI tools, and modern software development practices.

---

## 🛠️ Core Skills

- **Frontend:** HTML5, CSS3, JavaScript, React.js, Bootstrap
- **Backend & Database:** Node.js, MongoDB, Java, REST APIs, PostgreSQL, Python
- **AI & Data:** Prompt Engineering, AI Tool Integration, Data Handling (JSON, API integration)
- **Tools:** Git & GitHub, VS Code

---

## 📂 Featured Projects

Here is a summary of the key projects featured in my portfolio:

### 1. 🏢 SmartGodown
* **Description:** A smart inventory management system to track stock, manage warehouse operations, and provide real-time updates with user authentication and dashboard analytics.
* **Tech Stack:** TypeScript, Python, PostgreSQL
* **Live Demo:** [smartgodown.in](https://smartgodown.in)

### 2. 🌾 Smart Agriculture Assistance
* **Description:** A smart agriculture system designed to help farmers with crop recommendations, weather insights, and decision support for improved productivity. Developed as part of the IEEE Hackathon.
* **Tech Stack:** HTML/CSS, JavaScript, Node.js, MongoDB
* **Live Demo:** [Smart Agriculture Assistance](https://fastidious-nougat-e155c8.netlify.app/)

### 3. 🤖 AI Ad Management System
* **Description:** An AI-based system to manage and optimize advertisements by analyzing user behavior and improving campaign performance.
* **Tech Stack:** JavaScript, AI APIs
* **Live Demo:** [AI Ad Management](https://ryzeai2026.netlify.app/)

### 4. 🧮 Smart Calculator
* **Description:** A responsive, clean calculator web application capable of performing basic and advanced scientific calculations.
* **Tech Stack:** HTML, CSS, JavaScript
* **Live Demo:** [Smart Calculator](https://smartcalculatorweb.netlify.app/)

### 5. 🛒 E-Commerce Website
* **Description:** A complete online shopping platform featuring product listings, cart functionality, and a checkout system.
* **Tech Stack:** HTML, CSS, JavaScript, Backend

### 6. 🌐 Portfolio Website (This Project)
* **Description:** A responsive personal portfolio website to display my skills, projects, education, and credentials with a typewriter effect, scroll animations, and a contact form.
* **Tech Stack:** HTML, CSS, JavaScript, EmailJS (for contact form integration)
* **Live Demo:** [Kiran Kakade Portfolio](https://kirankakade.netlify.app/)

---

## 🏆 Certifications & Milestones

* **Web Development Internship** — *InternPe (March 2025)*
* **AI Symposium Hackathon (Deepfake Detection)** — *VIT Pune (March 2026)*
* **IEEE Hackathon (Smart Agriculture)** — *MMCOE Pune (October 2025)*
* **Data Visualization using Python** — *Python Specialization (August 2025)*
* **Brainwave 2026 (Market Minds)** — *VIT Baramati (March 2026)*
* **Versanix Tech** — *Versanix Technologies (March 2026)*

---

## 🚀 How to Run the Portfolio Locally

Follow these instructions to clone the repository and run the website locally:

### 1. Clone the Repository
Open your terminal or command prompt and run the following command:
```bash
git clone https://github.com/kakadekiran7875/portfoliwebsite.git
cd portfoliwebsite
```

### 2. Choose a Method to Run

#### Option A: Local Development Server (Highly Recommended)
Using a local server prevents potential CORS issues and ensures all interactive features load correctly.

* **VS Code "Live Server" Extension:**
  1. Open the cloned folder in VS Code.
  2. Install the **Live Server** extension if you haven't already.
  3. Click **"Go Live"** in the status bar (bottom-right) or right-click `index.html` and select **"Open with Live Server"**.
* **Using Python:**
  If you have Python installed, run:
  ```bash
  python -m http.server 8000
  ```
  Then, navigate to `http://localhost:8000` in your web browser.
* **Using Node.js (npx):**
  Run:
  ```bash
  npx serve
  ```
  Then, navigate to the local URL displayed in the terminal.

#### Option B: Open Directly (Quickest)
1. Navigate to the project root directory.
2. Double-click the `index.html` file to open it directly in any web browser.

---

## 📧 Contact Form Configuration (EmailJS)
The contact form uses **EmailJS** to send messages directly to your inbox without a custom backend server. If you want to update it to use your own EmailJS account:
1. Sign up on [EmailJS](https://www.emailjs.com/).
2. Create an Email Service and a Email Template.
3. Open `script.js` and update:
   * The public key in `emailjs.init("YOUR_PUBLIC_KEY")`.
   * The Service ID and Template ID in `emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)`.

---

## ✉️ Contact & Connect

* **Email:** [kakadekiran2211@gmail.com](mailto:kakadekiran2211@gmail.com)
* **Phone:** +91 7875024546
* **LinkedIn:** [Kiran Kakade on LinkedIn](https://www.linkedin.com/in/kiran-kakade-1a30ab2aa)
* **GitHub:** [@kakadekiran7875](https://github.com/kakadekiran7875)
* **Instagram:** [@kakade_kiran_2211_](https://www.instagram.com/kakade_kiran_2211_/)