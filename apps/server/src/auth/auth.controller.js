import express from 'express';
import { asyncHandler } from '@lib/common';
import { createUser, loginUser } from './auth.service';
import generateJwtToken from './generate-jwt-token';

const authController = express.Router();

authController.post(
  '/register',
  asyncHandler(async (req, res) => {

    const data = req.body;
    if(!data.email || !data.password  || !data.name) {
      return res.status(400).json({ error: 'Email,name and password are required' });
    }
    // console.log(data);
    const user = await createUser(data);
    const jwt = generateJwtToken(user);
    return res.json({ user, jwt });
  }),
);

authController.post(
  '/login',
  asyncHandler(async (req, res) => {
    const data = req.body;
    const user = await loginUser(data);
    const jwt = generateJwtToken(user);
    return res.json({ user, jwt });
  }),
);

export default authController;
