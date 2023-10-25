import * as yup from 'yup';

export const medicalStaffValidationSchema = yup.object().shape({
  specialization: yup.string().required(),
  experience: yup.number().integer().required(),
  qualification: yup.string().required(),
  clinic_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
