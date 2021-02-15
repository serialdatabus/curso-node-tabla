const { builtinModules } = require('module');

const argv = require('yargs')
.option('b',{

    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla e multiplicar'
    
})
.option('l',{

    alias: 'list',
    type: 'boolean',
    
    default: false,
    describe: 'Muestra la tabla en consola'

    
})
.option('h',{

    alias: 'hasta',
    type: 'number',
    
    default: 10,
    describe: 'Limite de la multiplicacion'

    
})
.check((argv,options) => {

   // console.log('yargs',argv);

    if(isNaN(argv.b))
    {
        throw 'La base tiene de ser un numero';
    }

    return true;
 
})
.argv;

module.exports = argv