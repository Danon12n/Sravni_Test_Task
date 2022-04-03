export interface periodType {
    rate: {
        from: number,
        to: number,
    },
    termUnit: string,
    term: {
        from: number,
        to: number,
    },
    isFloatingRate: boolean,
}

export interface rateType {
    periods: periodType[], 
    currency: string,
    creditAmount: {
        from: number,
        to?: number,
    },
    initialAmount: {
        from: number,
        to?: number,
    }
}

export interface customerRequirementsType {
    documents: number,
    age: number,
    manAgeAtRepayment: number,
    femaleAgeAtRepayment: number,
    lastExperience: number,
    fullExperience: number,
    salary: number,
}

export interface organizationType {
    name: string,
    license: string,
    logo: string,    
}

export interface offerType {
    name: string,
    alias: string,
    organization: organizationType,
    customerRequirements: customerRequirementsType,
    rate:rateType,
}

