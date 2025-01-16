import { pool } from "../config/connectDb.js";

export const getUser = (req, res) => {
  const q = "SELECT * FROM user";
  pool.query(q, (error, result) => {
    if (error) {
      console.error("Error in getting user");
      return res.status(500).json({ message: "Failed in getting user" });
    }
    res.send(result);
    res.status(200).json({ mesage: "successfull in getting user" });
  });
};
