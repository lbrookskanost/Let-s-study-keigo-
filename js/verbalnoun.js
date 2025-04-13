
class VerbalNoun {
	//plain_form and origin are both strings
	constructor(plain, origin) {
		this.plain = plain;
		this.origin = origin;
	}

	honorific() {
		const stem = this.plain.slice(0, -2);
		if (this.origin === "Chinese" && this.plain !== "電話する") {
			return ["ご" + stem + "なさる"];
		} else if (this.origin === "Loan") {
			return [stem + "なさる"];
		} else {
			return ["お" + stem + "なさる"];
		}
	}

	humble() {
		const stem = this.plain.slice(0, -2);
		if (this.origin === "Chinese" && this.plain !== "電話する") {
			return ["ご" + stem + "する", "ご" + stem + "いたす"];
		} else if (this.origin === "Loan") {
			return [stem + "する", stem + "いたす"];
		} else {
			return ["お" + stem + "する", "お" + stem + "いたす"];
		}
	}
}
export default VerbalNoun;