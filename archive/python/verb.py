class Verb:
    def __init__(self, plain, is_ru_verb=False):
        self.plain = plain
        self.is_ru_verb = is_ru_verb
        self.honorific = self.honorific()
        self.humble = self.humble()
       
        
    def honorific(self):
        if self.plain == "行く" or self.plain == "来る" or self.plain == "いる":
            return ["いらっしゃる", "おいでになる"]
        elif self.plain == "する":
            return ["なさる"]
        elif self.plain == "見る":
            return ["ごらんになる"]
        elif self.plain == "言う":
            return ["おっしゃる"]
        elif self.plain == "知っている":
            return ["ご存じだ"]
        elif self.plain == "食べる" or self.plain == "飲む":
            return ["めしあがる"]
        elif self.plain == "寝る":
            return ["お休みになる"]
        else:
            if self.is_ru_verb == True:
                return ["お" + self.plain[0:-1] + "になる"]
            if self.plain.endswith("う"):
                return ["お" + self.plain[0:-1] + "いになる"]
            elif self.plain.endswith("く"):
                return ["お" + self.plain[0:-1] + "きになる"]
            elif self.plain.endswith("ぐ"):
                return ["お" + self.plain[0:-1] + "ぎになる"]
            elif self.plain.endswith("す"):
                return ["お" + self.plain[0:-1] + "しになる"]
            elif self.plain.endswith("つ"):
                return ["お" + self.plain[0:-1] + "ちになる"]
            elif self.plain.endswith("ぬ"):
                return ["お" + self.plain[0:-1] + "にになる"]
            elif self.plain.endswith("ふ"):
                return ["お" + self.plain[0:-1] + "ひになる"]
            elif self.plain.endswith("ぶ"):
                return ["お" + self.plain[0:-1] + "びになる"]
            elif self.plain.endswith("む"):
                return ["お" + self.plain[0:-1] + "みになる"]
            elif self.plain.endswith("る"):
                return ["お" + self.plain[0:-1] + "りになる"]
            else:
                raise ValueError("Invalid verb")
    
    def humble(self):
        if self.plain == "行く" or self.plain == "来る":
            return ["まいる"]
        elif self.plain == "いる":
            return ["おる"]
        elif self.plain == "する":
            return ["いたす"]
        elif self.plain == "見る":
            return ["はいけんする"]
        elif self.plain == "言う":
            return ["申す", "申し上げる"]
        elif self.plain == "知っている":
            return ["存じでおる"]
        elif self.plain == "食べる" or self.plain == "飲む":
            return ["いただく"]
        elif self.plain == "会う":
            return ["お目にかかる"]
        elif self.plain == "聞く" or self.plain == "たずねる":
            return ["うかがう"]
        elif self.plain == "思う":
            return ["存じる"]
        else:
            if self.is_ru_verb == True:
                return ["お" + self.plain[0:-1] + "する", "お" + self.plain[0:-1] + "いたす"]
            if self.plain.endswith("う"):
                return ["お" + self.plain[0:-1] + "いする", "お" + self.plain[0:-1] + "いいたす"]
            elif self.plain.endswith("く"):
                return ["お" + self.plain[0:-1] + "きする", "お" + self.plain[0:-1] + "きいたす"]
            elif self.plain.endswith("ぐ"):
                return ["お" + self.plain[0:-1] + "ぎする", "お" + self.plain[0:-1] + "ぎいたす"]
            elif self.plain.endswith("す"):
                return ["お" + self.plain[0:-1] + "しする", "お" + self.plain[0:-1] + "しいたす"]
            elif self.plain.endswith("つ"):
                return ["お" + self.plain[0:-1] + "ちする", "お" + self.plain[0:-1] + "ちいたす"]
            elif self.plain.endswith("ぬ"):
                return ["お" + self.plain[0:-1] + "にする", "お" + self.plain[0:-1] + "にいたす"]
            elif self.plain.endswith("ふ"):
                return ["お" + self.plain[0:-1] + "ひする", "お" + self.plain[0:-1] + "ひいたす"]
            elif self.plain.endswith("ぶ"):
                return ["お" + self.plain[0:-1] + "びする", "お" + self.plain[0:-1] + "びいたす"]
            elif self.plain.endswith("む"):
                return ["お" + self.plain[0:-1] + "みする", "お" + self.plain[0:-1] + "みいたす"]
            elif self.plain.endswith("る"):
                return ["お" + self.plain[0:-1] + "りする", "お" + self.plain[0:-1] + "りいたす"]
            else:
                raise ValueError("Invalid verb")
