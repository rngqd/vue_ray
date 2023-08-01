import { Actions } from 'vuex-smart-module';
import { SESSION_KEY } from '@/utils/constants';
import AppState from './state';
import AppGetters from './getters';
import AppMutations from './mutations';

export default class AppActions extends Actions<AppState, AppGetters, AppMutations, AppActions> {
    fetchQuestions(): void {
        fetch('/questions.json')
            .then((data) => data.json())
            .then((data) => {
                const passed = sessionStorage.getItem(SESSION_KEY);
                if (passed) {
                    for (let i = 0; i < data.length; i++) {
                        if (passed.includes(data[i].number)) {
                            data[i].passed = true;
                        }
                    }
                }
                this.mutations.setQuestions(data);
            })
            .catch((err) => {
                throw new Error(`Ошибка при загрузке списка вопросов: ${err}`);
            });
    }
}
