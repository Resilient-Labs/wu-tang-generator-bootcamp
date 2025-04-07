document.querySelector('#enter').addEventListener('click',makeName)

function makeName(firstName,lastName){
    const fName = {
        A : 'Assassin',
        B : 'Blade',
        C : 'Chamber',
        D : 'Disciple',
        E : 'Excutioner',
        F : 'Fang', 
        G : 'Ghost',
        H : 'Hood',
        I : 'Iron',
        J : 'Jinx',
        K : 'Killer',
        L : 'Lotus',
        M : 'Monk',
        N : 'Ninja',
        O : 'Oracle',        
        P : 'Prophet',
        Q : 'Queenpin',
        R : 'Rebel',
        S : 'Shaolin',
        T : 'T-Grizz',
        U : 'Uzi',
        V : 'Villian',
        W : 'Warlock',
        X : 'XFactor',
        Y : 'Yin',
        Z : 'Zulu'
    }
    console.log(fName)
     const lName = {
        A : 'Axiom',
        B : 'Blackwell',
        C : 'Crossfade',
        D : 'Deadman',
        E : 'Ex',
        F : 'Folx',
        G : 'Grim',
        H : 'Hollow',
        I : 'Imortal',
        J : 'Judje',
        K : 'Killbane',
        L : 'Lockhart',
        M : 'Master',
        N : 'Nightfall',        
        P : 'Payne',
        Q : 'Qualified',
        R : 'Rekedeke',
        S : 'Student',
        T : 'ThrowedOff',
        U : 'Underdog',
        V : 'Vandal',
        W : 'Wraith',
        X : 'Xion',
        Y : 'Yerk',
        Z : 'Zentar'}
        console.log(lName)
    const firstNameLetter = document.querySelector('#firstName').value[0].toUpperCase()
    const LastNameLetter = document.querySelector('#lastName').value[0].toUpperCase()
    console.log(firstNameLetter)
    console.log(LastNameLetter)
    const genNameFirst = fName[firstNameLetter]
    const genLastName = lName[LastNameLetter]
    document.querySelector('#genFname').innerHTML = genNameFirst
    document.querySelector('#genLName').innerHTML = genLastName}

