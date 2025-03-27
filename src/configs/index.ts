import * as process from "node:process";


export default () => ({
    port: process.env.PORT,

    // dbport: process.env.DB_PORT,
    // dbuser: process.env.DB_USER,
    // dbhost: process.env.DB_HOST,
    // dbpass: process.env.DB_PASS,
    // dbname: process.env.DB_NAME,
    db: ({
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        port: process.env.DB_PORT
    })
});