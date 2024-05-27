const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('User', {   
        User_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        User_FName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        User_LName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        User_Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        User_Security: {
            type: DataTypes.STRING,
            allowNull: true,
        },
       User_Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Admin;
};
