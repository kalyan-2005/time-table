import { getDept, getSub, getTeachers } from "@/actions/get-dept";
import Home from "@/components/home";

async function Page() {
  const depts = await getDept();
  const teachers = await getTeachers();
  const subjects = await getSub();
  return (
    <Home depts={depts} teachers={teachers} subjects={subjects}/>
  );
}

export default Page;