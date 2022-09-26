class account {
	amount: number = 0
	holderName: string = ""
	creationDate: Date = new Date()

	constructor(amount: number, holderName: string, creationDate: Date){
		this.amount = amount;
		this.holderName = holderName;
		this.creationDate = creationDate;
	}

	entry(){
		return "Su ingreso es de " + this.amount
	}
	refund(){
		return "Su reintrego es de " + this.amount
	}
	transfer(){
		return "Realizo una transferencias por " + this.amount
	}
};

const client1 = new account(50000, "Juan Laverde", new Date());
console.log( client1.entry() );