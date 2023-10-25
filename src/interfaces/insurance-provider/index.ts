import { AppointmentInterface } from 'interfaces/appointment';
import { ClientKInterface } from 'interfaces/client-k';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceProviderInterface {
  id?: string;
  name: string;
  address: string;
  phone_number: string;
  email: string;
  contact_person: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  client_k?: ClientKInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    client_k?: number;
  };
}

export interface InsuranceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  contact_person?: string;
  user_id?: string;
}
