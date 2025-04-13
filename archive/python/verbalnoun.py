class VerbalNoun():
    def __init__(self, plain, origin):
        self.origin = origin
        self.plain = plain
        self.honorific = self.honorific()
        self.humble = self.humble()
        
    def honorific(self):
        stem = self.plain[0:-2]
        if self.origin == "Chinese" and self.plain != "電話する" :
            return ["ご" + stem + "なさる"]
        elif self.origin == "Loan":
            return [stem + "なさる"]
        else:
            return ["お" + stem + "なさる"]
        
    def humble(self):
        stem = self.plain[0:-2]
        if self.origin == "Chinese" and self.plain != "電話する" :
            return ["ご" + stem + "する", "ご" + stem + "いたす"]
        elif self.origin == "Loan":
            return [stem + "する", stem + "いたす"]
        else:
            return ["お" + stem + "する", "お" + stem + "いたす"]
