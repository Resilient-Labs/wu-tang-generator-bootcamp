# Wu-Tang Name Generator

A Wu-Tang-inspired name generator that gives you a custom name based on your answers to five personality-style questions.

The app uses your most common answer category to determine the type of name you receive, then randomly combines a first and last name from that category.

## How to Play

1. Answer all five questions.
2. Choose the response that feels most like you.
3. Click **Take The Stage**.
4. Your Wu-Tang name will appear at the bottom of the page.

Try different combinations to see what names you get.

## How It Works

Each answer is assigned to one of three categories: A, B, or C.

When the quiz is submitted, the browser sends the five answers to the server. The server counts which category appears most often and uses that result to select a corresponding group of Wu-Tang-style names.

A first name and last name are then randomly selected from that group and returned to the browser as the user's generated Wu-Tang identity.

## Built With

- HTML
- CSS
- JavaScript
- Node.js
- Node HTTP module
- Fetch API

## Run Locally

Install the project dependencies:

npm install

Start the server:

node js/server.js

Then open:

http://localhost:8000

## Future Improvements

- Add more behavior-based questions and consider expanding the quiz into a playful twist on a modern personality test — one that ultimately challenges the idea that personality is permanent.
- Add a share button for copying or sharing generated Wu-Tang names and future personality-test results with friends and peers.
- Experiment with a concert-inspired background or subtle motion effects and add animation to the Wu-Tang name reveal.
