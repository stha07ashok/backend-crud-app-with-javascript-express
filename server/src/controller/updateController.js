import { pool } from "../config/connectDb.js";

export const updateUser = (req, res) => {
  const { id } = req.params; // Get the user ID from the URL parameter
  const { name, email, contact } = req.body; // Get new data from the request body
  // Update query
  const query =
    "UPDATE user SET name = ?, email = ?, `contact` = ? WHERE id = ?";

  pool.query(query, [name, email, contact, id], (error, result) => {
    if (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ message: "Failed to update user" });
    }

    // Check if the update was successful
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User updated successfully" });
  });
};
