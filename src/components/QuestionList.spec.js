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
