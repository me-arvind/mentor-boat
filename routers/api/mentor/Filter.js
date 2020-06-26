const express = require('express');
const config = require('config');
const router = express.Router();
const auth = require('../../../middleware/auth');
const { check, validationResult } = require('express-validator');
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require('normalize-url');
const checkObjectId = require('../../../middleware/CheckObjectId');

const MentorProfile = require('../../../models/Mentor/mentor')



/* @FiterApi route-end point /api/filter/:category
   @des Filter By Category
   @access Public
*/

router.get('/:category',async(req,res)=>{
        console.log(req.params.category)
        try {
            const categoryData = await MentorProfile.find({ category: req.params.category })

            if (!categoryData) return res.status(400).json({ msg: 'Category not found' });
            res.json(categoryData)
            
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });    
        }
        
        
    }
)


module.exports = router