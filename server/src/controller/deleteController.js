import { pool } from "../config/connectDb.js";

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM user WHERE id = ?";

  pool.query(query, [id], (error, result) => {
    if (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ message: "Failed to delete user" });
    }
    //affectedRows is porperty of result that indicates the number of rows that were affected or changed by the SQL operation you just performed.
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  });
};
