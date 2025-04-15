import { Verb } from './verb.js';
import { VerbalNoun } from './verbalnoun.js';
  
let verbs_list = [new Verb("うごかす", "u"), new Verb("切る", "u"), new Verb("こる", "u"),
    new Verb("すう", "u"), new Verb("だす", "u"), new Verb("つまる", "u"), new Verb("はかる", "u"),
    new Verb("はく", "u"), new Verb("はしる", "u"), new Verb("ひく", "u"), new Verb("やすむ", "u"),
    new Verb("あける", "ru"),new Verb("あげる", "ru"),new Verb("あがる", "ru"),new Verb("さげる", "ru"),
    new Verb("さがる", "ru"),new Verb("つける", "ru"),new Verb("つかれる", "ru"),new Verb("でる", "ru"),
    new Verb("やめる", "ru"),new Verb("わすれる", "ru"),new VerbalNoun("にゅういんする", "Chinese"), 
    new Verb("行く", "u"),new Verb("来る", "u"),new Verb("いる", "ru"),new Verb("する", "u"),
    new Verb("見る", "ru"),new Verb("言う", "u"),new Verb("食べる", "ru"),new Verb("飲む", "u"),
    new Verb("寝る", "ru"),new VerbalNoun("電話する", "Chinese"),new VerbalNoun("コピーする", "Loan"),
    new VerbalNoun("勉強する", "Chinese"),new VerbalNoun("あずかりする", "Japanese"), 
    new Verb("知っている", "ru"),new Verb("会う", "u"),new Verb("聞く", "u"),new Verb("たずねる", "ru"),
    new Verb("思う", "u"), new VerbalNoun("心配する", "Chinese"),new VerbalNoun("ジャンプする", "Loan")];

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomWord () {
	const word_spawn = document.querySelector("#word");
	rand_word = verbs_list[getRandomInt(0, verbs_list.length - 1)];
	word_spawn.textContent = rand_word.plain;
}

let rand_word; //consider moving this out of global scope, or having randomWord return a word...?

function run () {
	let game_elements = document.querySelectorAll(".game");
	for (let i = 0; i < game_elements.length; i++) {
		game_elements[i].style.display = 'block'; //this is bad
	  }
	const text_box = document.querySelector("#submit");
	randomWord(); 
	text_box.addEventListener("keydown", function(e) { //validates input on enter
		if (e.code === "Enter") { 
		validate(e); 
		text_box.value = "";}
	});
}

function validate (e) {
	const guess = e.target.value.trim();
	const emoji = document.querySelector("#batz_maru"); //should this be const?
	const score = document.querySelector("#score");
	let integer_score = parseInt(score.textContent) || 0;
	if (rand_word.honorific().includes(guess)){ //need to change this based on params-- perhaps those should be global vars
		emoji.innerHTML = "🙆‍♀️"; 
		integer_score += 1;
	} else {
		emoji.innerHTML = "🙅‍♀️";
	}
	score.textContent = integer_score.toString();
	randomWord();
}

document.addEventListener("DOMContentLoaded", () => {
	//create checkbox handler- initialize both to toggled, don't allow the user to untoggle more than 1
	//and send its params to run.
	let button = document.querySelector("#start");
	button.addEventListener("click", run); //add arrow function to run :P
});
