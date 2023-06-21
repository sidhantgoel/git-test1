export default {
	results: [],
	getCriticalIssues: () => {
		return fetchCriticalIssues.data.map((issue) => { 
				return { 
					title: issue.title, 
					user: issue.user.login, 
					age: moment(issue.created_at).fromNow(), 
					labels: issue.labels.map((label) => label.name).join(', '),
					assignees: issue.assignees.map((label) => label.login).join(', '), 
					link: issue.html_url, 
					body: issue.body, 
					number: issue.number,
				}
		})
	}
}