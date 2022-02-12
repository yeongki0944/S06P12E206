
// state
const state = {
    OV: undefined,
    sessionStore: undefined,
    mainStreamManager: undefined,
    publisher: undefined,
    subscribers: [],
    videoMute: false,
    audioMute: false,
    mySessionId: "SessionA",
    myUserName: "Participant" + Math.floor(Math.random() * 100),
    message: "",
    chatSeq: 0,
    chatList: [],
};

// getters
const getters = {};

// mutations
const mutations = {
    SET_SESSION(state, payload) {
        state.sessionStore = payload.session;
    }
};

// actions  비동기??
const actions = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};