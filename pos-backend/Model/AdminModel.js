const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admins', {   
        Admin_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Admin_Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Admin_Username: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Admin_Security: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Admin_Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Admin;
};
