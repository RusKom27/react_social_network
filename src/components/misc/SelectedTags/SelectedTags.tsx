import React, {FC} from "react"

type PropsType = {
    text: string,
    tags: string[]
}

export const SelectedTags: FC<PropsType> = ({text, tags}) => {
    const output_text = <div>{[text]}</div>

    for (let tag of tags) {
        insertTag(output_text.props.children, `#${tag}`)
    }
    return output_text
}

const insertTag = (elems: any[], tag: string): any => {
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
    return elems
}