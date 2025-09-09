import express from "express";
import { Router } from "express";
import { create, deleteEmail, deleteId, read, readuserName, updateEmail, updateId } from "../controllers/user_controllers.js";

let userRouter=express(Router());

userRouter.post("/create",create)

userRouter.get("/read",read)

userRouter.get("/read/:username",readuserName)

userRouter.use("/update/:id",updateId)

userRouter.use("/update",updateEmail)

userRouter.use("/delete/:id",deleteId)

userRouter.use("/delete",deleteEmail)

export default userRouter