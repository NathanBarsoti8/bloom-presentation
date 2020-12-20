const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            isActive: DataTypes.BOOLEAN
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.Phone, {
            foreignKey: 'customerId',
            as: 'phones'
        });
    }
}

module.exports = Customer;