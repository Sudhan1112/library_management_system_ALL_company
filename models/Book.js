import { DataTypes, Model } from "sequelize";

export default class Book extends Model {
  static init(sequelize) {
    return super.init(
      {
        book_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: DataTypes.STRING(255), allowNull: false },
        author: { type: DataTypes.STRING(255), allowNull: false },
        available_copies: { type: DataTypes.INTEGER, defaultValue: 1 },
      },
      {
        sequelize,
        modelName: "Book",
        tableName: "book",
        timestamps: false,
      }
    );
  }
}
