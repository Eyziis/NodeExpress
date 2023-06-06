module.exports = {
    user: "root",
    password: "",
    database: "laravel",
    server: "DESKTOP-NCEPLER",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
};