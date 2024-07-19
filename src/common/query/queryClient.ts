export const CLIENT_QUERYS = {
  getClientById: `
    query($clientId: String!) {
        findByClientId(clientId: $clientId){
            address,
            blocked,
            cellPhone,
            country,
            customerSchema,
            fiscalCode1,
            fiscalCode2,
            name,
            paymentCondition,
            paymentMethods{
            typeCredit,
            creditLimit,
            creditUsed,
            amountAvailable
            }
            
        }
        }
    `,
};
