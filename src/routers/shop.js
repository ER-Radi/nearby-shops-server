import express from 'express';

import * as shopController from '../controllers/shop';

//Route racine: /api/v1/shop

const router = express.Router();



// // Route: /api/v1/auth/login
// /*
//     Accept: {email, password}
// */
// router.post('/list',
//     (req, res) => {
//         res.status(200).json({
//             success: true,
            
//         });
//     } 
// );





export default router;