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
## roting using useRouter hoock 
here use when we click the button navigae new page 
creare the app/Button.tsx

```bash
import React from 'react';
import { useRouter } from "next/navigation";

const Button = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push("/Deshbord");
    };

    return (
        <div>
            <button onClick={handleButtonClick} className="mt-2 bg-blue-500 hover:underline">
                Deshbord
            </button>
        </div>
    );
};

export default Button;


```
add into page.tsx

```bash
page.tsx

import Link from "next/link";

import Button from "./Button";
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
       <Button/>
        </div>
      </div>
    </main>
  );
}




```

# dynamic Routing 

in this chepter we see how to apply dynamic routing with dehsbord  exomaple branch  LayoutWithRouting have exmple layout sturtcure with ruting you clone this branch  LayoutWithRouting 
first clone this branch  LayoutWithRouting the goes to follow below code 
appy daynamic routing into user serction we have user list when we click user details the show me according to user id that data into next page here we user only pne page and we data dyanamicly in application.
for it we crate 10 data of user here below code : 
![Papapng](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/8c237b00-4557-4720-bcb1-5d0e24f70e4a)

```bash 
app/data/user/user.ts
const data = [
    {
      "id": 1,
      "username": "john_doe",
      "email": "john.doe@example.com",
      "registered_at": "2024-04-10T08:00:00Z",
      "last_login": "2024-04-12T15:30:00Z",
      "total_orders": 15,
      "total_spent": 250.75,
      "status": "active"
    },
    {
      "id": 2,
      "username": "jane_smith",
      "email": "jane.smith@example.com",
      "registered_at": "2024-03-25T10:15:00Z",
      "last_login": "2024-04-12T12:45:00Z",
      "total_orders": 10,
      "total_spent": 180.50,
      "status": "active"
    },
    {
      "id": 3,
      "username": "mike_jones",
      "email": "mike.jones@example.com",
      "registered_at": "2024-04-01T16:45:00Z",
      "last_login": "2024-04-12T09:20:00Z",
      "total_orders": 8,
      "total_spent": 120.30,
      "status": "active"
    },
    {
      "id": 4,
      "username": "emily_wang",
      "email": "emily.wang@example.com",
      "registered_at": "2024-04-05T11:30:00Z",
      "last_login": "2024-04-12T14:00:00Z",
      "total_orders": 20,
      "total_spent": 300.00,
      "status": "active"
    },
    {
      "id": 5,
      "username": "david_brown",
      "email": "david.brown@example.com",
      "registered_at": "2024-03-20T09:00:00Z",
      "last_login": "2024-04-11T16:10:00Z",
      "total_orders": 5,
      "total_spent": 90.20,
      "status": "active"
    }
  ]
  


```

add code in app/deshbord/user/page.tsx
```bash
deshbord/user/page.tsx
import React from "react";
import Layout from "../Layout";
import {data} from "../../data/user/user"


export default function Users() {
  return (
    <Layout>
      <div className="flex justify-center items-center flex-grow mt-10">
        <h1 className="text-2xl font-bold">User details</h1>
      </div>
      <div className="flex justify-center">
        <table className="table-fixed border-collapse border border-gray-800 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Username</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Registered At</th>
              <th className="border border-gray-400 px-4 py-2">Last Login</th>
              <th className="border border-gray-400 px-4 py-2">Total Orders</th>
              <th className="border border-gray-400 px-4 py-2">Total Spent</th>
              <th className="border border-gray-400 px-4 py-2">show details</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td className="border border-gray-400 px-4 py-2">{user.username}</td>
                <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                <td className="border border-gray-400 px-4 py-2">{user.registered_at}</td>
                <td className="border border-gray-400 px-4 py-2">{user.last_login}</td>
                <td className="border border-gray-400 px-4 py-2">{user.total_orders}</td>
                <td className="border border-gray-400 px-4 py-2">{user.total_spent}</td>
                <td className="border border-gray-400 px-4 py-2"> <button className="w-full h-fulll bg-blue-700 rounded-md hover:border-white hover:border-2 visited:bg-gray-900 ">show</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

```
output:

![data5](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/e71830e1-6ba1-46e8-8c6b-ca8fc0da3770)
## we imapliment  accorid user id we goed details page using below code 
here we create  in user foldeer folder which name is slug and  in that folder we create file page.tsx
add below code 

```bash
"use client"
import Layout from "../../../Layout"
import {data }from "../../../../data/details/data"


export default function Page ( {params}:{params:{slug:any}}){
  
  
    
    return (<Layout > 
        <div>
        
         {params.slug}
        
        </div> </Layout>        )

    
}

```
## here apply  acess this url in brower here you see 
![data6](https://github.com/Kunalgsolanki/NextjsTutorial/assets/105452144/f470aabf-2d9e-47a6-a15f-65d8d578f194)

we can acess this accoridng all array object data.ts but deatils we add another file into  data/user/deatil/data.ts
```bash

export const data = [
    {
      "id": 1,
      "username": "john_doe",
      "email": "john.doe@example.com",
      "registered_at": "2024-04-10T08:00:00Z",
      "last_login": "2024-04-12T15:30:00Z",
      "total_orders": 15,
      "total_spent": 250.75,
      "status": "active",
      "address": "123 Main St, Cityville",
      "phone": "+1234567890",
      "loyalty_points": 350,
      "membership_level": "Gold"
    },
    {
      "id": 2,
      "username": "jane_smith",
      "email": "jane.smith@example.com",
      "registered_at": "2024-03-25T10:15:00Z",
      "last_login": "2024-04-12T12:45:00Z",
      "total_orders": 10,
      "total_spent": 180.50,
      "status": "active",
      "address": "456 Elm St, Townville",
      "phone": "+1987654321",
      "loyalty_points": 200,
      "membership_level": "Silver"
    },
    {
      "id": 3,
      "username": "mike_jones",
      "email": "mike.jones@example.com",
      "registered_at": "2024-04-01T16:45:00Z",
      "last_login": "2024-04-12T09:20:00Z",
      "total_orders": 8,
      "total_spent": 120.30,
      "status": "active",
      "address": "789 Oak St, Villageton",
      "phone": "+1122334455",
      "loyalty_points": 100,
      "membership_level": "Bronze"
    },
    {
      "id": 4,
      "username": "emily_wang",
      "email": "emily.wang@example.com",
      "registered_at": "2024-04-05T11:30:00Z",
      "last_login": "2024-04-12T14:00:00Z",
      "total_orders": 20,
      "total_spent": 300.00,
      "status": "active",
      "address": "321 Pine St, Forestville",
      "phone": "+9988776655",
      "loyalty_points": 500,
      "membership_level": "Platinum"
    },
    {
      "id": 5,
      "username": "david_brown",
      "email": "david.brown@example.com",
      "registered_at": "2024-03-20T09:00:00Z",
      "last_login": "2024-04-11T16:10:00Z",
      "total_orders": 5,
      "total_spent": 90.20,
      "status": "active",
      "address": "987 Maple St, Groveton",
      "phone": "+5544332211",
      "loyalty_points": 50,
      "membership_level": "Basic"
    }
  ];
  
```

# here file is use for the  show details of user data 
## we imaplimennt in sucj way when parama is match to data.id the show that object in another page here below code we imapliemented that 


```bash


import Layout from "../../../Layout"
import {data }from "../../../../data/details/data"


export default function Page ( {params}:{params:{slug:any}}){
  
  const user= data.find((s)=>s.id===parseInt(params.slug)) || {}
  console.log(user)
    
    return (<Layout > 
        <div>
        
         {params.slug}
        
        </div> </Layout>        )

    
}

```

output: 

















































 




























































