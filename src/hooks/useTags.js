
const insertTag = (elems, tag) => {
    for (let i = 0; i < elems.length; i++) {
        if (typeof elems[i] !== "string") continue
        for (let j = 0; j < elems[i].length; ++j) {
            if (elems[i].substring(j, j + tag.length) === tag) {
                elems.splice(i, 1, ...[
                    elems[i].substring(0, j),
                    <button key={j} onClick={() => {}}>{tag}</button>,
                    elems[i].substring(j + tag.length, elems[i].length)
                ])
                return insertTag(elems, tag)
            }
        }
    }
}

export const useTags = (text, tags) => {
    text = <div>{[text]}</div>

    for (let tag of tags) {
        insertTag(text.props.children, `#${tag}`)
    }
    return text
}

