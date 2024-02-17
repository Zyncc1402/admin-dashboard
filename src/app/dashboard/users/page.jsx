import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Tables from "@/components/table/user table";
import React from "react";

const Users = async () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="dashboard p-4">
        <Navbar />
        <div className="userTable p-4 rounded-md mt-6">
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Users;