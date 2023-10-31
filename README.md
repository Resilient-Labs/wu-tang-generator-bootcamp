# Wu-Tang Name Generator

<img width="1305" alt="Screenshot 2023-10-30 at 9 31 52 PM" src="https://github.com/codedbycass/Wu-Tang-Name-Generator/assets/122684139/7ad2b3ac-1526-4831-b272-903577b064ec">

## How it's made
HTML, CSS, JS

HTML: I created a questionnaire where users can select their choice via radio buttons. I gave each question the same name attribute to ensure users can only select one of the options. I gave each radio input a value with an integer which will later be called in a JavaScript function. Lastly, there are two buttons that have event listener functions to get the name and restart.

CSS: I used basic flex box to ensure simple alignment of my elements.

JS: The main function of this project is to generate a random name based on the results of the user's survey questions. I created a variable for each function to grab the value (from HTML) and wrapped it in a number method to ensure an integer is returned. Using Math.round() I added all the values gathered from the variables. Then I created a variable to access the fName (first name) and lName (last name) arrays. Finally, the result will print the the DOM using template literals. 

## Lessons Learned
I learned how to work with different HTML input attributes and grab them using the DOM. In order to get the same name every time, based on user input, I used the Math object to grab an index in an array, instead of predetermining name combinations based on the various user inputs which would've taken longer.
