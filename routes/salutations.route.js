import  express from "express";
import { salutationsAfficher, createSalutation } from "../controllers/salutations.controller.js";
const router = express.Router();

router.post("/", (req, res) => {
createSalutation(req, res);
});
router.get("/liste", salutationsAfficher);

router.get("/liste_pour_langue/:langue", salutationsAfficher);
export default router;