// src/controllers/userController.js
import userModel from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    console.log("Kết quả truy vấn:", users);
    return res.render("../views/includes/header.ejs", { users });
  } catch (err) {
    console.error("Không thể lấy dữ liệu người dùng:", err);
    return res
      .status(500)
      .render("error.ejs", { message: "Lỗi khi lấy dữ liệu người dùng." });
  }
};

export default { getAllUsers };
