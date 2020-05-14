<template>
	<div>

		<!-- navbar -->

		<nav class="navbar navbar-light bg-white rounded mb-3 shadow-sm">
			<div class="form-inline">
				<a class="navbar-brand" href="#">Add New Applicant</a>
			</div>
			<!-- <form class="form-inline">
				<button type="button" class="btn btn-info mr-2">Export CSV</button>
				<button type="button" class="btn btn-info mr-2">Export CSV(All)</button>
				<button type="button" class="btn btn-info mr-2">Import CSV</button>

				<button type="button" class="btn btn-info ">Add New Employee</button>

			</form> -->
		</nav>

		<div class="row">
			<div class="col">

				<div class="alert alert-info text-left" role="alert" v-if="updateSuccess">
					Insert Success
				</div>

				<form class="text-left bg-white p-3 rounded shadow-sm" @submit.prevent="submitForm()">

					<div class="row">
						<div class="col">

							<div class="form-group">
								<label for="exampleInputEmail1">Name</label>
								<input type="text" class="form-control" v-model="name">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
							
							<div class="form-group">
								<label for="exampleInputEmail1">Phone</label>
								<input type="number" class="form-control" v-model="phone">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
							
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" class="form-control" v-model="email">
								<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							
							<div class="form-check">
								<input class="form-check-input" type="radio" v-model="gender" value="M" checked>
								<label class="form-check-label" for="exampleRadios1">
									Male
								</label>
							</div>
							<div class="form-check mb-3">
								<input class="form-check-input" type="radio" v-model="gender" value="F">
								<label class="form-check-label" for="exampleRadios2">
									Female
								</label>
							</div>

							<div class="form-group">
								<label for="exampleInputEmail1">Date of Birth</label>
								<input type="date" class="form-control" v-model="birth_date">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>

														
							<div class="form-group">
								<label for="exampleInputEmail1">Division</label>
								<input type="text" class="form-control" v-model="division">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
						</div>
						<div class="col">

														
							<div class="form-group">
								<label for="exampleInputEmail1">Role</label>
								<input type="text" class="form-control" v-model="role">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
							

							<div class="form-group">
								<label for="exampleInputEmail1">Address</label>
								<textarea class="form-control" v-model="address"></textarea>
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>

							<div class="row no-gutter">
								<div class="col-8">
									<div class="form-group">
										<label for="exampleInputEmail1">Picture</label>
										<input type="text" class="form-control" v-model="picture">
										<small id="emailHelp" class="form-text text-muted">Picture link.</small>
									</div>
								</div>

								<div class="col-4">
									<img v-bind:src="picture" v-if="picture" class="card-img add-employee-img" alt="...">
								</div>
							</div>

						</div>
					</div>

					

					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
				
			</div>
		</div>
	</div>
</template>

<script>
// import employees_json from '@/json/employees-sample.json'
// import employeeCard from '@/components/SingleEmployeeCard.vue'
import axios from 'axios';
export default {
	name: 'EmployeeAdd',
	data() {
		return {
		name: '',
		phone: '',
		email: '',
		division: '',
		role: '',
		status: 'unprocessed',
		picture: '',
		gender: '',
		birth_date: '',
		address: '',
		updateSuccess: '',
		}
	},
	methods: {
		submitForm: function () {
			let _self = this;
			axios({
				method: 'post',
				url: 'http://localhost:3000/applicant',
				data: {
					"name": _self.name,
					"email": _self.email,
					"phone": _self.phone,
					"division": _self.division,
					"role": _self.role,
					"status": _self.status,
					"picture": _self.picture,
					"gender": _self.gender,
					"birth_date": _self.birth_date,
					"address": _self.address
				}
			}).then(function (response) {
				_self.$store.commit('addApplicants',response.data);
				_self.updateSuccess = true;
			});
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

.add-employee-img {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  right: 0;
  top: 0;
}

</style>
