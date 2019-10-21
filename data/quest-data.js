const dwarf = {
    id: 'dwarf',
    title: 'Dwarf Den',
    map: {
        top: '70%',
        left: '10%'
    },
    image: 'dwarf.png',
    audio: '.wav',
    action: '.wav',
    description: 'You enter the angry dwarfs den and are confronted with a huge dwarf who is looking for his human slave. What do you do?',
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: 'Knowing the dwarf is looking for a slave, you offer to hunt them a goblin slave for gold. They accept the offer and give you 20 gold once you have given them their prize.',
        hp: 0,
        gold: 10
    }, {
        id: 'fight',
        description: 'FIIIGHT EM!',
        result: 'The dwarf jabs you with their hammer barely scraping your side. Knowing the dwarfs weakness you jump over their head and before they have time to turn around you stab them in the back. You take all of their gold and get away safe.',
        hp: -10,
        gold: 100
    }, {
        id: 'run',
        description: 'Run away!',
        result: 'Dwarfs are very slow so you get away but were unable to grab any gold.',
        hp: 0,
        gold: 0

    }]
};
const dragon = {
    id: 'dragon',
    title: 'Dragons Nest',
    map: {
        top: '10%',
        left: '90%'
    },
    image: 'dragon.png',
    audio: '.wav',
    action: '.wav',
    description: 'You enter the massive dragon nest looking for a huge pile of gold. The dragon appears angry and looks hungry. What do you do?',
    choices: [{
        id: 'distract',
        description: 'Try and distract the dragon!',
        result: 'Knowing the dragon loves gold just as much as Smaug, you throw a 5 gold coins to the left and dart for the gold pile to the right. The dragon is too smart to go for such a little amount of gold and goes for you. The dragon tails whips you and you fly accross the room, losing 20 hp.',
        hp: -25,
        gold: -5
    }, {
        id: 'fight',
        description: 'FIIIGHT EM!',
        result: 'The dragon shoots a spray of fire towards your direction as you counter jump to the left and dodge the hot flames after losing 20 hp. The dragon quickly comes back with a tail whip, but you jump on its tail and run up the dragons back. You get to the dragons head and stab it, taking them down.',
        hp: -25,
        gold: 500
    }, {
        id: 'run',
        description: 'Run away!',
        result: 'Dragons can fly and you cannot run from that. The dragon takes off as you run away and snags you up, eating you alive.',
        hp: -100,
        gold: 0

    }]
};
const rainbow = {
    id: 'rainbow',
    title: 'Rainbow Road',
    map: {
        top: '80%',
        left: '40%'
    },
    image: 'unicorn.png',
    audio: '.wav',
    action: '.wav',
    description: 'You enter the colorful and magical place that is rainbow road. You see happy flowers and unicorns running around the colorful ponds. You see a pile of gold at the opposite end of the road and start to walk towards. All of a sudden a happy unicorn starts charging at you with its fierce teeth showing',
    choices: [{
        id: 'ride',
        description: 'Try and ride the unicorn!',
        result: 'You try and jump over and on top of the unicorns back as he comes running towards you. The unicorn raises his head up and stabs you in the leg. Sending you tumbling to the ground, losing 25hp.',
        hp: -25,
        gold: 0
    }, {
        id: 'fight',
        description: 'FIIIGHT EM!',
        result: 'You charge at the unicorn with a flaming sword. The unicorn is not phased by the fire and charges back at you. You get to the unicorn and it tramples you to the ground, turns around and tramples you again to make sure you are dead.',
        hp: -100,
        gold: 0
    }, {
        id: 'run',
        description: 'Run away!',
        result: 'You turn from the unicorn and start running. Unicorns are very fast and catches up to you quickly, trampling and bringing you to the ground. The unicorn keep running as you get up and slowly limp away, losing 50hp.',
        hp: -50,
        gold: 0

    }]
};

const quests = [dwarf, dragon, rainbow];

   
export default quests;
    


