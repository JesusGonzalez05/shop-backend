const { Model, DataTypes } = require('sequelize');

// require the sequilize configuration
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // defines the columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// exports module
module.exports = Category;