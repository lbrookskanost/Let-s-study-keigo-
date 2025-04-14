export class Verb {
	//plain_form and verb_type are both strings
	constructor(plain, type) {
		this.plain = plain;
		this.type = type;
	}

	honorific() {
		if (this.plain === "行く" || this.plain === "来る" || this.plain === "いる") {return ["いらっしゃる", "おいでになる"];}
		switch (this.plain) {
			case "する":
				return ["なさる"];
			case "見る":
				return ["ごらんになる"];
			case "言う":
				return ["おっしゃる"];
			case "知っている":
				return ["ご存じだ"];
			case "食べる":
			case "飲む":
				return ["めしあがる"];
			case "寝る":
				return ["お休みになる"];
			default:
				if (this.type === "ru") {return ["お" + this.plain.slice(0, -1) + "になる"];}
				const lastChar = this.plain.slice(-1); const stem = this.plain.slice(0, -1);
				switch (lastChar) {
					case "う":
						return ["お" + stem + "いになる"];
					case "く":
						return ["お" + stem + "きになる"];
					case "ぐ":
						return ["お" + stem + "ぎになる"];
					case "す":
						return ["お" + stem + "しになる"];
					case "つ":
						return ["お" + stem + "ちになる"];
					case "ぬ":
						return ["お" + stem + "にになる"];
					case "ふ":
						return ["お" + stem + "ひになる"];
					case "ぶ":
						return ["お" + stem + "びになる"];
					case "む":
						return ["お" + stem + "みになる"];
					case "る":
						return ["お" + stem + "りになる"];
					default:
						throw new Error("Invalid verb");
				}
		}
	}

	humble() {
		if (this.plain === "行く" || this.plain === "来る") {return ["まいる"];}
		switch (this.plain) {
			case "いる":
				return ["おる"];
			case "する":
				return ["いたす"];
			case "見る":
				return ["はいけんする"];
			case "言う":
				return ["申す", "申し上げる"];
			case "知っている":
				return ["存じでおる"];
			case "食べる":
			case "飲む":
				return ["いただく"];
			case "会う":
				return ["お目にかかる"];
			case "聞く":
			case "たずねる":
				return ["うかがう"];
			case "思う":
				return ["存じる"];
			default:
				if (this.is_ru_verb === true) {
					const stem = this.plain.slice(0, -1);
					return ["お" + stem + "する", "お" + stem + "いたす"];
				}
				const lastChar = this.plain.slice(-1); const stem = this.plain.slice(0, -1);
				switch (lastChar) {
					case "う":
						return ["お" + stem + "いする", "お" + stem + "いいたす"];
					case "く":
						return ["お" + stem + "きする", "お" + stem + "きいたす"];
					case "ぐ":
						return ["お" + stem + "ぎする", "お" + stem + "ぎいたす"];
					case "す":
						return ["お" + stem + "しする", "お" + stem + "しいたす"];
					case "つ":
						return ["お" + stem + "ちする", "お" + stem + "ちいたす"];
					case "ぬ":
						return ["お" + stem + "にする", "お" + stem + "にいたす"];
					case "ふ":
						return ["お" + stem + "ひする", "お" + stem + "ひいたす"];
					case "ぶ":
						return ["お" + stem + "びする", "お" + stem + "びいたす"];
					case "む":
						return ["お" + stem + "みする", "お" + stem + "みいたす"];
					case "る":
						return ["お" + stem + "りする", "お" + stem + "りいたす"];
					default:
						throw new Error("Invalid verb: " + this.plain);
				}
		}
	}
	
}

