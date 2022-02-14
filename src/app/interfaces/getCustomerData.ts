export interface getCustomerData {
  firstName: string;
  lastName: string;
  contactPhone: number;
  company: string;
  customerNumber: number;
  city: string;
  street: string;
  streetNumber: string;
  zipCode: number;
  id: number;
  contactEmail: string;
  active: boolean;
  addresses: [
    {
      street: string;
      streetNumber: string;
      zipCode: number;
      city: string;
    }
  ];
}
