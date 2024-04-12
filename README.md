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
for this goes to servercomponent branch

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
## see here show me error in client browser 
## to show it we convter it into clinet  or we create separate button componet which is already clinet componet 


```bach
'use client'
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

and we add into the  server component user/page.tsx
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
## here see only downdowload client component here not download  user.tsx becouse it is server component
## in this way we  improve our component size so that it take few time load into browser

```bash 
page/Deshbord/page.tsx


import React from "react";
export default function Deshbord (){
   return (
        <div className="flex  justify-center align-middle">
            <h1> Deshbord </h1>
        </div>
    );
}

```





# Routing In NextJS 
## for this goes to Routing branch 
Nextjs has file based routing 
here create fodeer Deshbord and then into add page.tsx
![p1](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/867cdc84-8f94-47d8-9b80-223497f1c26d)

## run the app and show the access url this /Deshbord 
## you see this output 
![data](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/d523fff1-558a-4c09-b869-5da6eab16eab)

##Navigatin using <Link>
here first see why we use Link instead of a tag 
first we use the <a>  for navigation 
```bash


export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center mt-10">
        <div>
          <h1 className="flex justify-center text-3xl">Next.js Practice</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <h1>Navigation</h1>
        
            <a href="/Deshbord" className="mt-2 text-blue-500 hover:underline">Dashboard</a>
       
        </div>
      </div>
    </main>
  );
}


```
here when i inspect and show in network section i downloed  this components 
![data (2)](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/9fd79c61-bdcd-4278-82d4-667b6fc76107)
nevigate deshbord route  reload the page 
further download the all objects from the server 
see in below 

![daya3](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/b69f629a-2b14-4dc6-ae73-26a72ffeb1c7)

## here load the cinet page take time to reload for resolve it nwxt js have Link tag which not read page that not download further object from the server when nevigate next page

add Link Tag 
```bash 

import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center mt-10">
        <div>
          <h1 className="flex justify-center text-3xl">Next.js Practice</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <h1>Navigation</h1>
        
            {/* <a href="/Deshbord" className="mt-2 text-blue-500 hover:underline">Dashboard</a> */}
            <Link href="/Deshbord">
            <div className="mt-2 text-blue-500 hover:underline">Dashboard</div>
          </Link>
          
        </div>
      </div>
    </main>
  );
}

```







 




























































