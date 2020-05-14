import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import _ from 'lodash';    

Vue.use(Vuex)

const moduleEmployee = {
  state: {
    employees: [],
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

const moduleApplicant = {
  state: {
    applicants: []
  },
  mutations: {
    setApplicants (state,payload){
      state.applicants = payload;
    },
    addApplicants (state,payload){
      state.applicants.unshift(payload);
    },
    updateApplicants (state,payload){
      var index = _.findIndex(state.applicants, {id: payload.id});
      state.applicants.splice(index, 1, payload);
    }
  },
  actions: {
    populateApplicants(state){
      axios
				.get('http://localhost:3000/applicant')
        .then((response) => {  
          state.commit('setApplicants',response.data);
        })
      
    }
  },
  getters: {
    getApplicants: state => state.applicants,
    getApplicant: (state) => (id) => {
      return _.find(state.applicants, function(o) { return o.id == id; });
    },
    getNewApplicants: (state) => {
      return _.filter(state.applicants, {status: 'unprocessed'});
    }
  }
};

const moduleLeaveRequest = {
  state: {
    leaveRequests: []
  },
  mutations: {
    setLeaveRequests (state,payload){
      state.leaveRequests = payload;
    },
    addLeaveRequests (state,payload){
      state.leaveRequests.unshift(payload);
    },
    updateLeaveRequests (state,payload){
      var index = _.findIndex(state.leaveRequests, {id: payload.id});
      state.leaveRequests.splice(index, 1, payload);
    }
  },
  actions: {
    populateLeaveRequests(state){
      axios
				.get('http://localhost:3000/leave?_expand=employee&_expand=date')
        .then((response) => {  
          state.commit('setLeaveRequests',response.data);
        })
      
    }
  },
  getters: {
    getLeaveRequests: state => state.LeaveRequests,
    getLeaveRequest: (state) => (id) => {
      return _.find(state.LeaveRequests, function(o) { return o.id == id; });
    },
    getNewLeaveRequests: (state) => {
      return _.filter(state.LeaveRequests, {status: 'unprocessed'});
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
    employees: moduleEmployee,
    applicants: moduleApplicant,
    leaveRequests: moduleLeaveRequest,
  }
})
