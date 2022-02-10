import http from "@/components/common/axios.js";
const state = {
    isLogin: false,
    resume: {
        list:[]
    }
};

// mutations
const mutations = {
    SET_RESUME_LIST: (state, list) => {
        state.resume.list = list;
        
    },

};

// actions
const actions = {
    resumeList(context) {
        http
        .get("/manager")
    .then(({ data }) => {
        console.log("ResumeVue: data : ");
        console.log(data);
        context.commit("SET_RESUME_LIST", data.list);
        });
    }
};

const getters = {
    getList: function(state) {
        return state.resume.list;
    },

};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
