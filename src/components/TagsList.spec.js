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
