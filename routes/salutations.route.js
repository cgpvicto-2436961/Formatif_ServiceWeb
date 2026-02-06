import  express from "express";
import { salutationsAfficher, salutationsRng, createSalutation  } from "../controllers/salutations.controller.js";
const router = express.Router();

router.post("/", (req, res) => {
createSalutation(req, res);
});
router.get("/liste", salutationsAfficher);

router.get("/hasard", salutationsRng);

export default router;