<template>
  <div class="card mb-3 border-0 shadow-sm">
    <div class="row no-gutters">
      <div class="col">
        <div class="card-body text-left">
          <div class="row no-gutters">
            <div class="col-6">
              <h5 class="card-title">Jamaludin</h5>
            </div>
            <div class="col-6">
              <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="card-img profile-img" alt="...">
            </div>  
          </div>
          <div class="card-text">
              Manager 
              <br> 
              <small> 
              <em> 
                  Research Development
              </em> 
              </small>

              <div class="row no-gutters mt-2">
                <div class="col-6">
                  <small>
                    <div class="text-muted">
                      <font-awesome-icon icon="phone" />
                      0812345

                      <br>

                      <font-awesome-icon icon="envelope" />
                      email@email.com

                    </div>
                  </small>
                </div>
                <div class="col-6 text-right">
                  <!-- <small> -->
                    <span class="badge badge-pill badge-info">Unprocessed</span>
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
  name: 'ApplicantCard',
  props: {
    msg: String
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
