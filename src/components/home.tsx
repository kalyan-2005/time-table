"use client"
import Dept from "@/app/(home)/dept";
import Subjects from "@/app/(home)/subjects";
import Teachers from "@/app/(home)/teachers";
import { useState } from "react";


function Home({ depts, teachers, subjects }) {
    const [active, setActive] = useState(0);
    const activePage = {
        0: <Dept depts={depts} />,
        1: <Teachers teachers={teachers} />,
        2: <Subjects subjects={subjects} />
    }
    return (
        <div className="m-5">
            <div className="flex gap-6">
                <div className={`px-2 py-1 rounded cursor-pointer text-center ${active===0&&"bg-gray-200"}`} onClick={()=>setActive(0)}>Departments</div>
                <div className={`px-2 py-1 rounded cursor-pointer text-center ${active===1&&"bg-gray-200"}`} onClick={()=>setActive(1)}>Professors</div>
                <div className={`px-2 py-1 rounded cursor-pointer text-center ${active===2&&"bg-gray-200"}`} onClick={()=>setActive(2)}>Courses</div>
            </div>
            {activePage[active]}
        </div>
    );
}

export default Home;