export default {
	unwantedLabelList: ["App Viewers Pod", "New Developers Pod", "Needs Triaging", "UI Builders Pod", "Stale", "skip-changelog", "Performance Pod", "Documentation", "User Education Pod", "Ready for Doc Team", "QA", "Production", "UI Improvement"],
	myVar2: {},
	getLabelsByCount () {
		let labelReduction = _.reduce(CurrentSprintWIPLimits.data.data.workspace.activeSprint.issues.nodes, (result, value, key) => { 
				result.push(value.labels.nodes)
			  return result;
		}, [])
		let labelFlattened = _.flatten(labelReduction)
		let labelGrouped = _.groupBy(labelFlattened, "name")
		let removeUnwantedLabels = _.omit(labelGrouped, this.unwantedLabelList)
		let pieDataPlotForLabels = _.orderBy(_.map(removeUnwantedLabels, (v,i) => {
				if(i !== "App Viewers Pod") {
					return {"x": i, "y": v.length}
				}
		}), "y", "desc")
		return pieDataPlotForLabels
	},
	getInvestmentNewAndOld () {
		let labelReduction = _.reduce(CurrentSprintWIPLimits.data.data.workspace.activeSprint.issues.nodes, (result, value, key) => { 
				result.push(value.labels.nodes)
			  return result;
		}, [])
		let labelFlattened = _.flatten(labelReduction)
		let labelGrouped = _.groupBy(labelFlattened, "name")
		let removeUnwantedLabels = _.pick(labelGrouped, ["Enhancement", "Bug"])
		let pieDataPlotForLabels = _.orderBy(_.map(removeUnwantedLabels, (v,i) => {
				if(i !== "App Viewers Pod") {
					return {"x": i, "y": v.length}
				}
		}), "y", "desc")
		return pieDataPlotForLabels
	},
	getInvestmentStability () {
		let labelReduction = _.reduce(CurrentSprintWIPLimits.data.data.workspace.activeSprint.issues.nodes, (result, value, key) => { 
				result.push(value.labels.nodes)
			  return result;
		}, [])
		let labelFlattened = _.flatten(labelReduction)
		let labelGrouped = _.groupBy(labelFlattened, "name")
		let removeUnwantedLabels = _.pick(labelGrouped, ["Critical", "High", "Medium", "Low"])
		let pieDataPlotForLabels = _.orderBy(_.map(removeUnwantedLabels, (v,i) => {
				if(i !== "App Viewers Pod") {
					return {"x": i, "y": v.length}
				}
		}), "y", "desc")
		return pieDataPlotForLabels
	}
}