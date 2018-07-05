<<<<<<< HEAD
import React from 'react'
import TagsList from './TagsList.js'
import renderer from 'react-test-renderer'

describe('The tags list', function() {
    it('renders as expected', function() {
        const tree = renderer
            .create(<TagsList tags={[`css`, `html`, `swift`]} />)
            .toJSON()

        expect(tree).toMatchSnapshot()
    })
    
})

=======
import React from 'react';
import TagsList from './TagsList';
import renderer from 'react-test-renderer';

describe("The tags list",()=>{
    it("renders as expected",()=>{
        const tree = renderer
            .create(<TagsList tags={[`css`,`html`,`swift`]} />)
            .toJSON();

        console.log(tree);

        expect(tree).toMatchSnapshot();
    });
});
>>>>>>> 91d231d262335527d06e0c1aba4adbd8898eec43
