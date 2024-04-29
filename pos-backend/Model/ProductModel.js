const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {   
        Product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Product_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        Product_Qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Product_Price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        Product_Description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Product;
};
