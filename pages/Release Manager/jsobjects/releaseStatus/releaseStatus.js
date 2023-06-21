export default {
	statuses: [
		{
			name: "initiated",
			desc: "Release has been frozen and a regression is in place"
		}, {
			name: "regression_end",
			desc: "Regression has completed and promotion is in progress"
		}, {
			name: "promotion_complete",
			desc: "Latest release has been promoted to master and is now available on Appsmith Cloud. Tagging is in progress"
		}, {
			name: "tagging_complete",
			desc: "Latest release tagged and available on self-hosted instances"
		}, {
			name: "release_failed",
			desc: "This release had blockers and the team decided to not promote the release"
		}],
	getCurrentStatus: () => {
		return this.statuses[_.findIndex(this.statuses, (o) => { return o.name == Table1.selectedRow.status})]
	},
	getNextStatus: () => {
		return this.statuses[_.findIndex(this.statuses, (o) => { return o.name == Table1.selectedRow.status}) + 1]
	}
}