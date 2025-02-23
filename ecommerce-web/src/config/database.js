// src/config/database.js
import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "test1",
};

const db = mysql.createPool(dbConfig);

(async () => {
  try {
    const connection = await db.getConnection();
    console.log("Kết nối thành công đến cơ sở dữ liệu MySQL!");
    connection.release();
  } catch (err) {
    console.error("Không thể kết nối đến cơ sở dữ liệu:", err);
  }
})();

export default db;
