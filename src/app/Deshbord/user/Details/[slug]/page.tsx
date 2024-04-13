
import Layout from "../../../Layout"
import { data } from "../../../../data/details/data"


export default function Page({ params }: { params: { slug: any } }) {

  const user = data.find((s) => s.id === parseInt(params.slug)) 
  console.log(user)
  return (<Layout >
    <div className="flex justify-center items-center flex-grow mt-10">
     <div className="text-4xl"> User details</div>
    </div>
    <div  className="flex justify-center mt-10 ">
      <table className="w-[300px]">
      <thead>
      <tr>
              <th className="border border-gray-400 px-4 py-2">Key </th>
              <th className="border border-gray-400 px-4 py-2">value </th>
            
            </tr>
            <tr>
              <th className="border border-gray-400 px-4 py-2">id </th>
              <th className="border border-gray-400 px-4 py-2">{user.id} </th>

            </tr>
            <tr>
            <th className="border border-gray-400 px-4 py-2">User Name </th>
              <th className="border border-gray-400 px-4 py-2">{user.username} </th>
            </tr>
            <tr>
            <th className="border border-gray-400 px-4 py-2">User email </th>
              <th className="border border-gray-400 px-4 py-2">{user.email} </th>
            </tr>
            <tr>
            <th className="border border-gray-400 px-4 py-2">User registered At </th>
              <th className="border border-gray-400 px-4 py-2">{user.registered_at} </th>
            </tr>
            <tr>
            <th className="border border-gray-400 px-4 py-2">User last login </th>
              <th className="border border-gray-400 px-4 py-2">{user.last_login} </th>
            </tr>
            <tr>
            <th className="border border-gray-400 px-4 py-2">User Total orders </th>
              <th className="border border-gray-400 px-4 py-2">{user.total_orders} </th>
            </tr>
            
            <tr>
            <th className="border border-gray-400 px-4 py-2">User Total Spent </th>
              <th className="border border-gray-400 px-4 py-2">{user.total_spent} </th>
            </tr>
            <tr>
            <th className="border border-gray-400 px-4 py-2">User status </th>
              <th className="border border-gray-400 px-4 py-2">{user.status} </th>
            </tr>
            <tr>
            <th className="border border-gray-400 px-4 py-2">User address </th>
            <th className="border border-gray-400 px-4 py-2">{user.address} </th>
            </tr>
            <tr>
            <th className="border border-gray-400 px-4 py-2">User phone </th>
            <th className="border border-gray-400 px-4 py-2">{user.phone} </th>
            </tr>
            <tr>
            <th className="border border-gray-400 px-4 py-2">User loyalty points </th>
            <th className="border border-gray-400 px-4 py-2">{user.loyalty_points} </th>
            </tr>
            <tr>
            <th className="border border-gray-400 px-4 py-2">User Membership level </th>
            <th className="border border-gray-400 px-4 py-2">{user.loyalty_points} </th>
            </tr>
            

        </thead>
      </table>
    </div>

    </Layout>)


}