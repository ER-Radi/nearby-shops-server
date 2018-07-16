import express from 'express';

import * as authController from '../controllers/authentication';

//Route racine: /api/v1/auth

const router = express.Router();

// Route: /api/v1/auth/login
/*
    Accept: {email, password}
*/
router.post('/login',
    (req, res) => {
        res.status(200).json({
            success: true,
            user : {
                nom: 'er-radi',
                prenom: 'mohamed'
            }
        });
    } 
);


// Route: /api/v1/auth/signup
/*
    Accept: {email, password}
*/
router.post('/signup',
    
);


export default router;