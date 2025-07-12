# Lexisg-frontend-intern-test

This project simulates a frontend interface similar to Lexi, a legal assistant platform. It allows users to:
- Ask a legal question
- View a generated legal answer
- See supporting citations
- Click on a citation to open the related PDF in a new tab

## Features

- Chat-style UI similar to ChatGPT
- Typing animation for assistant answers
- Hardcoded simulated API response
- Citation appears below the assistant's answer
- Clicking citation opens PDF in a new browser tab
- Built using React.js and Tailwind CSS

## Example Question Used

**Query:*In a motor accident claim where the deceased was self-employed and aged 54-55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?*



**Simulated Answer:**

Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident.  
In *Dani Devi v. Pritam Singh*, the Court held that 10% of the deceased’s annual income should be added as future prospects.

**Citation:**

- Text: “...as the age of the deceased was 54–55 years... 10% of annual income should have been awarded...”
- Source: Dani_Devi_v_Pritam_Singh.pdf
- Link: [Open PDF](https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz)

## Tech Stack

- React.js
- Tailwind CSS
- Vite
- React Markdown (for formatted output)

## How to Run Locally

1. Clone this repository

```bash
git clone https://github.com/yourusername/Lexisg-frontend-intern-test.git
cd Lexisg-frontend-intern-test

