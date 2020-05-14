<template>
  <div class="card mb-3 border-0 shadow-sm">
    <div class="row no-gutters">
      <div class="col">
        <div class="card-body text-left">
          <div class="row no-gutters">
            <div class="col-6">
              <h5 class="card-title">{{data.employee.name}}</h5>
            </div>
            <div class="col-6">
              <img v-bind:src="data.employee.picture" class="card-img profile-img" alt="...">
            </div>  
          </div>
          <div class="card-text">
              {{data.employee.role}}
              <br> 
              <small> 
              <em> 
                  {{data.employee.division}}
              </em> 
              </small>

              <div class="row no-gutters mt-2">
                <div class="col-6">
                  <small>
                    <div class="text-muted">
                      <font-awesome-icon icon="phone" />
                      {{data.employee.phone}}

                      <br>

                      <font-awesome-icon icon="envelope" />
                      {{data.employee.email}}

                    </div>
                  </small>
                </div>
                <div class="col-6 text-right">
                  <small>
                    <div class="text-muted">
                      Leave at {{new Date(data.date.date).toDateString()}}
                    </div>
                  </small>
                  <!-- <span class="badge badge-pill badge-success">Success </span> -->
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
  name: 'LeaveRequestCard',
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
