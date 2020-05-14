<template>
  <div>
    <nav class="navbar navbar-light bg-white rounded mb-3 shadow-sm">
      <div class="form-inline">
        <a class="navbar-brand" href="#">Attendance</a>
      </div>
      <form class="form-inline">
        <button type="button" class="btn btn-info mr-2">Clock In</button>
        <button type="button" class="btn btn-info ">Clock Out</button>
      </form>
    </nav>

    <div class="row">
      <div class="col-12">
        <div style="overflow-x:auto;">
          <table class="table bg-white rounded shadow-sm" style="width:2000px;">
            <thead>
              <tr>
                <th>Employee</th>
                <th scope="col" v-for="date in dates" v-bind:key="date.id"> {{new Date(date.date).toDateString()}} </th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="employee in employees" v-bind:key="employee.id">
                <td>{{ employee.name }}</td>
                <td scope="col" v-for="date in dates" v-bind:key="date.id"> 
                  <font-awesome-icon v-if="checkAttendance(date.id,employee.id)" icon="check-square" size="2x" class="text-success"/>
                  <font-awesome-icon v-else icon="times-circle" size="2x" class="text-danger"/>
                   </td>
              </tr>
              <!-- <tr>
                <td scope="col" v-for="date in dates" v-bind:key="date.id" style="width=200px;"> 
                  <font-awesome-icon icon="check-square" size="2x" class="text-success"/>
                   </td>
              </tr> -->
              <!-- <tr>
                <td scope="row">Hendy Yunus</td>
                <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
                <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
                <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
                <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
                <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
      
    </div>

    
  </div>
</template>

<script>
// import employees_json from '@/json/employees-sample.json'
// import employeeCard from '@/components/SingleEmployeeCard.vue'
import axios from 'axios';
import _ from 'lodash';  
export default {
  name: 'AttendanceIndex',
  data() {
    return {
      dates: [],
      employees: this.$store.state.employees.employees,
      attendances: []
    }
  },
  methods: {
		fillAttendance: function () {
      let _self = this;
      axios
				.get('http://localhost:3000/attendace?_sort=employeeId,dateId&_order=asc,asc')
        .then((response) => {  
          // console.log(_.slice(_.rest(response.data), -10));
          _self.attendances = response.data.slice(1).slice(-5) ;
        })
    },
    checkAttendance(dateId, employeeId) {
      // console.log(_.filter(this.attendances, {dateId: dateId, employeeId: employeeId}).length);

      var attendObj = _.filter(this.attendances, {dateId: dateId, employeeId: employeeId})

      if(attendObj[0]){
        if(attendObj[0].status == "P"){
          return true;
        }
        else{
          return false;
        }
      }

      return false

      // return _.filter(this.attendances, {dateId: dateId, employeeId: employeeId})[0];
    }
  },
  mounted: function () {
    // this.populateDashboard();

    let _self = this;
    axios
				.get('http://localhost:3000/dates?attendace=true')
        .then((response) => {  
          _self.dates = response.data.slice(1).slice(-10);
          _self.fillAttendance();
        })
  },
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
