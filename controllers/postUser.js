const User = require("../models/User");

const handler = async (req, res) => {
    console.log(req)
    User.find({ phone: req.body.phone }, (err, doc) => {
        console.log("find")
        if(!err){
            console.log("No error")
            if (!doc.length) {
                const user = new User(req.body);
                user.save()
                    .then(() => {
                        console.log("success")
                        res.status(201).json({
                            messageCode: "success",
                            data: req.body,
                        });
                    })
                    .catch((err) => {
                        console.log("save-error")
                        res.status(500).json({
                            messageCode: "save-error",
                            error: err,
                        });
                    });
            } else {
                console.log("user-exists")
                res.status(201).json({ messageCode: "user-exists" });
            }

        } else {
            console.log("search-error")
            res.status(500).json({
                messageCode: "search-error",
            });
        }
    });
}

module.exports = handler;