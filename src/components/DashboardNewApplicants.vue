<template>
	<div class="card border-0 rounded shadow-sm">
		<div class="card-header bg-white">
			<h4 class="card-title">New Applicants</h4>
		</div>
		<div class="card-body">
			<ul class="list-group list-group-flush text-left">
				<li class="list-group-item">
					<div class="media text-left">
						<font-awesome-icon icon="user-astronaut" size="2x" />
						<p class="media-body pl-3 mb-0 lh-125">
							<strong class="d-block text-gray-dark">Deny Ramanda</strong>
							Engineer
							<br>
							<small class="text-muted text-right">5 minutes ago</small>
						</p>
					</div>
				</li>

				<li class="list-group-item">
					<div class="media text-left">
						<font-awesome-icon icon="user-astronaut" size="2x" />
						<p class="media-body pl-3 mb-0 lh-125">
							<strong class="d-block text-gray-dark">Elga yudha</strong>
							UI / UX Developer
							<br>
							<small class="text-muted text-right">5 minutes ago</small>
						</p>
					</div>
				</li>

				<li class="list-group-item">
					<div class="media text-left">
						<font-awesome-icon icon="user-astronaut" size="2x" />
						<p class="media-body pl-3 mb-0 lh-125">
							<strong class="d-block text-gray-dark">Naomi Cahyo</strong>
							Project Manager
							<br>
							<small class="text-muted text-right">5 minutes ago</small>
						</p>
					</div>
				</li>

				<li class="list-group-item">
					<div class="media text-left">
						<font-awesome-icon icon="user-astronaut" size="2x" />
						<p class="media-body pl-3 mb-0 lh-125">
							<strong class="d-block text-gray-dark">Hendy Cahyo</strong>
							OB
							<br>
							<small class="text-muted text-right">5 minutes ago</small>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'DashboardNewApplicants',
	mounted: function () {

	}
}
</script>

<style lang="scss">
	.out-of-today-img {
		width: 50px;
		height: 50px;
		border-radius: 100%;
		right: 0;
		top: 0;
		margin-right: 10px;
	}
</style>