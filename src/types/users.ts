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
export interface User {
    id: string;
    bvn: string;
    email: string;
    gender: 'Male' | 'Female' | string;
    status: 'Blacklisted' | 'Active' | 'Inactive' | string;

    socials: Socials;

    children: number;
    fullName: string;
    username: string;

    createdAt: string;
    updatedAt: string;
    dateJoined: string;

    phoneNumber: string;
    emailAddress: string;

    organization: string;
    maritalStatus: 'Single' | 'Married' | 'Widowed' | 'Divorced' | string;
    typeOfResidence: string;

    guarantor: Guarantor;
    educationAndEmployment: EducationAndEmployment;
}

export interface Socials {
    twitter: string;
    facebook: string;
    instagram: string;
}

export interface Guarantor {
    address: string;
    fullName: string;
    phoneNumber: string;
    relationship: string;
}

export interface EducationAndEmployment {
    officeEmail: string;
    loanRepayment: string;
    monthlyIncome: string;
    employmentStatus: string;
    levelOfEducation: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
}
