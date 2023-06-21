export default {
	myVar1: [
		{
			"label": "UI Builder's POD",
			"value": "ui-builder-pod",
			"name": "UI Builders"
		},
		{
			"label": "App Viewer's POD",
			"value": "app-viewer-pod",
			"name": "App Viewers"
		},
		{
			"label": "FE coder's POD",
			"value": "fe-coder-pod",
			"name": "FE Coders"
		},
		{
			"label": "BE coder's POD",
			"value": "be-coder-pod",
			"name": "BE Coders"
		},
		{
			"label": "Team Manager's POD",
			"value": "team-manager-pod",
			"name": "Team Managers"
		},
		{
			"label": "New Developers's POD",
			"value": "new-developer-pod",
			"name": "New Developers"
		}
	],
	
	returnPodName: () => {
		return SelectPod.selectedOptionValue ? this.myVar1[_.findIndex(this.myVar1, (o) => { return o.value == SelectPod.selectedOptionValue})].name : ""
	}
}