import * as yup from 'yup';

export const clientKValidationSchema = yup.object().shape({
  date_of_birth: yup.date().required(),
  gender: yup.string().required(),
  insurance_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
