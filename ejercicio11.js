class Estudiante {
    _nombre
    _asignaturas = ["Javascript", " HTML", " CSS"]
    constructor(nombre) {
        this._nombre = nombre
    }
    obtenDatos() {
        return `Mi nombre es ${this._nombre} y estudio ${this._asignaturas}`
    }
}

const estudiante1 = new Estudiante("Franco")
console.log(estudiante1.obtenDatos());