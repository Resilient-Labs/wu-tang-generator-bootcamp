# Wu-Tang Clan Name Generator

A fun web app that creates your personalized Wu-Tang Clan-style rap name. Answer a few questions about yourself and get a custom hip-hop alias.

## What This Does

Fill out a quick survey with 5 questions and the app generates a Wu-Tang-inspired name just for you. It looks at things like your age, hobbies, and even how much money you make to create a name that fits your personality.

You might end up with something like "Method Man," "Killa A-kid," or "Inspectah JOHN-ish" depending on your answers.

## Getting Started

You'll need Node.js installed on your computer. Then:

1. Download or clone this project
2. Open your terminal in the project folder
3. Run `npm install` to get the dependencies
4. Run `node server.js` to start the server
5. Go to `http://localhost:8000` in your browser
6. Fill out the form and get your Wu-Tang name

## What I Used to Build This

This is a full-stack project with a custom Node.js backend. I didn't use Express or any frameworks - just built the server from scratch using Node's built-in HTTP module. The frontend is plain HTML, CSS, and JavaScript.

I also used a package called Figlet to create cool ASCII art for the 404 error page.

## How It Works

The name generator uses logic based on your survey answers. Here's the basic idea:

If you're younger and male, you might get titles like "Method" or "Killa" with endings like "kid" or "won." If you're older, you could get "Mastah," "Gangsta," or "Inspectah." Female users get different suffix options like "pink," "purple," "rose," or "moon."

Your income level and hobbies also change which specific combination you get. There are quite a few possible outcomes, so everyone gets something different.

## Files in This Project

- `index.html` - The form where you enter your info
- `server.js` - The backend server that handles requests
- `js/main.js` - Handles the form submission and talks to the server
- `css/style.css` - Makes everything look nice with that purple Wu-Tang aesthetic

## The Inspiration

This project is a tribute to the Wu-Tang Clan, the legendary hip-hop group known for their creative stage names. There's a famous story about Donald Glover (Childish Gambino) getting his name from an online Wu-Tang name generator, which inspired this project.

## Things I Might Add Later

- More name combinations to choose from
- A way to share your name on social media
- Some Wu-Tang facts or history
- Sound effects or music when your name appears
- A gallery of all the names people have generated

## A Few Notes

The reset button will clear your form but leaves your generated name visible. I thought it would be nice to see your name while you fill out the form again to get a different one.

The 404 page has some fun ASCII art that looks best if you accidentally go to a page that doesn't exist.

---

Built as a practice project for working with Node.js and custom servers.
