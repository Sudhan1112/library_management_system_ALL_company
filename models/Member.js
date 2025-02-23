import { DataTypes, Model } from "sequelize";

export default class Member extends Model {
  static init(sequelize) {
    return super.init(
      {
        mem_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING(100), allowNull: false },
        email: { type: DataTypes.STRING(100), unique: true, allowNull: false },
        phone: { type: DataTypes.STRING(15) },
        address: { type: DataTypes.TEXT },
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      },
      {
        sequelize,
        modelName: "Member",
        tableName: "member",
        timestamps: false,
      }
    );
  }
}
