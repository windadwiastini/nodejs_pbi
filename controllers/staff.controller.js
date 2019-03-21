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
        return res.status(400).json(err.message);
        }
        res.status(200).json(staff);
    })
};

exports.staff_all = function (req, res) {
Staff.find( function(err, staffs) {
    if (err) {
        return res.status(400).json(err.message);  
    }
    // res.send(products);
    res.status(200).json(staffs);
})
};

exports.staff_details = function (req, res) {
Staff.findById(req.params.id, function (err, staff) {
    if (err) {
        return res.status(500).json("Please input the correct ID");
    }
    res.send(staff);
})
};

exports.staff_update = function (req, res) {
    Staff.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, staff) {
        if (err) return res.status(400).json(err.message);
        // res.send('Product udpated.');
        res.status(200).json(staff);
    });
};

exports.staff_delete = function (req, res) {
    Staff.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.status(400).json(err);
        // res.send('Deleted successfully!');
        res.status(200).json("Data is removed!");
    })
};