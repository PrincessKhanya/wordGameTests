function WordCounter(sentence) {

    const words = sentence.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').split(" ");

    function getWords() {
        const wordlist = words.map(word => {
            return {
                word,
                length: word.length,
                type: word.length > 4 ? "longer" : ""
            }
        });

        let longestWord = {
            length: 0
        };
        wordlist.forEach((word, index) => {
            if (word.length > longestWord.length) {
                longestWord = { ...word, index }
            }
        });
        wordlist[longestWord.index].type = "longest";


        const longestWords = wordlist.filter(word => word.length === longestWord.length).forEach(word => word.type = "longest");
        return wordlist;
    }

    function getLongerWords() {
        return getWords().filter(word => word.length > 4);
    }
    return {
        getWords,
        getLongerWords
    }

}