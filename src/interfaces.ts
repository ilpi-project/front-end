export interface Member {
    _id: string;
    name: string;
    cpf: string;
    phone: string;
    birthdate: string;
    healthInsurance: string;
    medicalConditions: string[];
}

export interface User {
    _id: string;
    name: string;
    cpf: string;
    email: string;
    phone: string;
    birthdate: string;
}

export interface Event {
    _id: string;
    name: string;
    date: string;
}
