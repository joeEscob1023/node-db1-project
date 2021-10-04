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

const updateById = async (id, account) => {
  // update accounts set name="foo", budget=1000 where id= 1
  await db("accounts").where("id", id).update(account);
  return getById(id);
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
