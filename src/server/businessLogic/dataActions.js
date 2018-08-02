const db = require('../models');

// TODO: dont pull everything from the db
module.exports.getHosts = () => (
  new Promise(resolve => (
    db.Host.findAll({
      attributes: [
        'id',
        'total_store_length',
        'total_store_width',
        's_address_1',
        's_city',
        's_state',
        's_zip',
        's_address_2',
        'rental_rate',
      ]
    })
      .then(Hosts => resolve(Hosts))
      .catch((err) => { throw err; })
  ))
);

module.exports.getPopups = () => (
  new Promise(resolve => (
    db.Popup.findAll()
      .then(Popups => resolve(Popups))
      .catch((err) => { throw err; })
  ))
);
