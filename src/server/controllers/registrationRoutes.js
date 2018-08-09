const router = require('express').Router();
const db = require('../models');

router.post('/reg/host', (req, res) => {
  db.Host.create(req.body)
    .then((host) => {
      console.log(host);
      const { user_id, ...others } = host.dataValues;
      res.json(others);
    })
    .catch((err) => {
      console.log(err);
      res.status(401);
      res.json(err);
    });
});
// router.post('/reg/gethost', (req, res) => {
//   if ('token' in req.body) {
//     db.Token.findOne({ where: { t: req.body.token } })
//       .then((t) => {
//         db.User.findOne({ 
//           where: { id: t.user_id },
//           include: [{
//             model: 'Host'
//           }]
//            });
//       });
//   } else if ('id' in req.body) {

//   } else {
//     res.status(401).send();
//   }
// });

module.exports = router;
