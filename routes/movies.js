import { Router } from 'express';
import movie from '../model/movie.js'
const movieRouter = Router()

movieRouter.post('/', async (req, res, next) => {
    try {
        const Cinema = await movie.create(req.body)
        // console.log(User)
        res.status(200).json(Cinema)
    } catch (error) {
        error.status = 400
        next(error)
    }
    });
//get user:

movieRouter.get('/', async (req, res, next) => {
   try {
    res.json(await movie.find())
   } catch (error) {
    error.status = 404
    next(error)
   }
});
//patch:
movieRouter.patch('/:id', async (req, res) => {
    try{
    res.json(await movie.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        error.status = 404
    }
});


//delete
movieRouter.delete('/:id', async (req, res) => {
    try {
        const result = await movie.deleteOne({_id: req.params.id});
        if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'Not found' });
            }
        console.log(req.params.id)
        res.json('successfully deleted!')
    } catch (error) {
    }
});


    export default movieRouter;