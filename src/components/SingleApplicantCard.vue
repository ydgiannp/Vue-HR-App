<template>
  <div class="card mb-3 border-0 shadow-sm">
    <router-link class="text-dark" :to="'/applicant/' + data.id">
      <div class="row no-gutters">
        <div class="col">
          <div class="card-body text-left">
            <div class="row no-gutters">
              <div class="col-6">
                <h5 class="card-title">{{data.name}}</h5>
              </div>
              <div class="col-6">
                <img v-bind:src="data.picture" class="card-img profile-img" alt="...">
              </div>  
            </div>
            <div class="card-text">
              {{data.role}}
              <br> 
              <small> 
              <em> 
                  {{data.division}}
              </em> 
              </small>

              <div class="row no-gutters mt-2">
                <div class="col-6">
                  <small>
                    <div class="text-muted">
                      <font-awesome-icon icon="phone" />
                      {{data.phone}}

                      <br>

                      <font-awesome-icon icon="envelope" />
                      {{data.email}}

                    </div>
                  </small>
                </div>
                <div class="col-6 text-right">
                  <!-- <small> -->
                    <span class="badge badge-pill badge-dark" v-if="data.status == 'unprocessed'">Unprocessed</span>
                    <span class="badge badge-pill badge-info" v-else-if="data.status == 'scheduled_psycho_test'">Scheduled to Phsycotest</span>
                    <span class="badge badge-pill badge-success" v-else>Scheduled to Interview</span>
                  <!-- </small> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ApplicantCard',
  props: {
    data: Object
  }
}
</script>

<style lang="scss">
.profile-img {
  position: absolute;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  right: 0;
  top: 0;
}
</style>
