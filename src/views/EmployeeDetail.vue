<template>
	<div>

		<!-- navbar -->

		<nav class="navbar navbar-light bg-white rounded mb-3 shadow-sm">
			<div class="form-inline">
				<a class="navbar-brand" href="#">Employee Detail</a>
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
					Update Success
				</div>

				<form class="text-left bg-white p-3 rounded shadow-sm" @submit.prevent="updateForm()">

					<div class="row">
						<div class="col">

							<div class="form-group">
								<label for="exampleInputEmail1">Name</label>
								<input type="text" class="form-control" v-model="employee.name">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
							
							<div class="form-group">
								<label for="exampleInputEmail1">Phone</label>
								<input type="number" class="form-control" v-model="employee.phone">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
							
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" class="form-control" v-model="employee.email">
								<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							
							<div class="form-check">
								<input class="form-check-input" type="radio" v-model="employee.gender" value="M" checked>
								<label class="form-check-label" for="exampleRadios1">
									Male
								</label>
							</div>
							<div class="form-check mb-3">
								<input class="form-check-input" type="radio" v-model="employee.gender" value="F">
								<label class="form-check-label" for="exampleRadios2">
									Female
								</label>
							</div>

							<div class="form-group">
								<label for="exampleInputEmail1">Date of Birth</label>
								<input type="date" class="form-control" v-model="employee.birth_date">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>

														
							<div class="form-group">
								<label for="exampleInputEmail1">Division</label>
								<input type="text" class="form-control" v-model="employee.division">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
						</div>
						<div class="col">	
							<div class="form-group">
								<label for="exampleInputEmail1">Role</label>
								<input type="text" class="form-control" v-model="employee.role">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
							
							<div class="form-group">
								<label for="exampleInputEmail1">Status</label>
								<select class="form-control" v-model="employee.status">
									<option disabled value="">Pilih salah satu</option>
									<option>permanent</option>
									<option>contract</option>
									<option>probation</option>
								</select>
							</div>

							<div class="form-group">
								<label for="exampleInputEmail1">Address</label>
								<textarea class="form-control" v-model="employee.address"></textarea>
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>

							<div class="row no-gutter">
								<div class="col-8">
									<div class="form-group">
										<label for="exampleInputEmail1">Picture</label>
										<input type="text" class="form-control" v-model="employee.picture">
										<small id="emailHelp" class="form-text text-muted">Picture link.</small>
									</div>
								</div>

								<div class="col-4">
									<img v-bind:src="employee.picture" v-if="employee.picture" class="card-img add-employee-img" alt="...">
								</div>
							</div>

						</div>
					</div>

					

					<button type="submit" class="btn btn-primary">Save</button>
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
	name: 'EmployeeDetail',
	data() {
		return {
			employee: {
				id: '',
				name: '',
				email: '',
				phone: '',
				division: '',
				role: '',
				status: '',
				picture: '',
				gender: '',
				birth_date: '',
				address: ''
			},
			updateSuccess: false
		}
	},
	methods: {
		updateForm: function () {
			let _self = this;
			axios({
				method: 'patch',
				url: 'http://localhost:3000/employees/' + _self.employee.id,
				data: {
					"name": _self.employee.name,
					"email": _self.employee.email,
					"phone": _self.employee.phone,
					"division": _self.employee.division,
					"role": _self.employee.role,
					"status": _self.employee.status,
					"picture": _self.employee.picture,
					"gender": _self.employee.gender,
					"birth_date": _self.employee.birth_date,
					"address": _self.employee.address
				}
			}).then(function (response) {
				_self.$store.commit('updateEmployees',response.data);
				_self.updateSuccess = true;
			});
		}
	},
  mounted: function () {
		this.employee = this.$store.getters.getEmployee(this.$route.params.id);
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
