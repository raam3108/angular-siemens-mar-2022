export class EmiCalculatorService{
    calculate(amount:number,tenure:number,interest:number):[number,number,number]{
        var simpleInterest = (amount * tenure * interest)/100;
        var totalAmount = amount + interest;
        var monthlyEmi = <number>(totalAmount / tenure)

    

        return [simpleInterest,totalAmount,monthlyEmi]
    }
}