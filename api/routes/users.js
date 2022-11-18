const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


// Update user 
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        // in this part of code we are hash the password 
        //of user if want to chage it
        if (req.body.password) {
            const selt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, selt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            if (!updatedUser) return res.status(200).json("user not found ...");
            const { password, ...other } = updatedUser._doc;
            res.status(200).json(other);

        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json("YOU CAN update only your account !!!");
    }
})


//Delete user 
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const delUser = await User.findByIdAndDelete(req.params.id);
            if (!delUser) return res.status(200).json("user not found ...");
            else return res.status(200).json(" User Deleted")
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(500).json("YOU CAN delete only your account !!!")
    }
})
// get user by id 
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user) return res.status(404).json("user not found !!!")
        const { password, ...other } = user._doc
        if (user) return res.status(200).json(other)

    } catch (error) {
        res.status(500).json(error)
    }
});





module.exports = router