export const TodoList = ({list,Toggle}) => {
    return (<div>
        {list.map((e) => (
            <p key={e.id}>
                {e.title} - {e.status ? "Done" : "Not Done"}
                <button onClick={() => { Toggle(e.id,e.title) } }>Change Status</button>
            </p>
        ))}
    </div>
    );
}