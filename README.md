# Wu-Tang Name Generator 🎤
 
A hip-hop alias generator with a Node.js back end built only from core modules. No Express and no dependencies. Answer five survey questions, and the **server** mixes word banks picked by your answers to create a Wu-Tang-inspired name.
 
🔗 **Live Demo:** [wu-tang-generator-bootcamp-53bc.onrender.com](https://wu-tang-generator-bootcamp-53bc.onrender.com)
 
<img width="1446" height="956" alt="Alias Name Generator showing five survey questions and the generated name" src="https://github.com/user-attachments/assets/d57604bb-d5f8-4f66-ba8d-39103de675c1" />

 
## ✨ Features
 
- **Personality-based names**: your five answers decide which word banks the name is built from, so the result fits you
- **Server-side randomness**: the Node.js server picks the words, then sends the finished name back as JSON
- **A different name every time**: click **Generate Another** for a fresh alias from the same answers
- **Input checks**: the page asks you to answer every question first, and the API returns `400` if any answer is missing

 
## 🔍 How It Works
 
```
5 answers ──▶ GET /api?energy=…&time=…&place=…&reputation=…&word=… ──▶ server builds name ──▶ JSON ──▶ "Your alias is…"
```
 
Each question feeds one or more word banks on the server:
 
| Question                                  | Word bank          | Example words                 |
| ----------------------------------------- | ------------------ | ----------------------------- |
| 1. What best describes your energy?       | First name         | Silent, Wild, Shadow, Lucky   |
| 2. What time are you most alive?          | Middle name        | Golden, Neon, Sleepless       |
| 3. Pick a place that matches your vibe.   | Location title     | Skyline, Vinyl, Underground   |
| 4. What reputation would you rather have? | Last name          | Cipher, Ruckus, Supreme, Icon |
| 5. Pick the word that sounds coolest.     | Special word       | Velvet, Voltage, Crown        |
 
The name is always **first + middle + last**:
 
- **First**: a random word from your energy's bank
- **Middle**: a 50/50 pick between your time bank and your special-word bank
- **Last**: a 50/50 pick between your reputation bank and your location bank
So the same answers can produce many different names, such as _Silent Neon Cipher_ or _Silent Velvet Vinyl_.
 
### Server routes
 
The server (`backend/server.js`) uses Node's built-in `http`, `fs`, and `path` modules and routes each request by hand:
 
| Route               | What it returns                    |
| ------------------- | ---------------------------------- |
| `/`                 | `index.html`                       |
| `/main.css`         | The stylesheet                     |
| `/js/main.js`       | The client-side script             |
| `/images/1099.jpg`  | The background image               |
| `/api?…`            | JSON with the generated name       |
| anything else       | `404 - Page Not Found`             |
 
### API example
 
```
GET /api?energy=calm&time=night&place=records&reputation=clever&word=velvet
```
 
```json
{
  "name": "Silent Neon Cipher"
}
```
 
If any answer is missing, the API returns status `400` with `{ "error": "Please answer all five questions." }`.
 

 
## 🛠️ Tech Stack
 
- **Node.js** (`http`, `fs`, `path`; no frameworks)
- **HTML5**
- **CSS3**
- **JavaScript** (DOM manipulation, Fetch API)
- **Render** for hosting

 
## 📁 Project Structure
 
```
wu-tang-generator-bootcamp/
├── index.html        # Survey questions and result section
├── main.css          # Styling
├── js/
│   └── main.js       # Reads answers, calls the API, shows the name
├── backend/
│   └── server.js     # Node HTTP server: word banks, name logic, file serving
├── images/
│   └── 1099.jpg
└── package.json
```
 

 
## 🚀 Run It Locally
 
You need [Node.js](https://nodejs.org/) installed.
 
```bash
git clone https://github.com/kareemahb/wu-tang-generator-bootcamp.git
cd wu-tang-generator-bootcamp
npm start
```
 
Then open [http://localhost:8000](http://localhost:8000). The server uses the `PORT` environment variable when it's set (Render sets it), and falls back to `8000` otherwise.
 

 
## 💡 What I Learned
 
- Building an HTTP server and routing requests without a framework
- Sending several values to the server as query parameters and reading them with the `URL` class
- Using objects as lookup tables, so a user's answer picks the right word bank
- Writing a reusable `randomItem()` helper and mixing word banks with weighted 50/50 picks
- Validating input on both the client and the server
- Deploying a Node app to Render with a dynamic `PORT`

 
## 👩‍💻 Created By
 
**Kareemah Bahaadur**
[GitHub](https://github.com/kareemahb)
