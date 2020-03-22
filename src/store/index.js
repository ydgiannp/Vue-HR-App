import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import _ from 'lodash';    

Vue.use(Vuex)

const moduleEmployee = {
  state: {
    employees: {}
  },
  mutations: {
    setEmployees (state,payload){
      state.employees = payload;
    },
    addEmployees (state,payload){
      state.employees.unshift(payload);
    },
    updateEmployees (state,payload){
      var index = _.findIndex(state.employees, {id: payload.id});
      state.employees.splice(index, 1, payload);
    }
  },
  actions: {
    populateEmployees(state){
      axios
				.get('http://localhost:3000/employees')
        .then((response) => {  
          state.commit('setEmployees',response.data);
        })
      
    }
  },
  getters: {
    getEmployees: state => state.employees,
    getEmployee: (state) => (id) => {
      return _.find(state.employees, function(o) { return o.id == id; });
    }
  }
};



export default new Vuex.Store({
  root: true,
  state: {
    user : {
      username: 'admin',
      password: 'admin'
    },
    isLogin: false, //please set to false again,
  },
  mutations: {
    loggedIn (state) {
      // mutate state
      state.isLogin = true;
    },
    loggedOut (state) {
      // mutate state
      state.isLogin = false;
    }
  },
  actions: {
    verifyUser(state, payload){
      if(state.state.user.username == payload.username && state.state.user.password == payload.password){
        state.commit('loggedIn');

        return true
      }
      else{
        return false
      }
    }
  },
  modules: {
    employees: moduleEmployee
  }
})
