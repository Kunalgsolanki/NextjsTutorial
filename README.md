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
![data3](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/bec401e6-3362-43f8-8090-8910fdfacff8)
## see here show me error in clinet browser 
## to show it we convter it into clinet  or we create separate button componet which is already clinet componet 


```bach
'use clinet'
app/user/Button.tsx

export default function Button (){
    return (
      <div className="flex justify-center"  >
        <h1> Kunal</h1>
        <button onClick={()=>console.log("hello word ")}> click</button>
      </div>
        
    )
}
```

and we add into the  servercomponent user/page.tsx
```bash
import React from "react"
import Button from "./Button"


export default function UserPage (){
     return (
       <div className="flex flex-row gap-10  justify-center">
         <div className="flex justify-center"  >
         <h1> Kunal</h1>
      
       </div>
          <Button/>
       </div>
         
     )
}

```

![data5](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/8f895151-3dea-4447-b551-e626f692b723)
## here see only downdowload client component here not download  user.tex becouse it is servercomponent






































