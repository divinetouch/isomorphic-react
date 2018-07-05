<<<<<<< HEAD
describe('The question list', function() {
    beforeEach(() => {
        console.log("Before each!")
    })

    beforeAll(() => {
        console.log("Before all!")
    })

    afterEach(() => {
        console.log("After each!")
    })

    afterAll(() => {
        console.log("After all!")
    })

    it('should display a list of items', function() {
        expect(2 + 2).toEqual(4);
    })
})

=======
describe("The question list",()=>{
    beforeEach(()=>{
       console.log("Before each!");
    });

    beforeAll(()=>{
        console.log("Before all!");
    });

    afterEach(()=>{
        console.log("After each!");
    });

    afterAll(()=>{
        console.log("After all!");
    });
    it("should display a list of items",()=>{
        expect(40 + 2).toEqual(42);
    });

    it.skip("should be the meaning of life",()=>{
        expect(40 + 2).toEqual(43);
    })
});
>>>>>>> 91d231d262335527d06e0c1aba4adbd8898eec43
