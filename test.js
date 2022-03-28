describe("My Word Widget", function () {

    it("should be able to find the longest word", function () {

        const wordCounter = WordCounter("The cat jumped up.");
        const words = wordCounter.getWords();

        assert.equal("longest", words[2].type)
    });
    it("should be able to find the longest and longer word", function () {

        const wordCounter = WordCounter("The cat jumped over the blue fence");
        const words = wordCounter.getWords();

        assert.equal("longest", words[2].type)
        assert.equal("", words[5].type)
        assert.equal("longer", words[6].type)
    });
    it("should be able to find more than 1 longer and longest word", function () {

        const wordCounter = WordCounter("The black cat jumped over the blue fences");
        const words = wordCounter.getWords();

        assert.equal("longer", words[1].type)
        assert.equal("longest", words[3].type)
        assert.equal("", words[6].type)
        assert.equal("longest", words[7].type)
    });

});
