import { DataTypes, Model } from "sequelize";

export default class Issuance extends Model {
  static init(sequelize) {
    return super.init(
      {
        issuance_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        issuance_member: { type: DataTypes.INTEGER, allowNull: false },
        book_id: { type: DataTypes.INTEGER, allowNull: false },
        issue_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        return_date: { type: DataTypes.DATE, allowNull: true },
      },
      {
        sequelize,
        modelName: "Issuance",
        tableName: "issuance",
        timestamps: false,
      }
    );
  }
}
