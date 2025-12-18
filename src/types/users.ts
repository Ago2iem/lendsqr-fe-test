export interface DummyUser {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    educationAndEmployment: {
        levelOfEducation: string;
        employmentStatus: string;
        sectorOfEmployment: string;
        durationOfEmployment: string;
        officeEmail: string;
        monthlyIncome: string;
        loanRepayment: string;
    };
    socials: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    guarantor: {
        fullName: string;
        phoneNumber: string;
        address: string;
    };
}

export interface DummyUsers {
    id: string;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
    status: string;
}
