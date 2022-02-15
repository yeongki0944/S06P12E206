const state = {
    session: undefined

};

const getters = {

};


const mutations = {
    setSession: (state, payload) => {
        state.session = payload;
        console.log("[openvidu store] " + state.session);
    }
};

const actions = {

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
