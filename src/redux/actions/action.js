export const actionCounter = (operationType) => {
    if (operationType === 'INCREMENT')
     return { type: 'INCREMENT' };
    else if (operationType === 'DECREMENT') 
        return { type: 'DECREMENT' };
    return { type: 'RESET' };
};