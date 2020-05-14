<template>
	<div>

		<!-- navbar -->

		<nav class="navbar navbar-light bg-white rounded mb-3 shadow-sm">
			<div class="form-inline">
				<a class="navbar-brand" href="#">Applicant Detail</a>
			</div>
			<!-- <form class="form-inline">
				<button type="button" class="btn btn-info mr-2">Export CSV</button>
				<button type="button" class="btn btn-info mr-2">Export CSV(All)</button>
				<button type="button" class="btn btn-info mr-2">Import CSV</button>

				<button type="button" class="btn btn-info ">Add New applicant</button>

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
								<input type="text" class="form-control" v-model="applicant.name">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
							
							<div class="form-group">
								<label for="exampleInputEmail1">Phone</label>
								<input type="number" class="form-control" v-model="applicant.phone">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
							
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" class="form-control" v-model="applicant.email">
								<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							
							<div class="form-check">
								<input class="form-check-input" type="radio" v-model="applicant.gender" value="M" checked>
								<label class="form-check-label" for="exampleRadios1">
									Male
								</label>
							</div>
							<div class="form-check mb-3">
								<input class="form-check-input" type="radio" v-model="applicant.gender" value="F">
								<label class="form-check-label" for="exampleRadios2">
									Female
								</label>
							</div>

							<div class="form-group">
								<label for="exampleInputEmail1">Date of Birth</label>
								<input type="date" class="form-control" v-model="applicant.birth_date">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>

														
							<div class="form-group">
								<label for="exampleInputEmail1">Division</label>
								<input type="text" class="form-control" v-model="applicant.division">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
						</div>
						<div class="col">	
							<div class="form-group">
								<label for="exampleInputEmail1">Role</label>
								<input type="text" class="form-control" v-model="applicant.role">
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>
							
							<div class="form-group">
								<label for="exampleInputEmail1">Status</label>
								<select class="form-control" v-model="applicant.status">
									<option disabled value="">Pilih salah satu</option>
									<option value="unprocessed">Unprocessed</option>
									<option value="scheduled_psycho_test">Scheduled to Physio Test</option>
									<option value="scheduled_interview">Scheduled to Interview</option>
								</select>
							</div>

							<div class="form-group">
								<label for="exampleInputEmail1">Address</label>
								<textarea class="form-control" v-model="applicant.address"></textarea>
								<!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
							</div>

							<div class="row no-gutter">
								<div class="col-8">
									<div class="form-group">
										<label for="exampleInputEmail1">Picture</label>
										<input type="text" class="form-control" v-model="applicant.picture">
										<small id="emailHelp" class="form-text text-muted">Picture link.</small>
									</div>
								</div>

								<div class="col-4">
									<img v-bind:src="applicant.picture" v-if="applicant.picture" class="card-img add-applicant-img" alt="...">
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
// import applicants_json from '@/json/applicants-sample.json'
// import applicantCard from '@/components/SingleapplicantCard.vue'
import axios from 'axios';
export default {
	name: 'applicantDetail',
	data() {
		return {
			applicant: {
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
				url: 'http://localhost:3000/applicant/' + _self.applicant.id,
				data: {
					"name": _self.applicant.name,
					"email": _self.applicant.email,
					"phone": _self.applicant.phone,
					"division": _self.applicant.division,
					"role": _self.applicant.role,
					"status": _self.applicant.status,
					"picture": _self.applicant.picture,
					"gender": _self.applicant.gender,
					"birth_date": _self.applicant.birth_date,
					"address": _self.applicant.address
				}
			}).then(function (response) {
				_self.$store.commit('updateApplicants',response.data);
				_self.updateSuccess = true;
			});
		}
	},
  mounted: function () {
		this.applicant = this.$store.getters.getApplicant(this.$route.params.id);
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

.add-applicant-img {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  right: 0;
  top: 0;
}

</style>
