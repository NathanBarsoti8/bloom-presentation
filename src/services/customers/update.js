const Customers = require('../../schemas/customers');

module.exports = async (req, res) => {

    if (!req.params.id)
        return res.status(400).json({ message: 'Need to send id' })

    const customer = await Customers.findByPk(req.params.id);

    if (!customer)
        return res.status(404).json({ message: 'customer not found' })

    try {
        customer.update(req.body)

        return res.status(200).send({ msg: 'customer updated'})
    } 
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
