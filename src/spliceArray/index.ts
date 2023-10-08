/**
 * this func to delete target element for source array
 */
const spliceArray = <ElementType>(source: ElementType[], targetIndexArray: number[]) => {
    // use sort for targetIndexArray inner element from big to small, make sure splicing delete big to small
    const sortedIndexArray = targetIndexArray.sort((a, b) => b - a)
    sortedIndexArray.forEach(_sortIndex => {
        source.splice(_sortIndex, 1)
    })
    return source
}

export default spliceArray
