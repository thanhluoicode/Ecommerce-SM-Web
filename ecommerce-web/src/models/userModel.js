// src/models/userModel.js
import db from "../config/database.js";

const getAllUsers = async () => {
  try {
    const [results] = await db.query("SELECT * FROM users");
    return results;
  } catch (err) {
    throw new Error("Lỗi khi lấy danh sách người dùng: " + err.message);
  }
};

export default { getAllUsers };
