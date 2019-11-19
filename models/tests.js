'use strict';
module.exports = (sequelize, DataTypes) => {
    const tests = sequelize.define('tests', {
        name: DataTypes.STRING,
    }, {});
    tests.associate = function (models) {
        tests.hasMany(models.test_logs);
    };
    return tests;
};