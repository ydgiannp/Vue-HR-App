<template> 
	<div class="container login-container">
		<div class="row justify-content-md-center min-vh-100 align-items-center">
			<div class="col-4 text-left bg-white border-0 shadow-sm p-4 rounded">
					<form @submit="checkForm">
						<div class="form-group">
							<label for="username">Username</label>
							<input type="text" class="form-control" v-model="username">
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input type="password" class="form-control" v-model="password">
						</div>
						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
					<div class="alert alert-danger mt-4" role="alert" v-if="isInvalid">
						Username or password wrong!
					</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
			username: '',
			password: '',
			isInvalid: false
    }
	},
	methods:{
		checkForm: function () {
			let payload = {
				username: this.username,
				password: this.password
			}

			let _self = this;

			this.$store.dispatch('verifyUser', payload).then((response) => {
				if(!response){
					_self.isInvalid = true;
				}else {

				}

			})
		}
	}
}
</script>