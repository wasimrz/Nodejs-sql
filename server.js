const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./config/db");

const app = express();

//routes
const hospitalRoutes = require("./routes/hospitals");
const userRoutes = require("./routes/users");
const User = require("./models/users");
const UserProfile = require("./models/userProfiles");
const Hospital = require("./models/hospitals");

//BODY-PARSER
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/hospitals", hospitalRoutes);
app.use("/users", userRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).send("Something broke!");
});

//relation
UserProfile.belongsTo(User);
UserProfile.belongsTo(Hospital);
User.hasMany(UserProfile);
Hospital.hasMany(User);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000, () => {
      console.log("sever started at 3000");
    });
  })
  .catch((error) => {
    process.exit(1);
  });
