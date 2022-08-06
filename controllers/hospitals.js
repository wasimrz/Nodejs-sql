const Hospital = require("../models/hospitals");

exports.createHospital = async (req, res, next) => {
  try {
    const hospitalData = req.body.hospitalDetails;

    console.log(req.body);

    if (!hospitalData.name) {
      throw new Error("hospital Name required");
    }
    const savedHospital = await Hospital.create({
      name: hospitalData.name,
      address: hospitalData.address,
    });
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    next(error);
  }
};
