import { Verb } from './verb.js';
import { VerbalNoun } from './verbalnoun.js';

/*loop: 
 - generate random word from wordlist and set id=word to the word
 - seteventlistener on enter key pressed after filling out textbox
 -if user got it right, send maru; if not, send batz
 -restart loop 
  right now, keep this to honorific only, we can add functionality later */
  
let verbs_list = [Verb("うごかす", "u"), Verb("切る", "u"), Verb("こる", "u"),
    Verb("すう", "u"), Verb("だす", "u"), Verb("つまる", "u"), Verb("はかる", "u"),
    Verb("はく", "u"), Verb("はしる", "u"), Verb("ひく", "u"), Verb("やすむ", "u"),
    Verb("あける", "ru"), Verb("あげる", "ru"), Verb("あがる", "ru"), Verb("さげる", "ru"),
    Verb("さがる", "ru"), Verb("つける", "ru"), Verb("つかれる", "ru"), Verb("でる", "ru"),
    Verb("やめる", "ru"), Verb("わすれる", "ru"), VerbalNoun("にゅういんする", "Chinese"), 
    Verb("行く", "u"), Verb("来る", "u"), Verb("いる", "ru"), Verb("する", "u"),
    Verb("見る", "ru"), Verb("言う", "u"), Verb("食べる", "ru"), Verb("飲む", "u"),
    Verb("寝る", "ru"), VerbalNoun("電話する", "Chinese"), VerbalNoun("コピーする", "Loan"),
    VerbalNoun("勉強する", "Chinese"), VerbalNoun("あずかりする", "Japanese"), 
    Verb("知っている", "ru"), Verb("会う", "u"), Verb("聞く", "u"), Verb("たずねる", "ru"),
    Verb("思う", "u"), VerbalNoun("心配する", "Chinese"), VerbalNoun("ジャンプする", "Loan")];

let rand_word;

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function run () {
	const text_box = document.querySelector("#submit");
	randomWord(); 
	text_box.addEventListener("keydown", function(e) {
		if (e.code === "Enter") { validate(e); }
		text_box.value = "";
	});
}

function validate (e) {
	const guess = e.target.value.trim();
	const emoji = document.querySelector("#batz_maru");
	const score = document.querySelector("#score");
	let integer_score = parseInt(score.textContent) || 0;
	if (rand_word.honorific().includes(guess)){
		emoji.innerHTML = "🙆‍"; 
		integer_score += 1;
	} else {
		emoji.innerHTML = "🙅‍";
	}
	score.textContent = integer_score.toString();
	randomWord();
}

function randomWord () {
	const word_spawn = document.querySelector("#word");
	const rand_word = verbs_list[getRandomInt(0, verbs_list.length - 1)];
	word_spawn.textContent = rand_word.plain;
}

document.addEventListener("DOMContentLoaded", run);
