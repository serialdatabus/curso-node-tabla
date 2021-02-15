
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear();
/*
const [,,arg3 = 'base=5'] = process.argv;

const [ , base = 5 ] = arg3.split('=');
console.log(base);
*/

//console.log(process.argv);
//console.log(argv);
const { base , list = false , hasta } = argv;
//console.log(base);
    

crearArchivo(base,list,hasta)
    .then( nombreArchivo => console.log(nombreArchivo,' creado') )
    .catch(err => console.log(err));

    