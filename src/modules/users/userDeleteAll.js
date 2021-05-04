import User from './Model.js';

export default function userDeleteAll(req, res) {
  const userId  = req.params.userId;
  User.deleteMany()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Delete all users error');
    });
}
