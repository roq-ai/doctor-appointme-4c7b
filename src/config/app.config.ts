interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Client'],
  tenantRoles: ['System Administrator', 'Medical Staff', 'Receptionist', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'View appointment details',
    'Book an appointment',
    'View clinic details',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage clinics',
    'Manage insurance providers',
    'Manage appointments',
    'Manage medical staff',
    'Manage clients',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f9536341-58ee-4715-bf88-9d22ea27d768',
};
