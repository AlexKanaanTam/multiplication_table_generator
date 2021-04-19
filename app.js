const {obtenerArchivo} = require("./helpers/multiplicar");
const argv= require("./config/yargs");
const colors = require("colors")

//Como no se exporta como un objeto no hace falta que pongamos los "{}"

console.clear();

// console.log(process.argv)
// console.log(argv)

// // console.log(process.argv) //en el comand prompt se presenta como una array, por eso desestructuramos así
// const [ , , arg3="base=5" ]= process.argv;
// const [, base=5]=arg3.split("=")

// console.log(base)


// const base= 9;

obtenerArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo)=>{console.log(nombreArchivo.zebra, "creado")})
    .catch((error)=>{console.log(error)})


// console.log("================")
// console.log("tabla del 5")
// console.log("================")


// const base = 3;
// // let salida=""

// // for (let i =1; i <=10; i++){
// //     salida += `${base} x ${i}= ${base * i}\n`
// // }

// console.log(salida)

// fs.writeFile(`table-${base}.txt`, salida, (error)=>{
//     if(error) throw error;

//     console.log("tabla creada")
// })

// fs.writeFileSync(`table-${base}.txt`, salida)

// console.log("tabla creada")

// const base= 5;
// let salida= ""

// for (let i=0; i>=10; i++){
//     salida += `${base} x ${i}= ${base * i}`
// }

// fs.writeFile(`text-${base}.js`, salida, (error)=>{
//     if(error){
//         throw error;
//     }
//     console.log("tabla creada")
// })

//Cuando instalamos en desarrollo simplemente hay que poner npm install nodemon --save-dev
//Cuando queremos instalar una version concreta debemos poner npm install colors@1.0.0
//El comando de "npm update" nos permite realizar el control de versiones
//Para updatear y reconstruir todos los modulos una vez iniciamos el poryecto debemos clicar en "npm install"




