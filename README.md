# 🎨 React Background Color Changer

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A clean, interactive, and responsive web application built with **React.js**. It allows users to instantly switch the background color of the UI using dynamic state management, providing a smooth user experience.

---

## 📸 Project Preview

<!-- YAHAN APNI PIC<img width="956" height="421" alt="Screenshot 2026-05-18 202952" src="https://github.com/user-attachments/assets/39afdfe5-4b0f-49f0-91c9-bb923c565efb" />
TURE DRAG KAR KE DROP KAREIN -->


---

## ✨ Key Features

- **🎨 Dynamic UI Updates:** Instantly changes the background color without reloading the page.
- **⚡ React Hooks:** Built using the powerful `useState` hook for efficient state management.
- **📱 Fully Responsive:** Styled completely with Tailwind CSS ensuring it looks great on all devices.
- **🌊 Smooth Transitions:** Uses CSS transitions for an elegant, fading effect when switching colors.
- **🔄 Reset Functionality:** Includes a reset button to easily revert to the default theme.

---

## 🛠️ How It Was Made (Tech Stack & Logic)

- **Frontend:** React.js (Functional Components)
- **Styling:** Tailwind CSS + Inline Styles
- **Logic Details:** The application initializes a `color` state variable using `useState('white')`. Each button is equipped with an `onClick` event handler that passes a specific hex code or color name to the `setColor` function. The main wrapper `div` uses inline styling (`style={{ backgroundColor: color }}`) to dynamically inject the state value, instantly updating the UI.

---

## 💻 How to Run Locally

Follow these steps to run this project on your own machine:

**1. Clone the repository:**
```bash
git clone https://github.com/Ayesha-Saddique9/react-bg-color-changer.git

**2. Navigate into the project directory:**
cd react-bg-color-changer

**3. Install dependencies:**
npm install

**4. Start the development server:**
npm run dev

---

**👩‍💻 Author**
**Ayesha Saddique**

Junior Frontend Web Developer
GitHub: @Ayesha-Saddique9
⭐ If you like this project, feel free to give it a star!
