import VuexPersist from 'vuex-persist';
import { createDirectStore } from 'direct-vuex';
import configStore from './config';
import { AppStore } from './AppStore';

const vuexPersist = new VuexPersist({
  key: 'oxrs',
  storage: window.localStorage
});

const { store, rootActionContext, moduleActionContext } =
  createDirectStore({
    plugins: [vuexPersist.plugin],
    modules: {
      configStore
    }
  });
// Export the direct-store instead of the classic Vuex store.
// export default createStore(store)
export default store;
// The following exports will be used to enable types in the
// implementation of actions.
export { rootActionContext, moduleActionContext };
declare module 'vuex' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    direct: AppStore;
  }
}
