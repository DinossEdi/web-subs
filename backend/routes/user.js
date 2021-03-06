const router = require("express").Router();

let User = require("/home/ayra/projects/web-subs/backend/models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const news = req.body.news;
  const email = req.body.email;
  const photo = req.body.photo;
  const newUser = new User({ username, gender, dob, news, email, photo });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").put((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((user) => {
      user.username = req.body.username;
      user.gender = req.body.gender;
      user.dob = req.body.dob;
      user.news = req.body.news;
      user.email = req.body.email;
      user.photo = req.body.photo;

      user
        .save()
        .then(() => res.json("User Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/:page/:size").get((req, res) => {
  User.find()
    .then(() => res.json(req.params))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
