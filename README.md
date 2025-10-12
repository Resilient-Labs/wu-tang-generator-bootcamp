# 🎤 Week08 Bootcamp2019a Project: Wu-Tang Name Generator

### Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

### How to submit your code for review:

- Fork and clone this repo
- Create a new branch called answer
- Checkout answer branch
- Push to your fork
- Issue a pull request
- Your pull request description should contain the following:
  - (1 to 5 no 3) I completed the challenge
  - (1 to 5 no 3) I feel good about my code
  - Anything specific on which you want feedback!

Example:
```
I completed the challenge: 5
I feel good about my code: 4
I'm not sure if my constructors are setup cleanly...
```
Wu-Tang name generator

This project allows you to answer a few simple survery questions, and then youll get back your wu-tang name!

https://justinjoshi.github.io/wu-tang-generator-bootcamp/


How It's Made:

Tech used: HTML, CSS, JavaScript, Framework of choice

This wu-tang name generator was a fun project. To make this project, first I had to create HTML inputs for the user to input an answer. Then I created a few simple survery questions to ask the user. The user then should input their answers and click the button to get their wu-tang name. I added an eventListener to the button and defined the logic inside of a callback function. I created a list of 16 wu-tang sounding names and put them into an object. Then I made some logic to define what name you get. The goal is to take the number of characters the user enters in the input and from that, determine which of the 16 names they get. To do this, first i had to account for one thing, what happens if the user enters more than 16 characters? If that happens, I want to take the number of characters they input, and subtract sixteen. So if they input 17 charcters, I subtract sixteen, then the name they get should be name one. If they input 33 characters, I subtract 16 twice, and they get name one again. To achieve this, I setup a for loop. First we check how many times does 16 go into totalCharCount evenly, using Math.floor(totalCharCount/16). Then, run the for loop that number of times, subtracting 16 each time it runs. The resulting number is the matching number for the users name. Then I setup a simple if statement relating each number to a name. 

Optimizations

I think this came out pretty good, but there are some optimizations for writing cleaner code like using switch cases or making things more object oriented. But overall, it works, though it may need some better variable names and it may take some time to explain the logic to another engineer.


Lessons Learned:
I learned about more reasons why its important to write cleaner code, as this could be difficult to understand if I'm not there to directly explain each component to somebody. 
