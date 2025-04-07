const name1 = [
    "Spartan ",
    "Captain ",
    "Major ",
    "Colonel ",
    "General ",
    "Marshall ",
    "Bubbly ",
    "Silly ",
    "Spunky ",
    "Zane ",
    "Cheeky ",
    "Quirky ",
    "Giggle ",
    "Whimsical ",
    "Bouncy ",
    "Mischievous ",
    "Witty ",
    "Snappy ",
    "Jazzy ",
    "Vibey ",
    "Hype ",
    "Sassy ",
    "Sparkly ",
    "Juice ",
    "Senior ",
    "Cloud ",
    "Dark ",
    "Master ",
    "Guardian ",
    "Genius ",
    "Veteran "]
const name2 = [
    "tent ",
    "bag ",
    "backpack ",
    "lantern ",
    "campfire ",
    "flashlight ",
    "canteen ",
    "cooler ",
    "marshmallow stick ",
    "camp ",
    "hammock ",
    "compass ",
    "map ",
    "blanket ",
    "matches ",
    "truffle ",
    "duck ",
    "foie gras ",
    "caviar ",
    "prosciutto ",
    "burrata ",
    "saffron ",
    "miso ",
    "tank ",
    "heirloom",
    "black",
    "fresh",
    "crème",
    "aioli ",
    "lavender ",
    "clover "]

document.querySelector('button').addEventListener('click', generateName)

function generateName() {
    function getRandomNum1() {
        num1 = Math.floor(Math.random() * 31)
        document.querySelector('#firstName').innerText = name1[num1]
    }
    getRandomNum1()

    function getRandomNum2() {
        num2 = Math.floor(Math.random() * 31)
        document.querySelector('#lastName').innerText = name2[num2]
    }
    getRandomNum2()
};
