var clozeCard = function(text, cloze){
    this.fullText = text;
    this.cloze = cloze;
    this.partial = function(){
        if (this.text.includes(this.cloze)){
            return this.fullText.replace(this.cloze, "...");
        }
        else {
            console.log("error");
        }
    }
}

module.exports = clozeCard;