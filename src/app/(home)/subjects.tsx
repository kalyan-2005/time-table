function Subjects({subjects}) {
    return (
        <div>
            {
                subjects.map((sub) => {
                    return (
                        <div key={sub.id} className="flex gap-5">
                            <h1>{sub.id}</h1>
                            <h1>{sub.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Subjects;