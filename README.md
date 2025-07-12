# Lexisg-frontend-intern-test

This project simulates a frontend interface similar to **Lexi**, a legal assistant platform. It allows users to:

- Ask a legal question  
- View an AI-generated legal answer  
- See supporting citations from documents  
- Click the citation to open the referenced PDF in a new browser tab  

---

## Live Demo

- Live App: [https://lexisg-frontend-intern-test-eta.vercel.app/](https://lexisg-frontend-intern-test-eta.vercel.app/)
- GitHub Repository: [https://github.com/ranjit800/Lexisg-frontend-intern-test](https://github.com/ranjit800/Lexisg-frontend-intern-test)

---

## Features

- ChatGPT-style user interface  
- Typing animation for assistant messages  
- Simulated API response (no backend)  
- Citations shown under assistant replies  
- Citations open linked PDF in a new browser tab  
- Fully responsive with Tailwind CSS  

---

## Simulated Legal Query

**Query:*In a motor accident claim where the deceased was self-employed and aged 54-55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?*



**Answer:**

Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident.  
In *Dani Devi v. Pritam Singh*, the Court held that 10% of the deceased’s annual income should be added as future prospects.

**Citation:**

- Text: “...as the age of the deceased was 54–55 years... 10% of annual income should have been awarded...”
- Source: *Dani_Devi_v_Pritam_Singh.pdf*
- Link: [Open PDF](https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz)

---

## Tech Stack

- React.js (with Vite)  
- Tailwind CSS  
- React Markdown  

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/ranjit800/Lexisg-frontend-intern-test.git
cd Lexisg-frontend-intern-test

Install dependencies:
npm install

Start the development server:
npm run dev


Folder Structure
css
Copy code
src/
├── components/
│   ├── ChatInput.jsx
│   ├── ChatMessage.jsx
│   └── CitationCard.jsx
├── App.jsx
├── main.jsx
└── index.css


Developer
Name: Ranjit Jana
GitHub: https://github.com/ranjit800
Portfolio: https://ranjit-jana-portfolio.vercel.app