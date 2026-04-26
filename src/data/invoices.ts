// import { Invoice } from "@/types/invoice";

// export const invoices: Invoice[] = [
//   {
//     id: "RT3080",
//     clientName: "Aliko Dangote",
//     clientEmail: "aliko@dangote.com",

//     date: "2026-04-01",

//     createdAt: "2026-04-01",
//     paymentDue: "2026-04-15",
//     description: "Sugar supply contract",

//     senderAddress: {
//       street: "23 Marina Road",
//       city: "Lagos",
//       postCode: "100001",
//       country: "Nigeria",
//     },

//     clientAddress: {
//       street: "Dangote HQ",
//       city: "Lagos",
//       postCode: "100001",
//       country: "Nigeria",
//     },

//     total: 1800,
//     status: "paid",

//     items: [{ id: "1", name: "Sugar", quantity: 2, price: 900 }],
//   },
// ];

import { Invoice } from "@/types/invoice";

export const invoices: Invoice[] = [
  {
    id: "RT3080",
    clientName: "Aliko Dangote",
    clientEmail: "aliko@dangote.com",
    date: "2026-04-01",
    createdAt: "2026-04-01",
    paymentDue: "2026-04-15",
    description: "Sugar supply contract",
    senderAddress: {
      street: "23 Marina Road",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    clientAddress: {
      street: "Dangote HQ",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    total: 1800,
    status: "paid",
    items: [{ id: "1", name: "Sugar", quantity: 2, price: 900 }],
  },
  {
    id: "RT3081",
    clientName: "Mike Adenuga",
    clientEmail: "mike.adenuga@globacom.com",
    date: "2026-03-15",
    createdAt: "2026-03-15",
    paymentDue: "2026-04-05",
    description: "Telecom infrastructure and data services",
    senderAddress: {
      street: "23 Marina Road",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    clientAddress: {
      street: "Glo House, Mike Adenuga Avenue",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    total: 4250,
    status: "pending",
    items: [
      { id: "1", name: "Fiber Optic Installation", quantity: 1, price: 2800 },
      {
        id: "2",
        name: "Annual Maintenance Contract",
        quantity: 1,
        price: 1450,
      },
    ],
  },
  {
    id: "RT3082",
    clientName: "Abdulsamad Rabiu",
    clientEmail: "abdulsamad@buagroup.com",
    date: "2026-03-20",
    createdAt: "2026-03-20",
    paymentDue: "2026-04-10",
    description: "Cement and sugar supply for construction projects",
    senderAddress: {
      street: "23 Marina Road",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    clientAddress: {
      street: "BUA Tower",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    total: 3250,
    status: "paid",
    items: [
      { id: "1", name: "Premium Cement", quantity: 500, price: 5.5 },
      { id: "2", name: "Refined Sugar", quantity: 200, price: 2.5 },
    ],
  },
  {
    id: "RT3083",
    clientName: "Femi Otedola",
    clientEmail: "femi@gerégupower.com",
    date: "2026-04-05",
    createdAt: "2026-04-05",
    paymentDue: "2026-04-20",
    description: "Power sector equipment and consulting services",
    senderAddress: {
      street: "23 Marina Road",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    clientAddress: {
      street: "Geregu Power Plc HQ",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    total: 2850,
    status: "draft",
    items: [
      {
        id: "1",
        name: "Power Generation Consultancy",
        quantity: 1,
        price: 2850,
      },
    ],
  },
  {
    id: "RT3084",
    clientName: "Folorunsho Alakija",
    clientEmail: "folorunsho@famfa.com",
    date: "2026-03-10",
    createdAt: "2026-03-10",
    paymentDue: "2026-04-01",
    description: "Oil exploration support services and logistics",
    senderAddress: {
      street: "23 Marina Road",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    clientAddress: {
      street: "Famfa Oil Headquarters",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    total: 5200,
    status: "paid",
    items: [
      { id: "1", name: "Offshore Logistics Support", quantity: 1, price: 3500 },
      { id: "2", name: "Technical Consultancy", quantity: 1, price: 1700 },
    ],
  },
  {
    id: "RT3085",
    clientName: "Adebayo Ogunlesi",
    clientEmail: "adebayo@globalinfrastructure.com",
    date: "2026-03-25",
    createdAt: "2026-03-25",
    paymentDue: "2026-04-15",
    description: "Infrastructure investment advisory services",
    senderAddress: {
      street: "23 Marina Road",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    clientAddress: {
      street: "Global Infrastructure Partners Office",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    total: 1975,
    status: "pending",
    items: [
      { id: "1", name: "Airport & Port Advisory", quantity: 1, price: 1975 },
    ],
  },
  {
    id: "RT3086",
    clientName: "Jim Ovia",
    clientEmail: "jim@zenithbank.com",
    date: "2026-04-08",
    createdAt: "2026-04-08",
    paymentDue: "2026-04-25",
    description: "Banking technology upgrade and digital services",
    senderAddress: {
      street: "23 Marina Road",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    clientAddress: {
      street: "Zenith Bank Headquarters",
      city: "Lagos",
      postCode: "100001",
      country: "Nigeria",
    },
    total: 1680,
    status: "paid",
    items: [
      {
        id: "1",
        name: "Core Banking System Upgrade",
        quantity: 1,
        price: 1200,
      },
      { id: "2", name: "Cybersecurity Module", quantity: 1, price: 480 },
    ],
  },
];
