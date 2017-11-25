const cookieParser = require('cookie-parser');
const session = require('express-session');

const MSSQLstore = require('connect-mssql')(session);
const mssql = require('mssql');

module.exports = {

    createStore: () => {

        var config = {
            user: 'test',
            password: '123',
            server: 'localhost',
            port: '5432',
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000
            }
        }
        return new MSSQLstore(config);
    }
}