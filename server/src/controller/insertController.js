import { pool } from "../config/connectDb.js";

// Function to insert a user into the database
export const insertUser = (req, res) => {
  const query =
    "INSERT INTO user (id, name, email, `contact number`) VALUES ('2','anil', 'anil@gmail.com', '9847401122')";
  pool.query(query, (error, result) => {
    if (error) {
      console.error("Error inserting data:", error);
      return res.status(500).json({ message: "Database query failed" });
    }
    console.log("Insert result:", result);
    res
      .status(200)
      .json({ message: "User inserted successfully", data: result });
  });
};
