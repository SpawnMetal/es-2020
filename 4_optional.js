const bill1 =
{
    bank:
    {
        name: 'My Bank',
        amount:
        {
            value: 1000,
            currency: 'RUB'
        }
    }
}

const bill2 =
{
    bank: {}
}

function getBillValueFrom(bill)
{
    // return bill.bank.amount.value //Так не получится, если объект пуст и до value мы дойти не можем
    // return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value) ? bill.bank.amount.value : undefined //Раньше написали бы так
    return bill?.bank?.amount?.value
}

console.log(getBillValueFrom(bill1))
console.log(getBillValueFrom(bill2))