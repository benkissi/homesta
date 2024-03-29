import moment from 'moment'

export const getObjectArray = (data) => {
    var array = Object.keys(data).map((key) => {
        return data[key]
    })

    return array
}

export const arrayChunk = (array, chunk) => {
    if (array.length < 4 || chunk === 1) return array

    const length = array.length
    let chunkedArray = []
    let size
    let i = 0

    if (length % chunk === 0) {
        size = Math.floor(length / chunk)

        while (i < length) {
            chunkedArray.push(array.slice(i, i += size))
        }
    } else {

        chunk--
        size = Math.floor(length / chunk);
        if (length % size === 0) size--

        while (i < size * chunk) {
            chunkedArray.push(array.slice(i, i += size));
        }
        chunkedArray.push(array.slice(size * chunk));

    }

    return chunkedArray
}

export const getYear = () => {
    // const date = new date()
    return moment().format('YYYY')
}

export const getInitials = (fullName) => {
    const names = fullName.split(" ")
    const firstInitial = names[0].substring(0, 1)
    const secondInitial = (names[1] && names[1].substring(0, 1)) || ""
    return firstInitial + secondInitial
}

export const truncateString = (string, limit) => {
    if (string.length > limit) {
        const shortString = string.substring(0, limit) + '...'
        return shortString
    }

    return string
}