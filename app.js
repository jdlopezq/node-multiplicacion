
const argv = require('./config/yargs').argv
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { number } = require('yargs');
let comando = argv._[0]
switch (comando) {
    case `listar`:
        listarTabla(argv.base, argv.limite).then((tabla)=>{console.log(tabla)})
        break;
    case `crear`:
        crearArchivo(argv.base, argv.limite).then((archivo) => console.log(`Archivo creado: ${archivo.red}`))
            .catch(console.log)
        break;

    default:
        console.log(`El comando ${comando} no existe`);
        break;
}
// console.log(argv.base);
// console.log(argv.limite);


