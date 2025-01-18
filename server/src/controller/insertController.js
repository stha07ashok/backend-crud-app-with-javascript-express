import { pool } from "../config/connectDb.js";

export const insertUser = (req, res) => {
  const { name, email, contact } = req.body;

  if (!name || !email || !contact) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "INSERT INTO user ( name, email, `contact`) VALUES (?,?,?)";

  pool.query(query, [name, email, contact], (error, result) => {
    if (error) {
      console.error("Error inserting data:", error.message);
      return res
        .status(500)
        .json({ message: "Database query failed. Please try again later." });
    }
    return res
      .status(200)
      .json({ message: "User inserted successfully", data: result });
  });
};
