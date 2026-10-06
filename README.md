# Wu-Tang Name Generator

A fun browser-based name generator built with vanilla JavaScript.
Answer 5 survey questions and get a randomly generated, Wu-Tang-sounding name based on your answers.

![screenshot](./images/wutangGenerator.png)


## Features
- 5-question survey to capture your personality and preferences
- Randomly generates a Wu-Tang-style name based on your answers
- Names are Wu-Tang *sounding*, not exact copies of existing member names
- Different results each time, even with the same answers

## Built With
- HTML, CSS, JavaScript

## Running Locally
1. Clone the repo
2. Open `index.html` in your browser

## How It Works
1. Answer the 5 survey questions
2. Each answer maps to a pool of name pieces (titles, nicknames, descriptors)
3. The app randomly combines pieces from those pools to build your name
4. Your Wu-Tang name appears on the page

## What I Learned
- Collecting and handling user input from multiple questions
- Using arrays and randomization to generate dynamic output
- Mapping user answers to different outcomes with conditional logic
- Updating the DOM to display results