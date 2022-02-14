export interface Customer {
  email: string;
  password: string;
  customerDetails: {
    firstName: string;
    company: string;
    contactPhone: string;
    contactEmail: string;
  };
  addresses: [
    {
      contactName: string;
      companyName: string;
      street: string;
      city: string;
    }
  ];
}
