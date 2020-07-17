
const fileSystem = require('fs');
const colors = require('colors');
const { log } = require('console');

const listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log('Hola'.green);
        if (!Number(base)) {
            reject(`el valor: ${base} no es un numero`)
            return
        } else {
            let data = ''
            for (let index = 1; index <= limite; index++) {
                let result = base * index
                data += `${base} * ${index} = ${result}\n`.blue;
            }
            resolve(data)
        }

    })

}

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor: ${base} no es un numero`)
            return
        }
        let data = ''
        console.log(limite);
        for (let index = 1; index <= limite; index++) {
            let result = base * index
            data += `${base} * ${index} = ${result}\n`;
        }

        fileSystem.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}