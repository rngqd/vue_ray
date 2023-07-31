import { createStore, Module } from 'vuex-smart-module';
import AppState from './state';
import AppGetters from './getters';
import AppMutations from './mutations';
import AppActions from './actions';

const AppStore = new Module({
    state: AppState,
    getters: AppGetters,
    mutations: AppMutations,
    actions: AppActions,
});
//
// export const useApp = createComposable(AppStore);

// Vue.use(Vuex)

// The 1st argument is root module.
// Vuex store options should be passed to the 2nd argument.
const store = createStore(
    // Root module
    AppStore,

    // Vuex store options
    {
        strict: process.env.NODE_ENV !== 'production',
    },
);
export default store;
