<<<<<<< HEAD
import { handleFetchQuestion } from './fetch-question-saga.js'
import fetch from 'isomorphic-fetch'

describe('Fetch questions saga', function() {

    beforeAll(() => {
        fetch.__setValue([{question_id:42}])
    })

    it('should fetch the questions', async () => {
        const gen = handleFetchQuestion({question_id:42})
        const {value} = await gen.next()
        expect(value).toEqual([{question_id:42}])
        expect(fetch).toHaveBeenCalledWith(`/api/questions/42`)
    })
})

=======
import { handleFetchQuestion } from './fetch-question-saga';
import fetch from 'isomorphic-fetch';

describe("Fetch questions saga",()=>{
    beforeAll(()=>{
        fetch.__setValue([{question_id:42}]);
    });
    it("should fetch the questions",async ()=>{
        const gen = handleFetchQuestion({question_id:42});
        const { value } = await gen.next();
        expect(value).toEqual([{question_id:42}]);
        expect(fetch).toHaveBeenCalledWith(`/api/questions/42`)
    });
});
>>>>>>> 91d231d262335527d06e0c1aba4adbd8898eec43
