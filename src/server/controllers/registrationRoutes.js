const router = require('express').Router();
const db = require('../models');

router.post('/reg/popup', (req, res) => {
  db.Popup.create({ ...req.body })
    .then(({ dataValues }) => {
      console.log(dataValues);
      res.status(200).send({});
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send({});
    });
});

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
router.post('/reg/renter', (req, res) => {
  db.Renter.create(req.body)
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

router.post('/reg/gethostname', (req, res) => {
  if (req.body.id) {
    db.Host.findOne({
      where: { id: req.body.id },
      attributes: ['user_id']
    }).then((Host) => {
      console.log('host', Host);
      db.User.findOne({
        where: { id: Host.dataValues.user_id },
        attributes: ['first_name', 'last_name'],
      })
        .then((User) => {
          res.json({ ...User.dataValues });
        });
    })
      .catch(err => console.log(err));
  }
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
