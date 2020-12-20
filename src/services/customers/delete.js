const Customers = require('../../schemas/customers');

module.exports = async (req, res) => {

    if (!req.params.id)
        return res.status(400).json({ message: 'Need to customers id' })

    Customers.findByPk(req.params.id).then(customer => {
        if (customer) {
            customer.update({
                isActive: 0
            })

            return res.status(200).send({ msg: 'customer deleted'})
        }
    }).catch(err => {
        return res.status(500).json({ message: err.message })
    })
}

//ALTERNATIVE
// Customers.update({
//     isActive: 0
// }, {
//     where: {
//         id: req.params.id
//     }
// })
