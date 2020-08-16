// explicit types, type(verb) variables before we gibe them a value
let character;
let age: number;
let isLogedIn: boolean;

age = 30;

isLogedIn = true;

// arrays 

let ninjas: string[] = [];

ninjas.push('Vladimir');

// union types
let mixed: (string|number|boolean)[] = [];

mixed.push('hello');
mixed.push(20)

let uid: string|number;
uid = '123';
uid = 123;

// objects

let ninjaOne: object;

	 ninjaOne = {
		 name: 'Vladimir',
		 age: 33,
		 beltColor: 'black'
}

let ninjaTwo: {
	name: string,
	age: number,
	beltColor: string
}

ninjaTwo = {
	name: 'Biker',
	age: 26,
	beltColor: 'black'
}