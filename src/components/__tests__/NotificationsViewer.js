import NotificationsViewer from '../NotificationsViewer.jsx'
import renderer from 'react-test-renderer'
import React from 'react'
import delay from 'redux-saga'

jest.mock('../../services/NotificationsService.js')

// require so that it does not hoist above the mock statement
const NotificationsService = require('../../services/NotificationsService.js').default

describe('The notification viewer', function() {

    beforeAll(() => {
       NotificationsService.__setCount(5) 
    })

    it('should display the correct number of Notifications', async () => {
        const tree = renderer
            .create(
                <NotificationsViewer/>
            )

        await delay()

        const instance = tree.root
        const component = instance.findByProps({className: 'notifications'})
        const text = component.children[0]
        expect(text).toEqual('5 Notifications Awaiting!')
    });
    
});

