module.exports = {
    development: {
        dialect: 'mssql',
        host: 'localhost',
        port: 6411,
        username: 'sa',
        password: 'Bloom_present',
        database: 'SampleDB',
        define: {
            freezeTableName: true,
            timestamps: true,
            underscored: false
        }
    }
}