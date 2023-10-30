# 🎤 Project: Wu-Tang Name Generator

### Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

### What I did to build this app: 
I used HTML, a little CSS, and JavaScript to complete this app.

I set up five questions each with a value attribute for each of the three radio button options. The values ranged from 0-2 and would eventually all be added up into a score variable. That score variable would then be used as the index of two arrays. These two arrays contain 11 indices of names, one array for first names and one for last names.

Once a user answered all questions and received a score then that score is plugged into each array of names and generates a name with a click of the button at the bottom of the page.

### Lessons Learned:
* I got better at using parseInt to get a value out of an element.
* Moreover, I got comfortable using html value attributes as a place to hold values and that I could gather in my JavaScript.

![image](https://github.com/fjh321/wu-tang-generator-bootcamp-FJH/assets/64885403/4e062fec-fd6e-44d9-bee6-bb6d22358779)
