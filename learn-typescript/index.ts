// string
let username: string = "Kasun";

// numbers
let userid: number = 1252;

// boolean
let isloggedIn: boolean = false;


// any
let hero; // ❌ is there is no any specific type it take as type "any". Not a good practice
// let hero: string; ✅

function getHero() {
    return "Thor"
}

hero = getHero()

console.log(hero);

export { }