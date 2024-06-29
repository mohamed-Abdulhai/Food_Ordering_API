import { Router } from "express";
import {deleteAllUsers,deleteUser,getAllUsers,getUser,updateUser  } from "./user.controller.js"
import { auth, isAdmin, isHeUser } from "../auth/auth.middleware.js";

const router = Router()

router.route('/')
    .get(auth,isAdmin,getAllUsers)
    .delete(auth,isAdmin,deleteAllUsers);

router.route('/:id')
    .get(auth,isHeUser,getUser)
    .put(auth,isHeUser,updateUser)
    .delete(auth,isHeUser,deleteUser);


export default router