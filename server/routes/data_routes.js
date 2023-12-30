import express from 'express';

const router = express.Router();

import {getAllData,postCreateData,deleteData, updateData, getPostById} from "../controllers/data_controllers.js"

router.get("/", getAllData);

router.post("/", postCreateData);

router.put("/:id",updateData);

router.get("/get/:id",getPostById);

router.delete("/:id", deleteData);

export default router;