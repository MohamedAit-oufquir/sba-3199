import { Router } from 'express';
import User from '../model/user.js'
import review from '../model/review.js';
const reviewRouter = Router()


reviewRouter.post('/', async (req, res, next) => {
    try {
        const Commenter = await review.create(req.body)
        // console.log(User)
        res.status(200).json(Commenter)
    } catch (error) {
        error.status = 400
        next(error)
    }
    });
//get user:

reviewRouter.get('/', async (req, res, next) => {
   try {
    res.json(await review.find())
   } catch (error) {
    error.status = 404
    next(error)
   }
});
//patch:
reviewRouter.patch('/:id', async (req, res) => {
    try{
    res.json(await review.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        error.status = 404
    }
});


//delete
reviewRouter.delete('/:id', async (req, res) => {
    try {
        const result = await review.deleteOne({_id: req.params.id});
        if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'Not found' });
            }
        console.log(req.params.id)
        res.json('successfully deleted!')
    } catch (error) {
    }
});


export default reviewRouter;