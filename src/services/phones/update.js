const Phones = require('../../schemas/phones')

async function update(phones, customerId) {

    if (!customerId)
        return "need to send customerId"

    await Phones.destroy({
        where: {
            customerId: customerId
        }
    })

    for (const phone of phones) {
        Phones.create({
            ddd: phone.ddd,
            number: phone.number,
            customerId: customerId
        })
    }

}

module.exports = {
    update
}