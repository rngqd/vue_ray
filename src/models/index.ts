export interface IQuestions {
    number: number,
    question: string,
    answer: string,
    passed: boolean,
}
export interface IState {
    questions: IQuestions[]
}
