const state = {
    isLogin: false,
    isnLogin: true,
    isDoctor: false,
    isManager: false,
    login: {
        userName: "",
        userRole: "",
        userId: "",
        userProfileImageUrl: ""
    },
    sessionId: '',
    mydoctor: ''
};

// mutations
const mutations = {
    SET_LOGIN: (state, payload) => {
        state.isLogin = true;
        state.isnLogin = false;
        state.login.userId = payload.id;
        state.login.userName = payload.name;
        state.login.userRole = payload.role;
    },
    SET_MANAGER: (state) => {
        state.isManager = true;
    },
    SET_DOCTOR: (state) => {
        state.isDoctor = true;
    }
};

// actions
const actions = {};

const getters = {
    isLogin: function(state) {
        return state.isLogin;
    },
    userName: function(state) {
        return state.login.userName;
    },
    isManager: function(state) {
        return state.isManager;
    },
    isDoctor: function(state) {
        return state.isDoctor;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
