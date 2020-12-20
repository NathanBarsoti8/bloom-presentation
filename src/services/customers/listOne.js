const Customers = require('../../schemas/customers');
const Phones = require('../../schemas/phones');

module.exports = async (req, res) => {

    if (!req.params.id)
        return res.status(400).json({ message: 'Need to customers id' })

    Customers.findByPk(req.params.id, {
        include: [{
            model: Phones,
            as: 'phones',
            attributes: ['id', 'ddd', 'number', 'customerId'],
            required: false
        }]
    }).then(customer => {
        if (!customer)
            return res.status(404).json({ message: 'customer not found' })

        return res.status(200).json(customer)
    }).catch(error => {
        return res.status(500).json({ msg: error.message });
    });

}