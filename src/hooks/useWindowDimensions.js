function useWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height
    }
}

export {useWindowDimensions}