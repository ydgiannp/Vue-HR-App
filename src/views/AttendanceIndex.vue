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

    <table class="table bg-white rounded shadow-sm">
      <thead>
        <tr>
          <th scope="col">Employee</th>
          <th scope="col">Senin</th>
          <th scope="col">Selasa</th>
          <th scope="col">Rabu</th>
          <th scope="col">Kamis</th>
          <th scope="col">Jumat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">Elga Yuda Pranata</td>
          <td> <font-awesome-icon icon="times-circle" size="2x" class="text-danger"/> </td>
          <td> <font-awesome-icon icon="times-circle" size="2x" class="text-danger"/> </td>
          <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
          <td> <font-awesome-icon icon="times-circle" size="2x" class="text-danger"/> </td>
          <td> <font-awesome-icon icon="times-circle" size="2x" class="text-danger"/> </td>
        </tr>
        <tr>
          <td scope="row">Frans Yakob Oetami</td>
          <td> <font-awesome-icon icon="times-circle" size="2x" class="text-danger"/> </td>
          <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
          <td> <font-awesome-icon icon="times-circle" size="2x" class="text-danger"/> </td>
          <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
          <td> <font-awesome-icon icon="times-circle" size="2x" class="text-danger"/> </td>
        </tr>
        <tr>
          <td scope="row">Hendy Yunus</td>
          <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
          <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
          <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
          <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
          <td> <font-awesome-icon icon="check-square" size="2x" class="text-success"/> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import employees_json from '@/json/employees-sample.json'
// import employeeCard from '@/components/SingleEmployeeCard.vue'
export default {
  name: 'AttendanceIndex',
  data() {
    return {
      // employees: employees_json
    }
  },
  components: {
    // 'employee-card': employeeCard
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
