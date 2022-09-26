class complex {
	private value1: number = 0
	private value2: number = 0
	

	constructor(value1: number, value2: number){
		this.value1 = value1;
		this.value2 = value2;
	}

	addition(){
		return this.value1 + this.value2
	}
	subtraction(){
		return this.value1 - this.value2
	}
	multiplication(){
		return this.value1 * this.value2
	}
    division(){
		return this.value1 / this.value2
	}
};

const operation1 =  new complex (5,5)
console.log(operation1.addition());