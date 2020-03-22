<template>
  <div class="card mb-3 border-0 shadow-sm">
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
                  <span class="badge badge-pill badge-success" v-if="data.status == 'permanent'">{{data.status}}</span>
                  <span class="badge badge-pill badge-info" v-else-if="data.status == 'contract'">{{data.status}}</span>
                  <span class="badge badge-pill badge-dark" v-else>{{data.status}}</span>
                <!-- </small> -->
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeCard',
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
