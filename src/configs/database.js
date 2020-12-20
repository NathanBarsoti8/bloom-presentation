module.exports = {
    "development": {
        "host": "localhost",
        "port": 6411,
        "username": "sa",
        "password": "Bloom_present",
        "database": "BloomPresentationDB",
        "dialect": 'mssql',
        "dialectOptions": {
            "options": {
                "trustServerCertificate": true,
                "useUTC": false,
                "dateFirst": 1,
                "encrypt": true //use this for Azure database encryption
            }
        },
        "define": {
            "freezeTableName": true,
            "timestamps": true,
            "underscored": false
        }
    }
}