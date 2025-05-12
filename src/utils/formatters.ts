export const formatCPF = (cpf: string) => {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
};

export const formatPhone = (phone: string) => {
    return phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
};

export const formatDate = (date: string) => {
    const onlyDate = date.includes('T') ? date.split('T')[0] : date;
    const [year, month, day] = onlyDate.split('-');
    return `${day}/${month}/${year}`;
};
