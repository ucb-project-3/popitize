import Legalize from 'legalize';

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
    .match(/(@|#|$|%|!)/)
    .match(/[a-z]/)
    .match(/[A-Z]/),
  age_range: Legalize
    .number()
    .integer(),
  credit_rating: Legalize
    .number()
    .integer(),
  address_1: Legalize
    .string()
    .minLength(1)
    .maxLength(48),
  city: Legalize
    .string()
    // .alphanum()
    .maxLength(48),
  state: Legalize
    .string()
    .alphanum()
    .maxLength(2)
    .minLength(2),
  address_2: Legalize
    .string()
    .optional(),
  zip: Legalize
    .number()
    .integer()
    // .max(4)
    // .min(6)
};

export const newUserValidator = obj => (
  Legalize.validate(
    obj,
    newUserSchema,
    {
      presence: 'required',
      strict: false,
    }
  )
);

const existingUserSchema = {
  email: Legalize
    .string()
    .minLength(6)
    .maxLength(120)
    .match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/),
  password: Legalize
    .string()
    .minLength(6)
    .maxLength(50)
    .match(/(@|#|$|%|!)/)
    .match(/[a-z]/)
    .match(/[A-Z]/),
};
export const existingUserValidator = obj => (
  Legalize.validate(
    obj,
    existingUserSchema,
    {
      presence: 'required',
      strict: false,
    }
  )
);
