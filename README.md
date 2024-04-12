# NextjsTutorial
## goes to  master barnch clone it the code follow it this tutorial  
Here my NextJs + typeScript tutorial Repo which use as documentation for learning Next.js + TypeScript.

## Installations

Download Node.js on your local system from [nodejs.org](https://nodejs.org/en).

Check the installed Node.js version using the following command:

```bash
node --version
```


## NextJs Installations
install Nextjs in using following  command 
```bash
npx create-next-app@latest
```
# Run NextJsApp
```bash
npm run dev
```

![Screenshot 2024-04-12 171758](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/af7645be-580e-456f-9775-4370e7eef129)

## App Router 
it has default  server componet use in nextjs applications
in bellow image show the out put goes to direct server it not download the java sript bundles in clinet 
![data](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/4c417618-5f45-4062-919e-cb7a6ed66c55)
here i create the user component which is server component 
below show you in webpack not downled that java script file 

![data2](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/dc75be53-41b2-413a-b380-67b2fbe1d94a)
## here see not see user folder into the clinet 

## when i addclinet componet like button tag it show me errr
```bash
app/user/page.tsx

import React from "react";

export default function UserPage (){
     return (
       <div className="flex justify-center"  >
         <h1> Kunal</h1>
         <button onClick={()=>console.log("hello word ")}> click</button>
       </div>
         
     )
}


```




























