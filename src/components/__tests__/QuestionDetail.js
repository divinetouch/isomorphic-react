import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail.jsx'
import renderer from 'react-test-renderer'
import React from 'react'

describe('The Question Detail Component', function() {
    describe(`The Container Element`, () => {
        describe('mapStateToProps', function() {
            it('should map the state to props correctly', () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: "Space is big"
                }
                const appState = {
                    questions: [sampleQuestion]
                }
                const ownProps = {
                    question_id: 42
                }
                const componentState = mapStateToProps(appState, ownProps)
                expect(componentState).toEqual(sampleQuestion)
            })    
        })
        
    })

    describe('The display element', function() {
        it('Should not regress', function() {
            const tree = renderer.create(
                <QuestionDetailDisplay
                    title="The meaning of life"
                    body="42"
                    answer_count={0}
                    tags={['hitchhiking']}
                />
            )

            expect(tree.toJSON()).toMatchSnapshot()
        })
    })
})


