function maxBy(list, keyBy) {
    return list.reduce((x, y) => keyBy(x) > keyBy(y) ? x : y)
}
function getFrequentTagInPage() {
    const tags = [...document.querySelectorAll('*')]
        .map(el => el.tagName)
        .reduce((result, tag) => {
            result[tag] = result[tag] ? result[tag] + 1 : 1;
            return result;
        }, {})
    return maxBy(Object.entries(tags), tag => tag[1])
}