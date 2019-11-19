'use strict';
module.exports = (sequelize, DataTypes) => {
    const testLogs = sequelize.define('test_logs', {
        log: DataTypes.STRING,
    }, {});
    testLogs.associate = function (models) {
        testLogs.belongsTo(models.tests);
    };
    return testLogs;
};