import TodoList from "../Components/TodoList";

function Home(){
    return (
        <main>
            <header>
                <h2>
                    <thead>
                        <tr>
                            <th colSpan={2}>List of :</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dragons</td>
                            <td>{countDragons}</td>
                        </tr>
                        <tr>
                            <td>Knights</td>
                            <td>{countKnights}</td>
                        </tr>
                    </tbody>
                </h2>
            </header>
            <TodoList />
        </main>
    )
}

export default Home;