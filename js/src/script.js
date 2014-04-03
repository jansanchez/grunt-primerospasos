/* script.js */

function Persona(){
	this.anoNacimiento = 1986;
}

Persona.prototype.getEdad = function() {
	var d = new Date();
	this.edad = (d.getFullYear() - this.anoNacimiento);
	return this.edad;
};

