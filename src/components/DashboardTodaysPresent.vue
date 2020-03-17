<template>
  <div class="card border-0 rounded shadow-sm">
		<div class="card-header bg-white">
			<h4 class="card-title">Today's Present</h4>
		</div>
		<div class="card-body text-center">
			<h3>
				<font-awesome-icon icon="user-clock" size="2x" class="mr-2" />
				7 /
				<span class="text-muted">10</span>
			</h3>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'DashboardTodaysPresent',
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