// ATM by MIrfan
// This somewhat complex TypeScript/Node.js project is a console-based 
// application. When the system starts the user is prompted with a user id and 
// user pin. After entering the details successfully, the ATM functionalities
//  are unlocked. All the user data is generated randomly.

// Install packages
// tsc --init and npm init -y and npm i @types/node -D and create app.ts and
//  inquirer package command npm install inquirer. 

// start code by from "inquirer"

// import inquirer from "inquirer";

// //  Top-level 'await' expressions are only allowed when the 'module' option 
// // is set to 'es2022', 'esnext', 'system', 'node16', 'nodenext', or'preserve',
// //  and the 'target' option is set to 'es2017' or higher.ts(1378)

// let user = await inquirer.prompt([
//     {
//         type:"string",
//         name:"cardholder",
//         message:"Welcome to MIrfan"

//     },

//     {
//         type:"number",
//         name:"pincode",
//         message:"enter your 4 digit pincode"

//     },

//     // creating listing and withgdrawl method

//     {
//         type:"list",
//         name:"acountType",
//         message:"Select your acount type",
//         choices: ["current","saving"]

//          },

// //          // tranition type
//         {
//             type:"list",
//             name:"tranitionType",
//             message:"Select your transition type",
//             choices:["cash","withdrawl"]
//         },
// //         //select amount 
//         {
//             type:"list",
//             name:"amount",
//             message:"Select your amount",
//             choices: [1000,2000,5000,10000],
//             when(user) {
//                 return user.transitionType === "cash"
//             }

//         },
//         {
//             type:"number",
//             name:"amount",
//             message:"Enter your amount",
//             when(user){
//                 return user.trnstionType === "withdrawl"
//             }
//         }

// ])

// // //final slip

// if(user.pincode){
//     const balance = Math.floor(Math.random() * 1000 +1)
//     console.log(balance)
//     const enteramount = user.acount;
//     if(enteramount <= balance){
//         const remaining =balance - enteramount
//         console.log(`you have withdrawl rupees ${enteramount} and you have remaining balance ${remaining}`)
//     }
// }



import inquirer from 'inquirer';


    let user = await inquirer.prompt([
        {
            type: "string",
            name: "cardholder",
            message: "Welcome to Mirfan"
        },
        {
            type: "number",
            name: "pincode",
            message: "Enter your 4-digit pincode"
        },
        {
            type: "list",
            name: "accountType",
            message: "Select your account type",
            choices: ["current", "saving"]
        },
        {
            type: "list",
            name: "transitionType",
            message: "Select your transition type",
            choices: ["cash", "withdrawl"]
        },
        {
            type: "list",
            name: "amount",
            message: "Select your amount",
            choices: [1000, 2000, 5000, 10000],
            when: (user) => user.transitionType === "cash"
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount",
            when: (user) => user.transitionType === "withdrawl"
        }
    ]);

    // Final slip
    if (user.pincode) {
        const balance = Math.floor(Math.random() * 1000 + 1);
        console.log(`Your current balance is: ${balance}`);
        const enterAmount = user.amount;
        if (enterAmount <= balance) {
            const remaining = balance - enterAmount;
            console.log(`You have withdrawn ${enterAmount} and your remaining balance is ${remaining}`);
        } else {
            console.log("Insufficient balance.");
        }
    }

      

