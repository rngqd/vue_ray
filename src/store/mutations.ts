import { Mutations } from 'vuex-smart-module';
import { IQuestions } from '@/models';
import { SESSION_KEY } from '@/utils/constants';
import AppState from './state';

export default class AppMutations extends Mutations<AppState> {
    setQuestions(newVal: IQuestions[]): void {
        this.state.questions = newVal;
    }

    setQuestionsPassed(questionNumber: number): void {
        const newQuestions = this.state.questions.map((question) => {
            return question.number === questionNumber
                ? { ...question, passed: !question.passed }
                : question;
        });
        const passed = newQuestions
            .filter((question) => question.passed)
                .map((questions) => questions.number);
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(passed));
        this.state.questions = newQuestions;
    }
}
