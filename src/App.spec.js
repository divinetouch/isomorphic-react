import delay from 'redux-saga'

it('async test 1', function(done) {
   setTimeout(done, 100)
})

it('async test 1', function() {
    return new Promise(resolve => {
        setTimeout(resolve, 1500)
    })
})

it('async test 1', async () => {
    await delay(100)
})
