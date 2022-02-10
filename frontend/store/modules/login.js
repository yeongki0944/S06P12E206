const state = {
    isLogin: false,
    isnLogin: true,
    isManager: false,
    login: {
        userName: "",
        userRole: "",
        userProfileImageUrl: ""
    }
};

// mutations
const mutations = {
    SET_LOGIN: (state, payload) => {
        state.isLogin = true;
        state.isnLogin = false;
        state.login.userName = payload.name;
        state.login.userRole = payload.role;
    },
    SET_MANAGER: (state) => {
        state.isManager = true;
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
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
