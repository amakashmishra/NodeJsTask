const UserContect = require("../models/userModel");

exports.registerUser = async (req, res, next) => {
    try {

        const query = req.query;
        let arr = [];
        Object.values(query).forEach(async (trade) => {

            const userContect = await UserContect.findOne({
                UserContectNo: trade
            });

            const newUserContect = {
                UserContectNo: trade
            };

            if (!userContect) {
                await UserContect.create(newUserContect);
            } else {
                await UserContect.updateOne(newUserContect);
            }

        });

        res.status(200).json({
            success: true,
        });

    } catch (error) {
        console.log(error);
        res.status(500).end(error.message);
    }

}