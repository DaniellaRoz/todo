export function Title() {
    return <input name="title" id="title" type="text" placeholder="Title" />
}

export function Description() {
    return <textarea name="description" id="description" cols="30" rows="10" placeholder="Description" ></textarea>
}

export function DueBy() {
    return <input name="date" id="date" type="date" />
}

export function Submit() {
    return <button name="submit" id="submit" type="submit">Submit</button>
}