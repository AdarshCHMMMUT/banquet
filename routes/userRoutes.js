import express from 'express'
import { getUserData, getvegMenu, getNonvegMenu, addvegmenu, addnonvegmenu, updatecategorynameinveg, updatecategorynameinnonveg, bookHall, deletevegcategory } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/data', getUserData);
userRouter.get('/vegmenu', getvegMenu);
userRouter.get('/nonvegmenu', getNonvegMenu);
userRouter.post('/addvegmenu', addvegmenu);
userRouter.post('/addnonvegmenu', addnonvegmenu);
userRouter.post('/updatecategorynameinveg', updatecategorynameinveg);
userRouter.delete('/deletevegcategory',deletevegcategory);
userRouter.post('/updatenonvegcategoryname', updatecategorynameinnonveg);
userRouter.post('/bookhall',bookHall);  
export default userRouter;