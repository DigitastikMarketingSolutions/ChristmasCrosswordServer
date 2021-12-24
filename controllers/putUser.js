const User = require("../models/User");

const handler = async (req, res) => {
    const {phone, time} = req.query
    User.findOneAndUpdate({phone: phone}, {timeTaken: parseInt(time)}, (err, doc) => {
        if(!err){
            res.status(204).json({message: "update succeeded"})
        } else {
            res.status(500).json({message: "update failed"})
        }
    })
}

module.exports = handler;