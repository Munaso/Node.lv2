'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1. Users 모델에서
      this.hasMany(models.Posts, { // 2. Posts 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'userId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'userId', // 4. Posts 모델의 userId 컬럼과 연결합니다.
      });

      // 1. Users 모델에서
      this.hasMany(models.Comments, { // 2. Comments 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'userId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'userId', // 4. Comments 모델의 userId 컬럼과 연결합니다.
      });

      // 1. Users 모델에서
      this.hasMany(models.Likes, { // 2. Likes 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'userId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'userId', // 4. Likes 모델의 userId 컬럼과 연결합니다.
      });
    }
  }
  Users.init({
    userId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nickname: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};