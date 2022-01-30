import {getCustomerById, deleteCustomerById, createCustomer} from "../../../src/customers"

export default async function handler(req, res) {
    const customerId = req.query.customerId;

    const method = req.method;
    
    let result;
    switch (method) {
        case 'GET':
            result = await getCustomerById(customerId);
            res.json(result);
            break;

        case 'DELETE':
            result = await deleteCustomerById(customerId);
            res.json({...result, message: `customer with customerId: ${customerId} deleted`});
            break;

        case 'POST':
            const {first_name, last_name} = req.body;
            result = await createCustomer(customerId, first_name, last_name);
            res.json({...result, message: `customer with customerId: ${customerId} created`});
            break;
            
        default:
          res.status(405).end(`Method ${method} Not Allowed`);
      }
}