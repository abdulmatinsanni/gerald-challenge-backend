import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';

export type UserCreationAttributes = Optional<User, 'id' | 'email' | 'password'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public id: number;
  public fullName: string;
  public email: string;
  public phoneNumber: string;
  public password: string;
  public otp: string;
  public otpExpiresAt: string;
  public isVerified: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullName: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      otp: {
        allowNull: true,
        type: DataTypes.TEXT(),
      },
      otpExpiresAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      isVerified: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}
