import { AppointmentInterface } from 'interfaces/appointment';
import { ClinicInterface } from 'interfaces/clinic';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicalStaffInterface {
  id?: string;
  specialization: string;
  experience: number;
  qualification: string;
  clinic_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  clinic?: ClinicInterface;
  user?: UserInterface;
  _count?: {
    appointment?: number;
  };
}

export interface MedicalStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  specialization?: string;
  qualification?: string;
  clinic_id?: string;
  user_id?: string;
}
