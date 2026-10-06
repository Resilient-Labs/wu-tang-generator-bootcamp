document.querySelector('#generate-name').addEventListener('click',getName);

function getName(){
    let icecream = document.querySelector('input[name="icecream"]:checked');
    let music = document.querySelector('input[name="music"]:checked');
let vacation = document.querySelector('input[name="vacation"]:checked');
let power = document.querySelector('input[name="power"]:checked');
let personality = document.querySelector('input[name="personality"]:checked');

if( !icecream || !music|| !vacation || !power || !personality){
    document.querySelector('#result').innerText = 'Please answer all questions';
return;
}
let answers =[icecream.value, music.value, vacation.value, power.value,  personality.value];

fetch(`/api?answers=${answers.join(',')}`)
.then(res => res.json())
.then(data =>{
    document.querySelector('#result').innerText = data.name;
})
.catch(error =>{
    console.log(error);
});
}