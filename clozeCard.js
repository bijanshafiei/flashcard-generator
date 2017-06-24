var clozeCard = function(text, cloze){
    this.full = text;
    this.cloze = cloze;
    this.partial = function(){
        if (this.text.includes(this.cloze)){
            return this.full.replace(this.cloze, "...");
        }
        else {
            console.log("error");
        }
    }
}

module.exports = clozeCard;