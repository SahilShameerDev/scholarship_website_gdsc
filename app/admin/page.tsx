"use client";

// app/admin/page.tsx
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Home from "@/components/Admin/home/Home";
import data from '../scholarships/scholarship.json';

const AdminPage = () => {
  const router = useRouter(); // Correct usage within the component
  const Scholarships = data.scholarships

  useEffect(() => {
    // Check if the authToken exists
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);

    // If not authenticated, redirect to the login page
    if (authToken === 'false') {
      console.log("Not authenticated");

      router.push("/login");
    }
  }, []);

  return (
    <div>
      <Home scholarships={Scholarships} />
    </div>
  );
};

export default AdminPage;
