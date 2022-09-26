class vehicle {
	brand: string = ""
	color: string = ""
	type: string = ""
    serialNumber: number = 0

	constructor(brand: string, color: string, type: string, serialNumber: number){
		this.brand = brand;
		this.color = color;
		this.type = type;
        this.serialNumber = serialNumber;
	}

	turn(){
		return "Encendido " 
	}
	start(){
		return "Arrancando "
	}
	turnOff(){
		return "Apagado" 
	}
};

class motorcycle extends vehicle {
	licensePlate: string = ""
	cylinderCapacity: Number = 0

	constructor(licensePlate: string, cylinderCapacity: number, brand: string, color: string, type: string, serialNumber: number){
		super(brand, color, type, serialNumber);
		this.licensePlate = licensePlate;
		this.cylinderCapacity = cylinderCapacity;
    }
    speed(){
		return "I am fast"
	}
    capacity(){
		return "I am full"
	}
}

const moto = new motorcycle("UUQ881", 100, "AKT", "Negro", "hibrido",211095);

console.log( moto.capacity() );

class car extends vehicle {
	model: number = 0
	reference: string = ""

	constructor(model: number, reference: string, brand: string, color: string, type: string, serialNumber: number){
		super(brand, color, type, serialNumber);
		this.model = model;
		this.reference = reference;
    }
    sale(){
		return "its sold"
	}
    rent(){
		return "Its rented"
	}
}

const car1 = new car(2021, "Optra", "Chevrolet", "Negro", "hibrido",211095);

console.log( car1.sale() );