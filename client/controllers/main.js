import { getApps, deleteApp } from '../services/applicationService.js'
const data = getApps();

document.addEventListener('DOMContentLoaded', async () => {
    await data.then(v => setTable(v));
    document.getElementById('search').addEventListener('input', (event) => { search(event.target.value) });
    let del = document.getElementById('deleteApp')
    if (del) {
        del.addEventListener('click', (event) => { delApp(event.target.value) });
    }
});



function delApp(appId) {
    const newData = deleteApp(appId)
    newData.then(v => setTable(v));
}

function setTable(data) {
    let appList = '';
    if (data) {
        data.forEach((row) => {
            appList += `<div class="company">`
            appList += `<img src="../assets/images/${row.imageUrl ? row.imageUrl : 'help.png'}" class="icon">`
            appList += `<div class="app-info">`
            appList += `<h3 class="move-info-left">${row.name}</h3>`
            appList += `<h6 class="move-info-left">${row.appdesc}</h6>`
            appList += `<p class="move-info-left">price: ${row.price}$</p>`
            appList += `<p class="move-info-left">company: ${row.companyname}</p>`
            appList += `<p class="move-info-left">uploaded: <time>${row.createdat}</time></p>`
            appList += `</div><div class="delete-icon">`
            appList += `<button id="deleteApp" value="${row.id}">🗑</button>`
            appList += `</div></div>`
        });
        document.getElementById('app-list').innerHTML = appList
    }

}





function search(filter) {
    data.then(v => {
        const filteredData = v.filter((row) => row.appname.toLowerCase().includes(filter.toLowerCase()));
        setTable(filteredData)
    });
}


