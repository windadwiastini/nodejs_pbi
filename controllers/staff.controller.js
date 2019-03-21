var express = require('express');
var app = express();

const Staff = require('../models/staff.model');

exports.test = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    res.send('This is staff controller');
  };

exports.staff_create = function (req, res) {
    let staff = new Staff(
        {
        name: req.body.name,
        age: req.body.age
        }
    );

    staff.save(function (err) {
        if (err) {
        return next(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods","*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).json(staff);
        // res.send('Staff Created successfully')
    })
};

exports.staff_all = function (req, res) {
Staff.find( function(err, staffs) {
    if (err) return next(err);
    // res.send(products);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).json(staffs);
})
};

exports.staff_details = function (req, res) {
Staff.findById(req.params.id, function (err, staff) {
    if (err) return next(err);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(staff);
})
};

exports.staff_update = function (req, res) {
    Staff.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, staff) {
        if (err) return next(err);
        // res.send('Product udpated.');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods","*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).json(staff);
    });
};

exports.staff_delete = function (req, res) {
    Staff.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        // res.send('Deleted successfully!');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods","*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).json({});
    })
};