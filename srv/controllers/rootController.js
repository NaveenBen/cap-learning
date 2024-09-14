const cds=require("@sap/cds")
exports.index = async function (req, res, next) {
    try {
        res.json({ "status": 200, "msg": "Success" });
    }
    catch (err) {
        next(err);
    }
}

exports.data = async function (req, res, next) {
    try {
        let db=await cds.connect.to("db");
        //let query = `SELECT * from dev.price_menu`;
        //let result=await db.run(query);
        let result=await db.run(SELECT .from `price_menu`);
        res.send(result);
    }
    catch (err) {
        next(err);
    }
}

exports.other = async function (req, res, next) {
    try {
        res.json({ "status": 200, "msg": "No such Page" });
    }
    catch (err) {
        next(err);
    }
}