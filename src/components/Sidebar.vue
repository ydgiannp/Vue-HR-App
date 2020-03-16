<template>
  <ul class="list-group list-group-flush text-left rounded p-2 bg-white shadow-sm">
    <li class="list-group-item px-1 py-2">
      <router-link class="text-dark" to="/">
        <div class="row no-gutters">
          <div class="col-3">
            <font-awesome-icon icon="home" />
          </div>
          <div class="col-9 align-self-center">
            <span>Dashboard</span>
          </div>
        </div>
      </router-link>
    </li>
    <li class="list-group-item px-1 py-2">
      <router-link class="text-dark" to="/employee">
        <div class="row no-gutters">
          <div class="col-3">
            <font-awesome-icon icon="id-badge" />
          </div>
          <div class="col-9 align-self-center">
            <span>Employees</span>
          </div>
        </div>
      </router-link>
    </li>
    <li class="list-group-item px-1 py-2">
      <router-link class="text-dark" to="/attendance">
        <div class="row no-gutters">
          <div class="col-3">
            <font-awesome-icon icon="clock" />
          </div>
          <div class="col-9 align-self-center">
            <span>Attendance</span>
          </div>
        </div>
      </router-link>
    </li>
    <li class="list-group-item px-1 py-2">
      <router-link class="text-dark" to="/applicants">
        <div class="row no-gutters">
          <div class="col-3">
            <font-awesome-icon icon="file-invoice" />
          </div>
          <div class="col-9 align-self-center">
            <span>Applicants</span>
          </div>
        </div>
      </router-link>
    </li>
    <li class="list-group-item px-1 py-2">
      <router-link class="text-dark" to="/leave-request">
        <div class="row no-gutters">
          <div class="col-3">
            <font-awesome-icon icon="plane-departure" />
          </div>
          <div class="col-9 align-self-center">
            <span>Leave Request</span>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Sidebar'
  }
</script>