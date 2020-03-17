<template>
  <div class="row">
    <div class="col">
      <div class="card-columns">
        <dashboard-total-employee></dashboard-total-employee>
        <dashboard-out-today></dashboard-out-today>
        <dashboard-todays-present></dashboard-todays-present>
        
        <dashboard-upcoming-event></dashboard-upcoming-event>
        <dashboard-new-applicants></dashboard-new-applicants>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardTotalEmployee from '@/components/DashboardTotalEmployee.vue'
import DashboardOutToday from '@/components/DashboardOutToday.vue'
import DashboardTodaysPresent from '@/components/DashboardTodaysPresent.vue'
import DashboardUpcomingEvent from '@/components/DashboardUpcomingEvent.vue'
import DashboardNewApplicants from '@/components/DashboardNewApplicants.vue'

export default {
  name: 'Home',
  components: {
    DashboardTotalEmployee,
    DashboardOutToday,
    DashboardTodaysPresent,
    DashboardUpcomingEvent,
    DashboardNewApplicants,
  }
}
</script>
