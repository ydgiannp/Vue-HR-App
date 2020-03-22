<template>
  <div class="card border-0 rounded shadow-sm">
		<div class="card-header bg-white">
			<h4 class="card-title">Total Employees</h4>
		</div>
		<div class="card-body">
			<div id="container"></div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import _ from 'lodash';    
export default {
	name: 'DashboardTotalEmployee',
	data() {
    return {
			MData: 0,
			FData: 0,
		}
	},
  methods: {
    getMaleAndFemaleEmployees: function () {
			// filter berdasarkan Male dan Female
			var employeesData = this.$store.state.employees.employees;
			var result = _.countBy(employeesData, function(employee){
					return employee.gender;
			});
			this.MData = result.M;
			this.FData = result.F;
		},
		populateHighChart: function(){
			this.getMaleAndFemaleEmployees();

			var Highcharts = require('highcharts');  
			// Load module after Highcharts is loaded
			require('highcharts/modules/exporting')(Highcharts);  
			// Create the chart
			let _self = this;
			Highcharts.chart('container', {
				chart: {
						plotBackgroundColor: null,
						plotBorderWidth: 0,
						plotShadow: false,
						height: '60%',
				},
				title: {
						text: undefined,
						align: 'center',
						verticalAlign: 'middle',
						y: 60
				},
				tooltip: {
						pointFormat: '{point.name}: <b>{point.y}</b>'
				},
				exporting: { enabled: false },
				credits: {
					enabled: false
				},
				plotOptions: {
						pie: {
							dataLabels: {
									enabled: true,
									distance: -50,
									style: {
											fontWeight: 'bold',
											color: 'white'
									}
							},
							startAngle: -90,
							endAngle: 90,
							size: "200%",
							center: ['50%', '100%']
						}
				},
				series: [{
						type: 'pie',
						innerSize: '50%',
						dataLabels: {
							format: '{point.name}: <b>{point.y}</b>'
						},
						data: [
								{ name:'Male', 
								y: _self.MData},
								{ name:'Female', 
								y: _self.FData},
						]
				}]
			});
		}
  },
  mounted: function () {
		// this.populateDashboard();
							// di sini tempat kalo berhasil login
					
		// mulai populate employees
		let _self = this
		this.$store.dispatch('populateEmployees').then((response) => {
			console.log(response);
			_self.populateHighChart();
		})
    
  }
}
</script>