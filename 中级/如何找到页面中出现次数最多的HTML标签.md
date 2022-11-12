有三种API可以列出页面中所有的标签
1. document.querySelectorAll('*'), 标准规范实现
2. $$('*'), devtools实现
3. document.all, 非标准规范实现


```javascript
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

```