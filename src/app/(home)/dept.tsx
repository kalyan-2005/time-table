function Dept({ depts }) {
    return (
        <div className="m-5">
            <table className="w-1/2 text-center mt-[100px]">
                <thead>
                    <tr className="border">
                        <th className="py-2">Dept_Id</th>
                        <th>Dept_Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        depts.map((dept) => {
                            return (
                                <tr key={dept.id} className="border">
                                    <td className="py-2">{dept.id}</td>
                                    <td>{dept.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Dept;