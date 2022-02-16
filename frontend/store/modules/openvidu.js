const state = {
    session: undefined,
    signwordsend: true,

};

const getters = {

};


const mutations = {
    setSession: (state, payload) => {
        state.session = payload;
        // console.log("[openvidu store] " + state.session);
    },
    setSignWordSend: (state, payload) => {
        state.signwordsend = !state.signwordsend
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
