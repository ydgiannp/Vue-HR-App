<template>
  <div>

    <!-- navbar -->

    <nav class="navbar navbar-light bg-white rounded mb-3 shadow-sm">
      <div class="form-inline">
        <a class="navbar-brand" href="#">Leave Request List</a>
        <select id="inputState" class="form-control">
          <option selected>Sort By</option>
          <option>All</option>
          <option>Approve</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>
      <form class="form-inline">
        <button type="button" class="btn btn-info mr-2">Export CSV</button>
        <button type="button" class="btn btn-info mr-2">Export CSV(All)</button>
        <button type="button" class="btn btn-info mr-2">Import CSV</button>
        <button type="button" class="btn btn-info ">Add Leave Request</button>
      </form>

      <div class="w-100">
        <div class="input-group my-2">
          <input type="text" class="form-control" placeholder="Type to search" aria-label="Type to search" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-info" type="button" id="button-addon2">Search</button>
          </div>
        </div>
      </div>
    </nav>

    <div class="row no gutters">
      <div class="col-4" v-for="leave in leave_requests" v-bind:key="leave">
        <leave-request-card v-bind:data="leave" v-if="leave.employee"></leave-request-card>
      </div>
    </div>
  </div>
</template>

<script>
// import employees_json from '@/json/employees-sample.json'
import leaveRequestCard from '@/components/SingleLeaveRequestCard.vue'
export default {
  name: 'LeaveRequestIndex',
  data() {
    return {
      leave_requests: []
    }
  },
  components: {
    'leave-request-card': leaveRequestCard
  },
  mounted: function() {
    this.$store.dispatch('populateLeaveRequests');
    this.leave_requests = this.$store.state.leaveRequests.leaveRequests;
    console.log(this.leave_requests);
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
