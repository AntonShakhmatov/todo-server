import User from './Model.js';

export default function userRegister(req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  
  newUser
    .save()
  
    .then(() => {
      res.status(200).json('user created');
    })
    .catch(() => {
      res.status(400).json('user not created');
    })
    .finally(() => {
      console.log('End');
    });
}
