const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../Config/dbConfig");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("Database Connection is Successful....");
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("./ProductModel")(sequelize, DataTypes);
db.admin = require("./AdminModel")(sequelize, DataTypes);
db.user = require("./UserModel")(sequelize, DataTypes);


module.exports = db;
