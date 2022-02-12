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
    doctorList({context,state}, id) {
        http.post(
            "/manager/doctor",
            {
                userId: id,
                }
            )
            .then(({ data }) => {
                
    
    

            })
            .catch( error => {
                console.log("reservatedVue: error : ");
                this.$alertify.error('서버에러 발생.');
    
            });
    },

    patientList({context,state}, id) {
        http.post(
            "/manager/patient",
            {
              userId: id,
            }
          )
          .then(({ data }) => {
  
            

          })
          .catch( error => {
            console.log("reservatedVue: error : ");
            this.$alertify.error('서버에러 발생.');
  
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
