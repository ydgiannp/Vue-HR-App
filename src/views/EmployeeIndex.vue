<template>
  <div>

    <!-- navbar -->

    <nav class="navbar navbar-light bg-white rounded mb-3 shadow-sm">
      <div class="form-inline">
        <a class="navbar-brand" href="#">Employee List</a>
        <select id="inputState" class="form-control" v-model="filter">
          <option selected>All</option>
          <option>Permanent</option>
          <option>Contract</option>
          <option>Probation</option>
        </select>
      </div>
      <form class="form-inline">
        <button type="button" class="btn btn-info mr-2">Export CSV</button>
        <button type="button" class="btn btn-info mr-2">Export CSV(All)</button>
        <button type="button" class="btn btn-info mr-2">Import CSV</button>

        <router-link class="text-white" to="/employee/add">
          <button type="button" class="btn btn-info ">Add New Employee</button>
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

      <div class="col-4" v-for="employee in employeesFilter" v-bind:key="employee.id">
        <employee-card v-bind:data="employee"></employee-card>
      </div>


    </div>
  </div>
</template>

<script>
// import employees_json from '@/json/employees-sample.json'
import employeeCard from '@/components/SingleEmployeeCard.vue'
import _ from 'lodash';   
export default {
  name: 'EmployeeIndex',
  data() {
    return {
      employees: {},
      filter: 'All',
      findKey: ''
    }
  },
  components: {
    'employee-card': employeeCard
  },
  mounted: function () {
		// this.populateDashboard();
		this.employees = this.$store.state.employees.employees;
  },
  computed: {
    // a computed getter
    employeesFilter: function () {
      let _self = this;
      // filter b sort by or find
      var employeeFilterByFind = _.filter(this.employees, function(employee) { 
          return employee.name.indexOf(_self.findKey) > -1; 
      });

      return _.filter(employeeFilterByFind, function(employee) { 
          // this.findKey

          // filter sort by
          if (_self.filter.toLowerCase() != 'all'){
            return employee.status == _self.filter.toLowerCase(); 
          }
          return employee; 
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
