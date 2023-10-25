import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  status: yup.string().required(),
  patient_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
  clinic_id: yup.string().nullable().required(),
  insurance_id: yup.string().nullable().required(),
});
