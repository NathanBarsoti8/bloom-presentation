const Phones = require('../../schemas/phones')

async function create(phones, customerId) {

    if (!customerId) 
        return "need to send customerId"
    
    for (const phone of phones) {
        Phones.create({
            ddd: phone.ddd,
            number: phone.number,
            customerId: customerId
        })
    }

}

module.exports = {
    create
}