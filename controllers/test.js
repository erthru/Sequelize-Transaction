var models = require('../models/index');

module.exports = {
    all: async function (req, res, next) {
        try {
            const tests = await models.tests.findAll();

            res.json({
                error: 0,
                data: {
                    tests: tests
                }
            });
        } catch (err) {
            res.json({
                error: 1,
                data: {
                    error: err.toString()
                }
            });
        }
    },

    findOne: async function (req, res, next) {
        try {
            const tests = await models.tests.findByPk(req.params.id, {
                include: [
                    {
                        model: models.test_logs
                    }
                ]
            });

            res.json({
                error: 0,
                data: {
                    tests: tests
                }
            });
        } catch (err) {
            res.json({
                error: 1,
                data: {
                    error: err.toString()
                }
            });
        }
    },

    add: async function (req, res, next) {
        const transaction = await models.sequelize.transaction();

        try {
            const testBodyToCreate = {
                name: req.body.name
            };
            const test = await models.tests.create(testBodyToCreate, { transaction });

            const testLogBodyToCreate = {
                log: 'created',
                testId: test.id
            };
            const testLog = await models.test_logs.create(testLogBodyToCreate, { transaction });

            await transaction.commit();

            res.json({
                error: 0,
                data: {
                    test: test,
                    log: testLog
                }
            });
        } catch (err) {
            await transaction.rollback();

            res.json({
                error: 1,
                data: {
                    error: err.toString()
                }
            });
        }
    }
}