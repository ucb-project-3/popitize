import Legalize from 'legalize';
import axios from 'axios';

const newUserSchema = {
  email: Legalize
    .string()
    .minLength(6)
    .maxLength(120)
    .match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/),
  first_name: Legalize
    .string()
    .minLength(1)
    .maxLength(50)
    .alphanum()
    .invalid(/[0-9]/),
  last_name: Legalize
    .string()
    .minLength(1)
    .maxLength(50)
    .alphanum()
    .invalid(/[0-9]/),
  password: Legalize
    .string()
    .minLength(6)
    .maxLength(50)
    .match(/?=.*[@#$%]/),
  age_range: Legalize
    .string(),
  credit_rating: Legalize
    .number()
    .integer(),
  address_1: Legalize
    .string()
    .alphanum()
    .minLength(1)
    .maxLength(48),
  city: Legalize
    .string()
    .maxLength(48),
  state: Legalize
    .string()
    .maxLength(2)
    .minLength(2),
  zip: Legalize
    .number().integer().maxLength(5).minLength(5)
};

export const newUser = user => (dispatch) => {

};
