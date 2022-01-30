const mysql = require("mysql2/promise");

const mysqlConfig = {
  host: "localhost",
  port: 3306,
  user: "your_user",
  database: "your_db",
  password: "your_pwd",
};
/**
 * 
 * TODO: IMPLEMENT FUNCTIONALITY TO CLOSE MYSQL CONNECTIONS IN ALL FUNCTIONS
 */
const getCustomers = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `your_table`"
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getCustomerById = async (customerId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM your_table WHERE id=${customerId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createCustomer = async (customerId, firstName, lastName) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO your_table (id, first_name, last_name) VALUES (${customerId},"${firstName}", "${lastName}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteCustomerById = async (customerId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM your_table WHERE id = ${customerId};`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const customers = {
  getCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomerById,
};

module.exports = customers;
