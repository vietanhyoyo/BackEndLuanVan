const SchoolYear = require('../models/SchoolYear')

class ClassController {

    getSchoolYear(req, res) {
        SchoolYear.find({}).sort({ name: -1 }).exec((err, doc) => {
            if (err) res.send(err);
            else res.send(doc)
        })

    }

    addSchoolYear(req, res) {
        if (!req.body.name || req.body.name === '') res.sendStatus(401);
        else {
            const name = req.body.name;
            if (name.length > 9) res.send({ message: 'Độ dài không hợp lệ!', status: 'Error' });
            else {
                SchoolYear.create({ name }, function (err, data) {
                    if (err) res.send({ err, status: 'Error' });
                    res.send({ data, status: 'Success' });
                });
            }
        }
    }

    deleteSchoolYear(req, res) {
        if (!req.body.id || req.body.id === '') res.sendStatus(401);
        else {
            SchoolYear.deleteOne({ _id: req.body.id })
                .then(function () {
                    res.send({ status: 'Succes', message: 'Delete school year' });
                }).catch(function (error) {
                    console.log(error);
                });

        }
    }

    // addClass(req, res) {
    //     if (!req.body) res.sendStatus(401);
    //     else {

    //         const data = req.body;

    //         const name = req.body.name;
    //         if (name.length > 9) res.send({ message: 'Độ dài không hợp lệ!', status: 'Error' });
    //         else {
    //             SchoolYear.create({ name }, function (err, data) {
    //                 if (err) res.send({ err, status: 'Error' });
    //                 res.send({ data, status: 'Success' });
    //             });
    //         }
    //     }
    // }

}

module.exports = new ClassController;