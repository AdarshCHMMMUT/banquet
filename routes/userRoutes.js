import express from 'express'
import { getUserData, getvegMenu, getNonvegMenu, addvegmenu, addnonvegmenu, updatecategorynameinveg, updatecategorynameinnonveg } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/data', getUserData);
userRouter.get('/vegmenu', getvegMenu);
userRouter.get('/nonvegmenu', getNonvegMenu);
userRouter.post('/addvegmenu', addvegmenu);
userRouter.post('/addnonvegmenu', addnonvegmenu);
userRouter.post('/updatecategorynameinveg', updatecategorynameinveg);
userRouter.post('/updatenonvegcategoryname', updatecategorynameinnonveg);

export default userRouter;