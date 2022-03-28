export interface ConfigState {
  knownDevices: Array<any>; // eslint-disable-line
}

export default {
  namespaced: true as true, // eslint-disable-line
  state: {
    knownDevices: []
  } as ConfigState,
  getters: {
    devices: (state: ConfigState) => state.knownDevices
  },
  mutations: {
    addDevice(state: ConfigState) {
      console.log('device added');
      state.knownDevices.push({ a: 'b' });
    }
  },
  actions: {
    /* async loadName({ commit }, payload: { id: string }) {
      const name = `Name-${payload.id}` // load it from somewhere
      commit("SET_NAME", name)
      return { name }
    }, */
  }
};
