
const argv = require("yargs")
                    .option("b", {
                        alias: "base",
                        type: "number",
                        demandOption: true,
                        describe: "Es la base de la tabla de multiplicar"
                    })
                    .check((argv, options)=>{
                        if(isNaN(argv.b)){
                            throw "La base tiene que ser un número"
                        }
                        return true
                    })
                    .option("l", {
                        alias:"listar",
                        type: "boolean",
                        demandOption: true,
                        default: false,
                        describe: "nos indica si se imprime la tabla"
                    })
                    .option("h", {
                        alias:"hasta",
                        type: "number",
                        default: 20,
                        demandOption: true,
                        describe: "nos indica cuantas filas tiene la tabla"
                    })
                    .argv;

module.exports= argv;