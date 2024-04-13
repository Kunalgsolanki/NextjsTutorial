
import React from "react";
import Layout from "../Layout";
import {data} from "../../data/user/user"
import Button from "./Button";




export default function Users() {
    

  return (
    <Layout>
      <div className="flex justify-center items-center flex-grow mt-10">
        <h1 className="text-2xl font-bold">User Data</h1>
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
                <td className="border border-gray-400 px-4 py-2"> <Button id={user.id}/> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
