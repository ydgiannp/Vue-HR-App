<template>
  <div>

    <!-- navbar -->

    <nav class="navbar navbar-light bg-white rounded mb-3 shadow-sm">
      <div class="form-inline">
        <a class="navbar-brand" href="#">Applicants List</a>
        <select id="inputState" class="form-control" v-model="filter">
          <option selected>Sort By</option>
          <option value="all">All</option>
          <option value="unprocessed">Unprocessed</option>
          <option value="scheduled_psycho_test">Scheduled to Physio Test</option>
          <option value="scheduled_interview">Scheduled to Interview</option>
        </select>
      </div>
      <form class="form-inline">
        <button type="button" class="btn btn-info mr-2">Export CSV</button>
        <button type="button" class="btn btn-info mr-2">Export CSV(All)</button>
        <button type="button" class="btn btn-info mr-2">Import CSV</button>

        <router-link class="text-white" to="/applicant/add">
          <button type="button" class="btn btn-info ">Add Applicant</button>
        </router-link>
      </form>

      <div class="w-100">
        <div class="input-group my-2">
          <input type="text" class="form-control" v-model="findKey" placeholder="Type to search" aria-label="Type to search" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-info" type="button" id="button-addon2">Search</button>
          </div>
        </div>
      </div>
    </nav>

    <div class="row no gutters">

      <div class="col-4" v-for="applicant in applicantsFilter" v-bind:key="applicant.id">
        <applicant-card v-bind:data="applicant"></applicant-card>
      </div>


    </div>
  </div>
</template>

<script>
// import employees_json from '@/json/employees-sample.json'
import ApplicantCard from '@/components/SingleApplicantCard.vue'
import axios from 'axios';
import _ from 'lodash'; 

export default {
  name: 'EmployeeIndex',
  data() {
    return {
      applicants: [],
      filter: 'All',
      findKey: ''
    }
  },
  components: {
    'applicant-card': ApplicantCard
  },
  mounted: function () {
		let _self = this;
      axios
				.get('http://localhost:3000/applicants')
        .then((response) => {  
          _self.applicants = response.data;
          
        })
		// this.employees = this.$store.state.employees.employees;
  },
  computed: {
    // a computed getter
    applicantsFilter: function () {
      let _self = this;
      // filter b sort by or find
      var applicantFilterByFind = _.filter(this.applicants, function(applicant) { 
          return applicant.name.indexOf(_self.findKey) > -1; 
      });

      return _.filter(applicantFilterByFind, function(applicant) { 
          // this.findKey

          // filter sort by
          if (_self.filter.toLowerCase() != 'all'){
            return applicant.status == _self.filter.toLowerCase(); 
          }
          return applicant; 
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
