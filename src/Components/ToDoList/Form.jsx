const props = {
    dragon : {
        id : "dragonName",
        name : "dragonName",
        role : "dragon",
        examples : "Bahamut, Adenamon, ...",

    }
}
function Form({props}) {
    return (
        <form action="" method="get">
            <input type="text" name="dragonName" id="dragonName" aria-label="Add a dragon's name" placeholder="Bahamut, Adenamon, ..." />
            <button type="submit" value="Add a dragon">Add</button>
        </form>
    )
}