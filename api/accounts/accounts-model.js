const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  //select * from accounts
  return db("accounts");
};

const getById = (id) => {
  //select * from accounts where id = 1;
  return db("accounts").where("id", id).first();
};

const create = async (account) => {
  // DO YOUR MAGIC
  //insets into accounts (name, budget) values ("joe", 1000);
  const [id] = await db("accounts").insert(account);

  return getById(id);
};

const updateById = (id, account) => {
  // DO YOUR MAGIC
};

const deleteById = (id) => {
  // delete from accounts where id = 1
  return db("accounts").where("id", id).del();
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
