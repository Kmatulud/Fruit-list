describe("Fruit List", () => {
    let fruitFactoryFunction = FruitFactoryFunction();

    it("Should be able to set and get fruit user input", () => {
        fruitFactoryFunction.addFruit("strawberries");
        assert.equal("strawberries", fruitFactoryFunction.getFruit())
        fruitFactoryFunction.addFruit("olive");
        assert.equal("olive", fruitFactoryFunction.getFruit())
        fruitFactoryFunction.addEmo("blueberries")
        assert.equal("blueberries", fruitFactoryFunction.getFruit())
    })
    it("Should be able to set and get emoji user input", () => {
        fruitFactoryFunction.addEmo(🫒);
        assert.equal(🫒, fruitFactoryFunction.Emo())
        fruitFactoryFunction.addEmo(🫐);
        assert.equal(🫐, fruitFactoryFunction.getEmo())
        fruitFactoryFunction.addEmo(🍓);
        assert.equal(🍓, fruitFactoryFunction.getEmo())
    })
    it("Should display fruits and their emojis", () => {
        fruitFactoryFunction.displayFruitWithEmo();
        assert.equal("banana" , fruitFactoryFunction.displayFruitWithEmo());
    })
})