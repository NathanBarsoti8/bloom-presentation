const Customers = require('../../schemas/customers');
const createPhone = require('../phones/create').create;
const Sequelize = require('sequelize');

module.exports = async (req, res) => {

    if (!req.body.name)
        return res.status(400).json({ message: 'Need to send name to create customer' })

    req.body.isActive = 1;

    Customers.create(req.body).then(customer => {
        if (customer) {
            if (req.body.phones && req.body.phones.length > 0) 
                createPhone(req.body.phones, customer.id);
            
            return res.status(201).json({ message: 'Customer created' })
        }
        else
            return res.status(400).json({ message: 'Some error ocurred when trying to create a customer' })
    }).catch(err => {
        return res.status(500).json({ message: err.message })
    })

}

//ALTERNATIVE
// Customers.create({
//     name: req.body.name,
//     isActive: req.body.isActive
// })