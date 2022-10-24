let questionArr = document.querySelectorAll('.questions')

document.querySelector('#submit').addEventListener('click',Generate)

function Generate(){
    let answerOne = document.getElementById('questionOne')
    let answerTwo = document.getElementById('questionTwo')
    let answerThree = document.getElementById('questionThree')
    let answerFour = document.getElementById('questionFour')
    let answerFive = document.getElementById('questionFive')
    let result = 0
    let randomIndexOne = 0
    let answerCombo = [answerOne.value,answerTwo.value,answerThree.value,answerFour.value,answerFive.value]
    
    const adjName = ["Adorable", "Adventurous", "Aggressive", "Agreeable", "Alert", "Alive", "Amused", "Angry", "Annoyed", "Annoying", "Anxious", "Arrogant", "Ashamed", "Attractive", "Average", "Awful", "Bad", "Beautiful", "Black", "Bloody", "Blue", "Blue-eyed", "Blushing", "Bored", "Brainy", "Brave", "Breakable", "Bright", "Busy", "Calm", "Careful", "Cautious", "Charming", "Cheerful", "Clean", "Clear", "Clever", "Cloudy", "Clumsy", "Colorful", "Combative", "Comfortable", "Concerned", "Condemned", "Confused", "Cooperative", "Courageous", "Crazy", "Creepy", "Crowded", "Cruel", "Curious", "Cute", "Dangerous", "Dark", "Dead", "Defeated", "Defiant", "Delightful", "Depressed", "Determined", "Different", "Difficult", "Disgusted", "Distinct", "Disturbed", "Dizzy", "Doubtful", "Drab", "Dull", "Eager", "Easy", "Elated", "Elegant", "Embarrassed", "Enchanting", "Encouraging", "Energetic", "Enthusiastic", "Envious", "Evil", "Excited", "Fair", "Faithful", "Famous", "Fancy", "Fantastic", "Fierce", "Filthy", "Foolish", "Frail", "Frantic", "Friendly", "Frightened", "Funny", "Gentle", "Gifted", "Glamorous", "Gleaming", "Glorious", "Good", "Gorgeous", "Graceful", "Grieving", "Grotesque", "Grumpy", "Handsome", "Happy", "Healthy", "Helpless", "Homely", "Horrible", "Hungry", "Hurt", "Ill", "Important", "Impossible",, "Innocent", "Inquisitive", "Itchy", "Jealous", "Jittery", "Jolly", "Joyous", "Kind", "Lazy", "Light", "Lively", "Lonely", "Long", "Lovely", "Lucky", "Magnificent", "Modern", "Motionless", "Mysterious", "Nasty", "Naughty", "Nervous", "Nice", "Nutty", "Obedient", "Obnoxious", "Odd", "Old-fashioned", "Open", "Outrageous", "Outstanding", "Panicky", "Perfect", "Plain", "Pleasant", "Poor", "Powerful", "Precious", "Prickly", "Proud", "Putrid", "Puzzled", "Quaint", "Real", "Relieved", "Repulsive", "Rich", "Scary", "Selfish", "Shiny", "Silly", "Sleepy", "Smiling", "Smoggy", "Sore", "Sparkling", "Splendid", "Spotless", "Stormy", "Strange", "Stupid", "Successful", "Super", "Talented", "Tame", "Tasty", "Tender", "Tense", "Terrible", "Thankful", "Thoughtful", "Thoughtless", "Tired", "Tough", "Troubled", "Ugliest", "Ugly", "Unsightly",, "Uptight", "Vast", "Victorious", "Vivacious", "Wandering", "Weary", "Wicked", "Wide-eyed", "Wild", "Witty", "Worried", "Zany", "Zealous"]

    const nounName = ['Apple', 'Apartment', 'Arrow', 'Antlers', 'Alligator', 'Architect', 'Aunt', 'Ball', 'Bermudas', 'Beans', 'Balloon', 'Bear', 'Black', 'Bones', 'Boxers', 'Belt', 'Brain', 'Buffalo', 'Bird', 'Baby', 'Book', 'Back', 'Butter', 'Bulb', 'Buckles', 'Bat', 'Bank', 'Bag', 'Bra', 'Boots', 'Blazer', 'Bikini', 'Brother', 'Boy', 'Blender', 'Bucket', 'Bakery', 'Bow', 'Bridge', 'Boat', 'Car', 'Cow', 'Cap', 'Cooker', 'Crow', 'Crest', 'Chest', 'Chair', 'Candy', 'Cabinet', 'Cat', 'Coffee', 'Casino', 'Cabin', 'Castle', 'Church', 'Cinema', 'Choker', 'Cravat', 'Cane', 'Costume', 'Cardigan', 'Cello', 'Cashier', 'Composer', 'Cave', 'Country', 'Dog', 'Deer', 'Donkey', 'Dress', 'Daughter', 'Egg', 'Elephant', 'Earrings', 'Ears', 'Eyes', 'Estate', 'Finger', 'Fox', 'Frog', 'Fan', 'Freezer', 'Fish', 'Film', 'Fork', 'Grapes', 'Goat', 'Gown', 'Garlic', 'Gift', 'Galaxy', 'Guitar', 'Grandmother', 'Head', 'Hair', 'Heart', 'House', 'Horse', 'Hammer', 'Hostel', 'Herbs', 'Host', 'Jacket', 'Judge', 'Juicer', 'Keyboard', 'Kid', 'Kangaroo', 'Koala', 'Knife', 'Lemon', 'Lion', 'Leggings', 'Leg', 'Lips', 'Lung', 'Lighter', 'Mango', 'Man', 'Model', 'Oil', 'Orange', 'Onion', 'Oven', 'Owl', 'Paper', 'Panda', 'Pants', 'Palm', 'Pasta', 'Pencil', 'Pig', 'Pouch', 'Pagoda', 'Pyramid', 'Purse', 'Pancake', 'Popcorn', 'Piano', 'Physician', 'Photographer', 'Professor', 'Painter', 'Radio', 'Razor', 'Ribs', 'Rainbow', 'Ring', 'Rabbit', 'Road', 'Surgeon', 'Scale', 'Shampoo', 'Sink', 'Salt', 'Shark', 'Shoes', 'Swan', 'Suit', 'Sweater', 'Smoke', 'Sunglasses', 'Sandals', 'Slippers', 'Shorts', 'Sandwich', 'Sister', 'Son', 'Singer', 'Senator', 'Sun', 'Spoon', 'Ship', 'Smile', 'Tie', 'Toes', 'Truck', 'Train', 'Taxi', 'Tiger', 'Trousers', 'Tongue', 'Television', 'Teacher', 'Turtle', 'Toy', 'Tissue', 'Telephone', 'Underwear', 'Uncle', 'Umbrella', 'Voice', 'Violin', 'Village', 'Vehicle', 'Vase', 'Wallet', 'Wolf', 'Whale', 'Water', 'Wings', 'Watch', 'Woman', 'Wound', 'Xylophone', 'Zebra', 'Zoo']
    console.log(result)
    console.log(Math.floor(Math.random() * 53))
    for(i=0; i < answerCombo.length; i++){
        result = result + Number(answerCombo[i])
    }
    if(result >= 5 && result < 10){
        randomIndexOne = Math.floor(Math.random() * 53)
        randomeIndexTwo = Math.floor(Math.random() * (207 - 156)+156)
    }else if(result >= 10 && result < 15){
        randomIndexOne = Math.floor(Math.random() * (104 - 53)+53)
        randomeIndexTwo = Math.floor(Math.random() * (156 - 104)+104)
    }else if(result >= 15 && result < 20){
        randomIndexOne = Math.floor(Math.random() * (156 - 104)+104)
        randomeIndexTwo = Math.floor(Math.random() * (104 - 53)+53)
    }else if(result >= 20 && result <= 25){
        randomIndexOne = Math.floor(Math.random() * (207 - 156)+156)
        randomeIndexTwo = Math.floor(Math.random() * 53)
    }
    document.querySelector('#wuName').innerHTML = `${adjName[randomIndexOne]} ${nounName[randomeIndexTwo]}`
    console.log(randomIndexOne)
    console.log(adjName[randomIndexOne], nounName[randomeIndexTwo])
    console.log(adjName[2])
    console.log(answerCombo)
    console.log(answerOne.value)
}

