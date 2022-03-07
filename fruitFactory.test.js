describe("Fruit List", () => {
    let fruitFactoryFunction = FruitFactoryFunction();

    it("Should display fruits and their emojis", () => {
        fruitFactoryFunction.displayFruitWithEmo();
        assert.equal("banana" , fruitFactoryFunction.displayFruitWithEmo());
    })
})