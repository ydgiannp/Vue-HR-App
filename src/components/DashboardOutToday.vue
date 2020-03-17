<template>
  <div class="card border-0 rounded shadow-sm">
		<div class="card-header bg-white">
			<h4 class="card-title">Out Today</h4>
		</div>
		<div class="card-body">
			<ul class="list-group list-group-flush text-left">
				<li class="list-group-item">
					<img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="card-img out-of-today-img" alt="...">
					Deny Ramanda
					</li>
				<li class="list-group-item">
					<img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="card-img out-of-today-img" alt="...">
					Elga Yuda Permana
				</li>
				<li class="list-group-item">
					<img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="card-img out-of-today-img" alt="...">
					Naomi Putri
				</li>
				<li class="list-group-item">
					<img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="card-img out-of-today-img" alt="...">
					Hendi Lesmana
				</li>
				<li class="list-group-item">
					<img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="card-img out-of-today-img" alt="...">
					Rino Cahyo
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'DashboardOutToday',
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