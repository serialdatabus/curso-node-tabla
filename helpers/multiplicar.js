const fs = require('fs');
var colors = require('colors');

const crearArchivo = async(base = 5,list,hasta) => {



    console.log(list);
    
    
    
    
        let salida = '',consola='';
    
    
    
        for(let i=1;i<=hasta;i++)
        {
    
    
            salida+=base+'x'+i+'='+(base*i)+'\n';
            consola+=base+'x'.yellow+i+'='+(base*i)+'\n';

    
        }


        if(list)
        {
    
            console.log('======================================');
            console.log('Tabla del: '+colors.green(base));
            console.log('======================================');
          
           
    
        console.log(salida);


        }
    






            try{


                nombrearchivo = './salida/tabla-'+base+'.txt';

                fs.writeFileSync(nombrearchivo,salida);
              
              
              
                //  console.log('Tabla del:',base,' creada!');


                return nombrearchivo;

            }
            catch(err)
            {

                    throw "Hubo un error al crear el archivo: "+nombrearchivo;

            }
            




 
    









}


module.exports = {

    crearArchivo: crearArchivo

}