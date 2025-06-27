import { Router } from 'express';
import User from '../model/user.js'
const dataRouter = Router()

dataRouter.post('/', async (req, res, next) => {
    try {
        const User = await User.create(req.body)
        // console.log(User)
        res.status(200).json(User)
    } catch (error) {
        error.status = 400
        next(error)
    }
    });
//get user:

dataRouter.get('/', async (req, res, next) => {
   try {
    res.json(await User.find())
   } catch (error) {
    error.status = 404
    next(error)
   }
});
//patch:
dataRouter.patch('/:id', async (req, res) => {
    try{
    res.json(await User.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        error.status = 404
    }
});


//delete
dataRouter.delete('/:id', async (req, res) => {
    try {
        const result = await User.deleteOne({_id: req.params.id});
        if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'Not found' });
            }
        // console.log(req.params.id)
        res.json('successfully deleted!')
    } catch (error) {
    }
});


export default dataRouter;





