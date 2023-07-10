This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

















import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


function login(){
    signInWithEmailAndPassword(auth,email,password)
    .then ((userCrential) =>{
        //signed in
        const user = userCrential.user;
        //...
    })
    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
    })
}



    /*
    //Funcion declarativa
    function login(){

    }

    //funcion de expresion
    const functino = function(){

    }

    //funcion flecha o arrow function
    const login = () =>{

    }
    */

//funcion declarativa
function login (email, password, callback){
    //toda la ejecucion
    callback()
}

login ("ejemplo@ejemplo.com", "123456", "goToDashboard")


/*
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });

*/

callback

/*
TEMAS VISTOS EN CLASE 29-06-23

1-function declarativa*
2-Funcion de expreción*
3-funcion de flecha o arrow functions*

******INVESTIGAR EVENT LOOP******

***4-callback
--llamas a una funcion dentro de otra como parametro

5-promesas
--Es un evento no bloqueante
--Determina el exito o el fracaso de una funcion asincronica

6-polling*
--es una pregunta constante de la linea principal para confirmnar si ya esta listo

7-eventos bloqueantes (sincronico)
--ejecuta solo una tarea impidiendo la ejecucion del resto de tareas

8-eventos no bloqueantes (asincronico)
--realiza las tareas simultaneamente

9-Javascript es mono hilo - multihilo

10-Pilas y colas
--son similares a los arrays

11-timers(setTimeout, setImmediate)
--especifica el tiempo en el que se va a ejecutar una tarea
--pero javascript no ejecuta en el momento exacto, pero hay que tener cuidado
con el desfasamiento de la misma

12- event loop
--se encarga de priorizar las tareas

13-IIFE

14- Parametros y argumentos
*/


//Esto es un timer

function hello(){
    console.log("hola mundo")
}

setTimeout(hello,500)
setImmediate(hello)

hello();


/*IIFE
    Expresion de funcion ejecutada inmediatamente

*/
(
    function(){
        console.log("hola mundo")
    }()
)

/*Promesas*/

new Promise(
    (resolve,reject)=>{ //la forma correcta es: "resolve y reject"
        try{
            alert("Hola/Ya jaló tú")
            resolve("Hola")
        } catch{ //si poner (err) sirve para que te lance el tipo de error que ocurrio
            alert("Error/No jala tú")
            reject("error")
        }
    }
)


const Promise = new Promise( //se crea una variable llamada promise
    (resolve,reject)=>{
        try{
            resolve("Hola")
        } catch{ 
            reject("error")
        }
    }
)
//
Promise
.then(
    (result)=>{
        console.log(result)
    }
)

.catch(
    (error)=>
    console.log(error)
)

/*


const Promise = new Promise( //se crea una variable llamada promise
    (resolve,reject)=>{
        try{
            resolve("Hola")
        } catch{ 
            reject("error")
        }
    }
)
*/

Promise
.then(
    (result)=>{
        console.log(`${result} | soy yo`); //template strings
    }
)

.catch(
    (error)=>
    console.log(error)
)

/*
--.then
Saber si todo esta bien
es una función por que cuenta con parentesis

--.catch
Saber si algo salio mal
*/

