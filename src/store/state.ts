import { IQuestions, IState } from '@/models';

export default class AppState implements IState {
    questions = [] as IQuestions[];
}
