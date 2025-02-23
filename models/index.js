import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import Member from "./Member.js";
import Book from "./Book.js";
import Issuance from "./Issuance.js";

dotenv.config();

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

// Initialize models
Member.init(sequelize);
Book.init(sequelize);
Issuance.init(sequelize);

// Define relationships
Issuance.belongsTo(Member, { foreignKey: "issuance_member", onDelete: "CASCADE" });
Issuance.belongsTo(Book, { foreignKey: "book_id", onDelete: "CASCADE" });

// Sync Database
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Database & tables synced"))
  .catch(err => console.error("❌ Database sync failed:", err));

export { sequelize, Member, Book, Issuance };
export default sequelize;
