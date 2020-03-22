<template>
  <div id="app">
    <template v-if="!IsLoggedIn">
      <login></login>
    </template>
    <template v-else>

      <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-dark justify-content-between">
        <a class="navbar-brand mr-0 mr-md-2" href="/" aria-label="Bootstrap"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" class="d-block" viewBox="0 0 612 612" role="img" focusable="false"><title>Bootstrap</title><path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"></path><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"></path></svg></a>
      
        <div class="text-white">
          <span class="mr-3">Hi, Admin</span>
          <button class="btn btn-outline-light my-2 my-sm-0" @click="logOut()">Logout</button>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row vh-100 p-3">
          <div class="col-2">
            <sidebar> </sidebar>
          </div>
          
          <div class="col-10">
            <transition
              name="fade"
              mode="out-in"
            >
              <router-view/>
            </transition>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>

import Login from '@/views/Login.vue'

export default {
  name: 'Home',
  data() {
    return {
      logged_in: false
    }
  },
  computed: {
    IsLoggedIn: function () {
      return this.$store.state.isLogin;
    }
  },
  methods:{
		setLogin: function (value) {
			this.logged_in = value
    },
    logOut: function() {
      this.$store.commit('loggedOut');
    }
	},
  components: {
    Login
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F2F6F9;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
