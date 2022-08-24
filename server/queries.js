const { setDbConnection } = require('./database')
const shortid = require('shortid');


async function createApp(req, res) {
    const newApp = {
        id: shortid.generate(),
        imageUrl: req.body.imageUrl,
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc,
        companyName: req.body.companyName,
        createdAt: Date()
    };
    try {
        let string = `INSERT INTO appscenter.applications (id,imageurl,name,price,appdesc,companyname,createdat) VALUES ('${newApp.id}','${newApp.imageUrl}','${newApp.name}','${newApp.price}','${newApp.desc}','${newApp.companyName}','${newApp.createdAt}')`;
        let insertApp = await setDbConnection(string);
        res.send(newApp);
    } catch (e) {
        console.log('error', e)
    }
}

async function deleteApp(req, res) {
    const appId = req.params.id;

    try {
        let string = `DELETE FROM appscenter.applications WHERE id = '${appId}'`;
        let requestedParking = await setDbConnection(string);

        let rePrint = "SELECT * FROM appscenter.applications";
        let requestedRePrint = await setDbConnection(rePrint);
        res.send(requestedRePrint.rows)
    } catch (e) {
        console.log('error', e)
    }

}

async function printApps(req, res) {
    let string = "SELECT * FROM appscenter.applications";
    let getAllApps = await setDbConnection(string);
    res.send(getAllApps.rows)
}




module.exports = {
    createApp, deleteApp, printApps
};

