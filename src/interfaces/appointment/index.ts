import { ClientKInterface } from 'interfaces/client-k';
import { MedicalStaffInterface } from 'interfaces/medical-staff';
import { ClinicInterface } from 'interfaces/clinic';
import { InsuranceProviderInterface } from 'interfaces/insurance-provider';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  patient_id: string;
  doctor_id: string;
  clinic_id: string;
  insurance_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  client_k?: ClientKInterface;
  medical_staff?: MedicalStaffInterface;
  clinic?: ClinicInterface;
  insurance_provider?: InsuranceProviderInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
  clinic_id?: string;
  insurance_id?: string;
  status?: string;
}
