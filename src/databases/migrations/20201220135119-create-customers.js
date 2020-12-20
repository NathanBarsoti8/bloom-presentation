'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return Promise.all([

			await queryInterface.createTable('customers', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					allowNull: false,
					autoIncrement: true
				},
				name: {
					type: Sequelize.STRING(30),
					allowNull: false
				},
				isActive: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				},
				createdAt: {
					type: Sequelize.DATE,
					allowNull: false
				},
				updatedAt: {
					type: Sequelize.DATE,
					allowNull: false
				}
			}),

			queryInterface.createTable('phones', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					allowNull: false,
					autoIncrement: true
				},
				ddd: {
					type: Sequelize.STRING(3),
					allowNull: false
				},
				number: {
					type: Sequelize.STRING(9),
					allowNull: false
				},
				customerId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'customers',
						key: 'id'
					}
				},
				createdAt: {
					type: Sequelize.DATE,
					allowNull: false
				},
				updatedAt: {
					type: Sequelize.DATE,
					allowNull: false
				}
			})
		])
	},

	down: async (queryInterface, Sequelize) => {
		return Promise.all([
			await queryInterface.dropTable('phones'),
			await queryInterface.dropTable('customers')
		])
	}
};