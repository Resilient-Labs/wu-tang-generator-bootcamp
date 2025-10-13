# Wu-Tang Name Generator
A dynamic Node.js web application that generates a personalized Wu-Tang Clan-style name based on user responses to five creative questions. Inspired by the classic 90s hip-hop vibe, this project combines fun user interaction with backend logic and stylish front-end presentation.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [Acknowledgements](#acknowledgements)

## Project Overview

The Wu-Tang Name Generator is a Node.js powered API that pairs user responses with randomly selected name components to create a unique Wu-Tang persona. The front end captures user input, while the server-side API delivers randomized responses from predefined data arrays.

Built for entertainment and nostalgia, this project showcases API creation, data handling, and dynamic DOM manipulation through a sleek graffiti-inspired UI.

- Answer the questions
- Click the "Generate Name" button
- The Node.js API server will generate a Wu-Tang persona for you.
- The frontend displays the result in a grafitti style font.

## Features

- Interactive user input form
- Dynamic random name generation via API
- Responsive design for desktop and mobile
- Dynamic result display using JSON from Node.js API
- Error handling and clean routing logic
Future updates will include input validation to prevent improper characters from passing to the Node.js API server; Wu-Tang Clan Spotify playlist integration; and name memory.

## Technologies Used

<a href="https://www.linux.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" alt="Linux" title="Linux" width="36" height="36" /></a>   <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg" alt="VS Code" title="VS Code" width="36" height="36" /></a>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" title="JavaScript" width="36" height="36" /></a>   <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML5" title="HTML5" width="36" height="36" /></a>   <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS3" title="CSS3" width="36" height="36" /></a>    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="NodeJS" title="NodeJS" width="36" height="36" /></a>    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="Git" title="Git" width="36" height="36" /></a>

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/wu-tang-name-generator.git
````

2. Navigate to the project directory:

```bash
cd wu-tang-name-generator
```

3. Install Dependencies:
```bash
npm install
```
4. Start the server:
```bash
node server.js
```
5. Open your browser and go to:
```bash
http://localhost:8001
```

## Usage

1. Users answer five short questions about their personality and preferences.

2. Upon clicking “Generate Name”, the client sends a fetch request to /api, passing the user responses as parameters.

3. The backend selects two random terms from four categories (name, trait, weapons, creature) to create a unique Wu-Tang name.

4. The generated name is displayed on the webpage as:
```bash
Your Wu-Tang Name is <Random1> <Random2>.
```
5. Check the browser console for additional debugging info.

## Screenshots

<img width="1287" height="1186" alt="Screenshot 2025-10-13 121953" src="https://github.com/user-attachments/assets/69807308-a4c8-465f-82c6-b0b91227971e" />

## Acknowledgements
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [MDN](https://developer.mozilla.org/en-US/)