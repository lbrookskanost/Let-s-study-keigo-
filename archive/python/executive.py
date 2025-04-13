#敬語のアプリ
from verb import Verb
from verbalnoun import VerbalNoun
import random

class Executive:
    def __init__(self):
        self.verbs_list = [Verb("うごかす", False), Verb("切る", False), Verb("こる", False),
        Verb("すう", False), Verb("だす", False), Verb("つまる", False), Verb("はかる", False),
        Verb("はく", False), Verb("はしる", False), Verb("ひく", False), Verb("やすむ", False),
        Verb("あける", True), Verb("あげる", True), Verb("あがる", True), Verb("さげる", True),
        Verb("さがる", True), Verb("つける", True), Verb("つかれる", True), Verb("でる", True),
        Verb("やめる", True), Verb("わすれる", True), VerbalNoun("にゅういんする", "Chinese"), 
        Verb("行く", False), Verb("来る", False), Verb("いる", True), Verb("する", False),
        Verb("見る", True), Verb("言う", False), Verb("食べる", True), Verb("飲む", False),
        Verb("寝る", True), VerbalNoun("電話する", "Chinese"), VerbalNoun("コピーする", "Loan"),
        VerbalNoun("勉強する", "Chinese"), VerbalNoun("あずかりする", "Japanese"), 
        Verb("知っている", True), Verb("会う", False), Verb("聞く", False), Verb("たずねる", True),
        Verb("思う", False), VerbalNoun("心配する", "Chinese"), VerbalNoun("ジャンプする", "Loan")
                           ]
    
    def run(self):
        #options to select Humble, Honorific, Both, Quit
        print("---敬語を勉強しましょう!!!---")
        user_choice = "None"
        while user_choice.lower() != "q" and user_choice.lower() != "quit":
            user_choice = input("What would you like to study? Honorific/Humble/Both/Quit: ")
            if user_choice.lower() == "honorific":
                self.honorific_run(input("How many words would you like to study? "))
            elif user_choice.lower() == "humble":
                self.humble_run(input("How many words would you like to study? "))
            elif user_choice.lower() == "both":
                self.combined_run(input("How many words would you like to study? "))
        print("---お疲れ様でした!!!---")
    
    def honorific_run(self, words):
        words = abs(int(round(float(words)))) #that's ridiculous
        score = [0, 0]
        while words > 0:
            chosen_word = self.verbs_list[random.randint(0, len(self.verbs_list) - 1)]
            guess = input(f"What is the honorific form of {chosen_word.plain}? ")
            if guess not in chosen_word.honorific:
                if len(chosen_word.honorific) == 1:
                    print(f"Incorrect! \nCorrect answer is {chosen_word.honorific[0]}\n")
                else:
                    print(f'Incorrect! \nCorrect answer is {chosen_word.honorific[0]} or {chosen_word.honorific[1]}\n')
            else:
                print("Correct!\n")
                score[0] += 1
            score[1] += 1
            words -= 1
        try:
            print(f"Percent correct: {round((score[0] / score[1])*100, 2)}%")
        except:
            print("Write a number larger than 0, silly")
            
    
    def humble_run(self, words):
        words = abs(int(round(float(words)))) 
        score = [0, 0]
        while words > 0:
            chosen_word = self.verbs_list[random.randint(0, len(self.verbs_list) - 1)]
            guess = input(f"What is the humble form of {chosen_word.plain}? ")
            if guess not in chosen_word.humble:
                if len(chosen_word.humble) == 1:
                    print(f"Incorrect! \nCorrect answer is {chosen_word.humble[0]}\n")
                else:
                    print(f'Incorrect! \nCorrect answer is {chosen_word.humble[0]} or {chosen_word.humble[1]}\n')
            else:
                print("Correct!\n")
                score[0] += 1
            score[1] += 1
            words -= 1
        try:
            print(f"Percent correct: {round((score[0] / score[1])*100, 2)}%")
        except:
            print("Write a number larger than 0, silly")
            
    
    def combined_run(self, words):
        words = abs(int(round(float(words)))) 
        score = [0, 0]
        while words > 0:
            form = random.randint(1,2)
            chosen_word = self.verbs_list[random.randint(0, len(self.verbs_list) - 1)]
            if form == 1:
                guess = input(f"What is the humble form of {chosen_word.plain}? ")
                if guess not in chosen_word.humble:
                    if len(chosen_word.humble) == 1:
                        print(f"Incorrect! \nCorrect answer is {chosen_word.humble[0]}\n")
                    else:
                        print(f'Incorrect! \nCorrect answer is {chosen_word.humble[0]} or {chosen_word.humble[1]}\n')
                else:
                    print("Correct!\n")
                    score[0] += 1
            else:
                guess = input(f"What is the honorific form of {chosen_word.plain}? ")
                if guess not in chosen_word.honorific:
                    if len(chosen_word.honorific) == 1:
                        print(f"Incorrect! \nCorrect answer is {chosen_word.honorific[0]}\n")
                    else:
                        print(f'Incorrect! \nCorrect answer is {chosen_word.honorific[0]} or {chosen_word.honorific[1]}\n')
                else:
                    print("Correct!\n")
                    score[0] += 1
            score[1] += 1
            words -= 1
        try:
            print(f"Percent correct: {round((score[0] / score[1])*100, 2)}%")
        except:
            print("Write a number larger than 0, silly")
            
    
    
