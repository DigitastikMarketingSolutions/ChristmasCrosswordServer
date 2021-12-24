import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";

dbConnect();

const handler = async (req, res) => {
    const { method } = req;
    // console.log(req.body)
    res.setHeader("Access-Control-Allow-Origin", "*");
    switch (method) {
        case "POST":
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
                                    error,
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
                        error,
                    });
                }
            });
            break;

        case "PUT":
            User.findOneAndUpdate({phone: req.query.phone}, {timeTaken: parseInt(req.query.time)}, (err, doc) => {
                if(!err){
                    res.status(204).json({message: "update succeeded"})
                } else {
                    res.status(500).json({message: "update failed"})
                }
            })
            break;
        default:
            res.status(400).json({ message: "Bad Request." });
            break;
    }
};

export default handler;
