export default {
	team: [{
		name: "UI Builders",
		channel: "pod-ui-builders",
		team: ['Ashok', 'Rahul', 'Abhinav', 'Aswath', 'Ankur', 'Rohit', 'Preet', 'Arsalan']
	}, {
		name: "App Viewers",
		channel: "pod-app-viewers",
		team: ['Balaji', 'Pawan', 'Ashit', 'Toolulope', 'Keyur', 'Somangshu', 'Dhruvik']
	}, {
		name: "FE Coders",
		channel: "pod-fe-coders",
		team: ['Arun','Apeksha', 'Rishab', 'Favour', 'Aishwarya', 'Satbir', 'Rimil', 'Ravi', 'Druthi']
	}, {
		name: "Data Platform",
		channel: "pod-data-platform",
		team: ['Ayush', 'Nidhi', 'Manish', 'Chandan' , 'Subrata', 'Ritesh']
	}, {
		name: "Data Integrations",
		channel: "pod-data-integration",
		team: ['Aman', 'Ade', 'Sumit', 'Sneha', 'Felix', 'Vaibhav']
	}, {
		name: "Team Managers",
		channel: "pod-team-managers",
		team: ['Ankita', 'Vishnu', 'Anagh', 'Abhijeet', 'Trisha', 'Hitesh','Sangeeth','Sidhant', 'Nilesh']
	}, {
		name: "New Developers",
		channel: "pod-new-developers",
		team: ['Hetu', 'Akash', 'Anand', 'Nayan', 'Ginil','Nilansh']
	},{
		name: "DevOps",
		channel:"team-devops",
		team:['Shrikant','Sumesh','Goutham']
	},{
		name: "Design System Pod",
		channel:"design-system",
		team:['Albin','Tanvi','Rohit']
	}],
	get_team: () => {
		let index = Table1.selectedRow.assigned_pod ? _.findIndex(this.team, (o) => { return o.name == Table1.selectedRow.assigned_pod}) : 0
		return this.team[index]
	},
	next_team: () => {
		var currentIndex = 0
		var validPodIndex = 0
		
		// creating a logic to always find the right pod and not default to one in case of error
		var podIndex = _.findIndex(this.team, (o) => { return o.name == Table1.tableData[validPodIndex].assigned_pod})
		while(podIndex == -1) {
			podIndex = _.findIndex(this.team, (o) => { return o.name == Table1.tableData[validPodIndex + 1].assigned_pod})
			validPodIndex++
		}
		
		if(Table1.tableData) {
			currentIndex = podIndex + 1
			if (currentIndex == this.team.length) {
				currentIndex = 0
			}
		}
		return this.team[currentIndex]
	},
	get_team_current: () => {
		let index = Table1.tableData ? _.findIndex(this.team, (o) => { return o.name == Table1.tableData[0].assigned_pod}) : 0
		return this.team[index]
	},
	get_leaderboard: () => {
		let members_arr = []
		 _.map(Table1.tableData, (v, i) => {
			let members = v.pod_members ? v.pod_members.split(',') : []
			return members_arr = [...members_arr, ...members]
		})
		let leaderboard_data = _.map(_.groupBy(members_arr), (v, i) => {
			return {x: i, y: v.length}
		})
		return leaderboard_data
	}
}