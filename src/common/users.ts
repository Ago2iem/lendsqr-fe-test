import { DummyUser, DummyUsers } from "../types/users";

export const staticUser: DummyUser = {
    fullName: "Grace Effiom",
    phoneNumber: "07060780922",
    email: "grace@lendsqr.com",
    bvn: "07060780922",
    gender: "Female",
    educationAndEmployment: {
        levelOfEducation: "B.Sc",
        employmentStatus: "Employed",
        sectorOfEmployment: "FinTech",
        durationOfEmployment: "2 years",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "₦200,000.00",
        loanRepayment: "40,000"
    },
    socials: {
        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom"
    },
    guarantor: {
        fullName: "Debby Ogana",
        phoneNumber: "07060780922",
        address: "24, Herbert Macaulay Way, Lagos"
    }
}

export const staticUsers: DummyUsers[] = [
    {
        id: '1',
        organization: 'Lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phoneNumber: '08078903721',
        createdAt: 'May 15, 2020 10:00 AM',
        status: 'Active'
    },
    {
        id: '2',
        organization: 'Irorun',
        username: 'Debby Ogana',
        email: 'debby2@irorun.com',
        phoneNumber: '08160780928',
        createdAt: 'Apr 30, 2020 10:00 AM',
        status: 'Pending'
    },
    {
        id: '3',
        organization: 'Lendsqr',
        username: 'Grace Effiom',
        email: 'grace@lendsqr.com',
        phoneNumber: '07060780922',
        createdAt: 'Apr 30, 2020 10:00 AM',
        status: 'Blacklisted'
    },
    {
        id: '4',
        organization: 'Lendstar',
        username: 'Tosin Dokunmu',
        email: 'tosin@lendstar.com',
        phoneNumber: '07003309226',
        createdAt: 'Apr 10, 2020 10:00 AM',
        status: 'Inactive'
    },
    {
        id: '5',
        organization: 'Lendsqr',
        username: 'Grace Effiom',
        email: 'grace@lendsqr.com',
        phoneNumber: '07060780922',
        createdAt: 'Apr 30, 2020 10:00 AM',
        status: 'Active'
    },
    {
        id: '6',
        organization: 'Lendsqr',
        username: 'Tosin Dokunmu',
        email: 'tosin@lendsqr.com',
        phoneNumber: '08060780900',
        createdAt: 'Apr 10, 2020 10:00 AM',
        status: 'Active'
    },
    {
        id: '7',
        organization: 'Irorun',
        username: 'Grace Effiom',
        email: 'grace@irorun.com',
        phoneNumber: '07060780922',
        createdAt: 'Apr 30, 2020 10:00 AM',
        status: 'Pending'
    },
    {
        id: '8',
        organization: 'Lendsqr',
        username: 'Tosin Dokunmu',
        email: 'tosin@lendsqr.com',
        phoneNumber: '08060780900',
        createdAt: 'Apr 10, 2020 10:00 AM',
        status: 'Inactive'
    },
    {
        id: '9',
        organization: 'Lendstar',
        username: 'Grace Effiom',
        email: 'grace@lendstar.com',
        phoneNumber: '07060780922',
        createdAt: 'Apr 30, 2020 10:00 AM',
        status: 'Blacklisted'
    }
];