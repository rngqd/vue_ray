import { Actions } from 'vuex-smart-module';
import AppState from './state';
import AppGetters from './getters';
import AppMutations from './mutations';

export default class AppActions extends Actions<AppState, AppGetters, AppMutations, AppActions> {
    fetchQuestions(): void {
        fetch('/questions.json')
            .then((data) => data.json())
            .then((data) => this.mutations.setQuestions(data))
            .catch((err) => {
                throw new Error(`Ошибка при загрузке списка вопросов: ${err}`);
            });
    }
}
