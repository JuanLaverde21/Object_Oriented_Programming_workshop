class counter {
	initialNumber: number = 0
	finalNumber: number= 0
	

	constructor(initialNumber: number, finalNumber: number){
		this.initialNumber = initialNumber;
		this.finalNumber = finalNumber;
	}

	increase(){
		while(this.initialNumber <= this.finalNumber){
             	alert("El numero es: " + this.initialNumber);
            	this.initialNumber = this.initialNumber + 1;    
            };
	}
	decrease(){
		while(this.initialNumber >= this.finalNumber){
            alert("El numero es: " + this.initialNumber);
           this.initialNumber = this.initialNumber - 1;    
       };
	}   
};

const num = new counter(2, 5);
console.log( num.increase );


