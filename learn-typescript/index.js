"use strict";
exports.__esModule = true;
// string
var username = "Kasun";
// numbers
var userid = 1252;
// boolean
var isloggedIn = false;
// any
var hero; // ❌ is there is no any specific type it take as type "any". Not a good practice
// let hero: string; ✅
function getHero() {
    return "Thor";
}
hero = getHero();
console.log(hero);
