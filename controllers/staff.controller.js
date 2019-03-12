var express = require('express');
var app = express();

const Staff = require('../models/staff.model');

exports.test = function (req, res) {
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
        res.status(200).json(staff);
        // res.send('Staff Created successfully')
    })
};

exports.staff_all = function (req, res) {
Staff.find( function(err, staffs) {
    if (err) return next(err);
    // res.send(products);
    res.status(200).json(staffs);
})
};

exports.staff_details = function (req, res) {
Staff.findById(req.params.id, function (err, staff) {
    if (err) return next(err);
    res.send(staff);
})
};