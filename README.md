# AI Interview Preparation Chatbot

A browser-based AI-powered mock interview application that generates unique interview questions, evaluates your answers in real time, and delivers a personalised performance review — all powered by Google Gemini AI.

---

## What This Project Does

- Generates fresh interview questions every session using Google Gemini AI
- Evaluates your typed answers and gives a score out of 10 with specific feedback
- Tracks your session scores and total sessions on the dashboard
- Delivers a full AI-written performance review after every session
- Works entirely in the browser — no installation, no backend, no cost

---

## Getting Started

### Step 1 — Get a Free Gemini API Key

You need a free Google Gemini API key to use the AI features. No credit card is required — just a Google account.

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in with your Google account
3. Click **"Get API Key"** in the left sidebar
4. Click **"Create API key in new project"**
5. Copy the key — it starts with `AIza...`
6. Save it somewhere safe — you will paste it into the app when you start an interview

> **Note:** The API key is stored only in your browser's memory during the session. It is never saved to any database or file. When you close the tab it disappears.

---

### Step 2 — Run the Project

You cannot open the files by double-clicking them. The Gemini API requires the page to be served over HTTP. Use one of these methods:

#### Option 1 — VS Code Live Server (Recommended)

1. Install [VS Code](https://code.visualstudio.com)
2. Open VS Code and go to **Extensions** (Ctrl + Shift + X)
3. Search for **Live Server** by Ritwick Dey and install it
4. Open your project folder in VS Code (`File → Open Folder`)
5. Right-click `index.html` and select **Open with Live Server**
6. Your browser opens at `http://127.0.0.1:5500`

#### Option 2 — Python HTTP Server

If you have Python installed, open your project folder in the terminal and run:

```bash
# Python 3
python -m http.server 5500
```

Then open `http://localhost:5500` in your browser.

---

### Step 3 — Use the App

Follow this flow the first time:

```
index.html → signup.html → login.html → dashboard.html → chat.html
```

1. **Home page** — Click **Get Started**
2. **Sign Up** — Enter your name, email, and password
3. **Login** — Enter the same email and password
4. **Dashboard** — Click **Start Interview**
5. **Chat page** — Paste your Gemini API key and click **Start AI Interview**
6. Answer each question — AI evaluates every answer instantly
7. After 5 questions — receive your full AI performance review

---

## Project Structure

```
ai-interview-prep/
├── index.html        — Home / landing page
├── login.html        — Login with form validation
├── signup.html       — Signup with password matching
├── dashboard.html    — User dashboard with session stats
├── chat.html         — AI interview chat interface
├── style.css         — Shared stylesheet (dark theme)
└── script.js         — Shared utility functions
```

---

## How the AI Works

This project uses the **Google Gemini 2.5 Flash** model through the Gemini REST API. Here is what the AI does:

| Step | What Gemini Does |
|------|-----------------|
| Question Generation | Creates a unique interview question based on your level and topic |
| Answer Evaluation | Reads your answer and gives a score out of 10 with feedback |
| Final Review | Analyses all 5 answers and writes a personalised performance summary |

The AI is called using the browser's built-in `fetch()` function:

```javascript
var response = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + GEMINI_API_KEY,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  }
);
```

No training was done — Gemini is a pre-trained model by Google. The project integrates it through the API.

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure with semantic tags |
| CSS3 | Styling, Flexbox layout, media queries |
| JavaScript | DOM manipulation, event handling, async/await |
| localStorage | Storing user data and session scores |
| Google Gemini API | AI question generation and answer evaluation |

---

## API Key Rate Limits (Free Tier)

| Limit | Value |
|-------|-------|
| Requests per minute | 10 |
| Requests per day | 250 |
| Cost | Free — no credit card needed |

A single 5-question session uses 11 API calls (5 for questions + 5 for evaluations + 1 for the final review).

---

## Common Issues

| Problem | Fix |
|---------|-----|
| Chat page shows error after entering API key | Make sure the key starts with `AIza` and has no spaces |
| "Failed to fetch" error | You are opening the file directly — use Live Server |
| Redirected to login page | You need to sign up first before logging in |
| Score shows `--` on dashboard | Complete at least one full interview session |
| API quota exceeded | You hit the 250/day limit — wait until the next day |

---

## Future Improvements

- Domain-specific interview modes (Frontend, DSA, HR)
- Voice input using the Web Speech API
- Score history charts across multiple sessions
- Resume-based question generation
- Difficulty levels for freshers and experienced candidates

---

## Subject

**AI Essentials** — 2nd Year BTech Student Project

---

## License

This project is for educational purposes only.
