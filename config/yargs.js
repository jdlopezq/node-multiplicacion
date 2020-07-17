
const commonArgs = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l', default: 10,
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar',commonArgs)
    .command('crear', 'Genera una tabla de multiplicar',commonArgs)
    .help().argv

    module.exports={
        argv
    }