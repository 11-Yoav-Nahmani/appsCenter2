const appToAdd = async (app) => {

	const requestOp = {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(app),
		redirect: 'follow'
	}
	try {
		const add = await fetch('http://localhost:3000/api/app', requestOp)
		return add.json()
	} catch (e) {
		console.log("erorr", e)
	}
}


const deleteApp = async (id) => {

	const requestOp = {
		method: 'DELETE',
		headers: { 'content-type': 'application/json' }
	}

	try {
		const deletedAppAction = await fetch(`http://localhost:3000/api/app/${id}`, requestOp)
		return deletedAppAction.json()
	} catch (e) {
		console.log(e)
	}
}


const getApps = async () => {

	const reqPrint = {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	}
	try {
		const print = await fetch('http://localhost:3000/api/apps', reqPrint)
		return await print.json()
	} catch (e) {
		console.log(e)
	}
}

export { getApps, appToAdd, deleteApp }
