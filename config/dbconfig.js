module.exports = {
    development: {
    HOST: '127.0.0.1',
    PORT: 3306,
    USER: 'root',
    PASSWORD: '',
    DB: "ecom_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
},
production: {
    HOST: 'sql10.freemyqlhosting.net',
    PORT: 3306,
    USER: 'sql10507879',
    PASSWORD: 'Yetm5EMXid',
    DB:'sql10507879',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
}