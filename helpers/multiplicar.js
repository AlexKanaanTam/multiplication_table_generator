const fs = require("fs");
const colors = require("colors")


// const crearArchivo = (base=5)=>{

//     return new Promise((resolve)=>{   //Si ponemos aqui el async por defecto regresa una promesa

//         console.log("==============")
//         console.log(`tabla del ${base}`)
//         console.log("==============")
    
//         let salida=""
        
//         for (let i =1; i <=10; i++){
//             salida += `${base} x ${i}= ${base * i}\n`
//         }
    
//         console.log(salida)
    
//         fs.writeFileSync(`table-${base}.txt`, salida)
    
//         resolve(`tabla-${base}.txt`)

//     })


// }

const crearArchivo = (base=5, l=false, h=10)=>{

    return new Promise((resolve)=>{

        if (l){
        console.log("==============".rainbow)
        console.log("tabla del", colors.blue(base))
        console.log("==============".rainbow)
        }
    
        let salida=""
        
        for (let i =1; i <=h; i++){
            salida += `${base} ${"x".green} ${i}= ${base * i}\n`
        }

        if (l){
            console.log(salida)
        }
    
        fs.writeFileSync(`./salida/table-${base}.txt`, salida)
    
        resolve(`tabla-${base}.txt`)

    })


}

const obtenerArchivo= async(base, l, h)=>{
    try {
        const promesa= await crearArchivo(base, l, h);
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
    
}

module.exports={
    crearArchivo, //lo ponemos sin el parentesis y sin las variables 
    obtenerArchivo
}