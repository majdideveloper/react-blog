const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');



router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashpassword,

        });
        const user = await newUser.save();

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);

    }
});

// Login 
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(400).json("wrong credentials !!!!");

        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json("wrong credentials !!!!");


        const { password, ...others } = user._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }

})


router.get("/alluser", async (req, res) => {
    try {
        let users = await User.find()
        res.status(200).json(users);


    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router