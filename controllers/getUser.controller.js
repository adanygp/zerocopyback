import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

const adapter = new JSONFileSync("./db.json");
const db = new LowSync(adapter);

export const getUsers = (req, res, next )=> {
    db.read()
    return res.send(db.data.users);
};
