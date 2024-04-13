import prisma from "@/utils/db";

export async function getDept() {
    const depts = await prisma.dept.findMany();
    return depts;
}

export async function getTeachers() {
    const teachers = await prisma.teachers.findMany();
    return teachers;
}

export async function getSub() {
    const sub = await prisma.sub.findMany();
    return sub;
}

export async function getClasses({params}) {
    const {id}=params.id;
    const classes = await prisma.classes.findMany({
        where:{
            deptId:id
        }
    })
    return classes;
}