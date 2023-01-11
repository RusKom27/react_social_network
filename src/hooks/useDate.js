import {useMemo} from "react";

export const useDate = (date_string, show_date = false) => {
    return useMemo(() => {
        const date = new Date(date_string)
        if (show_date) return date.toLocaleDateString()
        return `
        ${date.getFullYear() !== new Date().getFullYear() ? date.getFullYear() : ''}
        ${date.getDay() !== new Date().getDay() ? `${date.getDate()}.${date.getMonth()}` : ''}
        ${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
        `
    }, [date_string])
}