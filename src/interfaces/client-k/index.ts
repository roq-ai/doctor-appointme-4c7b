import { AppointmentInterface } from 'interfaces/appointment';
import { InsuranceProviderInterface } from 'interfaces/insurance-provider';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClientKInterface {
  id?: string;
  date_of_birth: any;
  gender: string;
  insurance_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  insurance_provider?: InsuranceProviderInterface;
  user?: UserInterface;
  _count?: {
    appointment?: number;
  };
}

export interface ClientKGetQueryInterface extends GetQueryInterface {
  id?: string;
  gender?: string;
  insurance_id?: string;
  user_id?: string;
}
