import { questions } from './questions.js'

describe('The questions reducer', () => {
    it('should work', ()=> {
        const array = ['foo', 'bar']
        const arrayClone = ['foo', 'bar']
        const newState = questions(array, {type: 'UNRECOGNIZED_ACTION'})

        expect(newState).toEqual(array)
        expect(newState).toEqual(arrayClone)
        expect(newState).toBe(array)
    })

    it('should add new questions', () => {
        const state = [{question_id: 'foo'}, {question_id: 'bar'}]
        const newQuestion = {question_id: 'baz'}
        const newQuestionClone = {question_id: 'baz'}
        const newState = questions(state, {type: `FETCHED_QUESTION`, question:newQuestion})

        expect(newState).toContain(newQuestion)
        expect(state).not.toContain(newQuestion)
        expect(newState).toHaveLength(3)
        // expect(newState).toContain(newQuestionClone) 
    })
})
