<<<<<<< HEAD
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

=======
import delay from 'redux-saga';
it("async test 1",done=>{
    setTimeout(done,100);
});

it("async test 2",()=>{
    return new Promise(
        resolve=>setTimeout(resolve,1500)
    );
});

it("async test 3",
    async ()=>await delay(100)
);
>>>>>>> 91d231d262335527d06e0c1aba4adbd8898eec43
