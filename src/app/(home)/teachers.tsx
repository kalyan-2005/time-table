function Teachers({ teachers }) {
    return (
        <div>
            {
                teachers.map((x) => {
                    return (
                        <div key={x.id} className="flex gap-5">
                            <h1>{x.id}</h1>
                            <h1>{x.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Teachers;