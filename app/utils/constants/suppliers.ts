export type Supplier = {
  id: number;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  city:string;
  state:string;
  zipCode:string
  country:string;
  website: string;
  paymentTerms: string;
  notes: string;
  category: "Electronics" | "Furniture" | "Health" | "Beauty";
  status: "active" | "inactive";
};

// export const suppliers: Supplier[] = [
//   {
//     id: 1,
//     name: "TechWorld Distributors",
//     contact: "Sarah Johnson",
//     email: "sarah@techworld.com",
//     phone: "(555) 123-4567",
//     address: "123 Tech Lane, San Francisco, CA",
//     category: "Electronics",
//     status: "active",
//   },
//   {
//     id: 2,
//     name: "Furniture Emporium",
//     contact: "Michael Chen",
//     email: "mchen@furnitureemp.com",
//     phone: "(555) 234-5678",
//     address: "456 Wood Ave, Portland, OR",
//     category: "Furniture",
//     status: "active",
//   },
//   {
//     id: 3,
//     name: "Health & Wellness Co.",
//     contact: "Jessica Miller",
//     email: "jmiller@healthwell.com",
//     phone: "(555) 345-6789",
//     address: "789 Vitamin St, Austin, TX",
//     category: "Health",
//     status: "active",
//   },
//   {
//     id: 4,
//     name: "Beauty Essentials Inc.",
//     contact: "Robert Taylor",
//     email: "rtaylor@beautyess.com",
//     phone: "(555) 456-7890",
//     address: "101 Glow Road, Los Angeles, CA",
//     category: "Beauty",
//     status: "inactive",
//   },
//   {
//     id: 5,
//     name: "Global Electronics",
//     contact: "Amanda Park",
//     email: "apark@globalelec.com",
//     phone: "(555) 567-8901",
//     address: "202 Circuit Drive, Seattle, WA",
//     category: "Electronics",
//     status: "active",
//   },
//   {
//     id: 6,
//     name: "Modern Home Supplies",
//     contact: "David Wilson",
//     email: "dwilson@modernhome.com",
//     phone: "(555) 678-9012",
//     address: "303 Decor Blvd, Chicago, IL",
//     category: "Furniture",
//     status: "active",
//   },
// ];
