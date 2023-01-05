import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

const adapter = new JSONFileSync("./db.json");
const db = new LowSync(adapter);

export const putUser = (req, res, next) => {
    
  db.read();
  const { id, age, eyeColor, company, phone, address } = req.body;

  let users = db
    .get("users")
    .find({ id })
    .assign({ age, eyeColor, company, phone, address })
    .write();

  const user = db.get("users").find({ id }).value();

  return res.status(202).send({
    error: false,
    user,
  });
};
