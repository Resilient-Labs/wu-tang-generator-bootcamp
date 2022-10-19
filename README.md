# 🎤 Harry Potter Themed Wu-Tang Name Generator

<a href="https://kellychhe-wu-tang-generator.netlify.app/">This is a Harry Potter Wu-Tang name generator</a>. The user answers five survey questions and based on those answers, the DOM will show what their Wu-Tang name is.

<img width="1440" alt="Screen Shot 2022-06-03 at 12 05 11 PM" src="https://user-images.githubusercontent.com/102538779/172078993-8e0559e7-d11c-486c-bf98-b9eb589a6df5.png">

## Languages Used

This was created using HTML5, CSS3, and JavaScript.

I collaborated with <a href="https://github.com/CodeMomx">my friend Mecca</a> for this project. We had fun making up the names in our name arrays and making the silly survey questions. We gave each answer a label (their index number) and put them in an array as the user's answers. We also made an array (using google) that listed every combination of answers possible. We then made a function that matches the users answers to a combination in the big array to get the index of the combo. We used modulo to scale the index to the name arrays. This ensures that every same set of answers will get the same name.

## Lessons Learned

I learned how to crop things on mac preview. I could not stop laughing while I was making the wizard hat image of the Wu-Tang Clan. This project took a deeper dive into what modulo can do in JS besides finding divisibility.
