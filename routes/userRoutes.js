import { Router } from "express";
import { getUsers } from "../controllers/getUser.controller.js";
import { putUser } from "../controllers/putUser.controller.js";
import cors from "cors";

const router = Router();
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: ["GET", "PUT"],
  allowedHeaders: ["Content-Type"],
};

router.get("/users", cors(corsOptions), getUsers);
//change to put
router.put("/editUser", cors(corsOptions), putUser);

export default router;
