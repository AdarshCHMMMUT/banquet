import express from 'express'
import { getUserData, getvegMenu, getNonvegMenu, addvegmenu, addnonvegmenu, updatecategorynameinveg, updatecategorynameinnonveg, bookHall, deletevegcategory, editvegmenuitemnames, editnonvegmenuitemnames,  deletenonvegcategory, deletevegmenuitem, deletenonvegmenuitem, getlimits, updatelimits} from '../controller/userController.js';
const userRouter = express.Router();
userRouter.get('/data', getUserData);
userRouter.get('/vegmenu', getvegMenu);
userRouter.get('/nonvegmenu', getNonvegMenu);
userRouter.post('/addvegmenu', addvegmenu);
userRouter.post('/addnonvegmenu', addnonvegmenu);
userRouter.post('/editvegmenuitemname',editvegmenuitemnames );
userRouter.post('/deletevegmenuitem', deletevegmenuitem);
userRouter.post('/editnonvegmenuitemname', editnonvegmenuitemnames);
userRouter.post('/deletenonvegmenuitemname', deletenonvegmenuitem);
userRouter.post('/updatecategorynameinveg', updatecategorynameinveg);
userRouter.post('/updatecategorynameinveg', updatecategorynameinveg);
userRouter.delete('/deletevegcategory',deletevegcategory);
userRouter.delete('/deletenonvegcategory',deletenonvegcategory);
userRouter.post('/updatenonvegcategoryname', updatecategorynameinnonveg);
userRouter.post('/bookhall',bookHall);  
userRouter.get('/getlimits',getlimits);
userRouter.post('/updatelimits',updatelimits);

export default userRouter;