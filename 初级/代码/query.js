// 传统方式
function getQueryParam(name) {
    const search = location.search.substring(1);
    const reg = new RegExp(`(^|&)${name}=([^&]+)(&|$)`, 'i')
    const res = search.match(reg);
    if (res === null) {
        return null;
    }
    return res[2];
}

// URLSearchParams
function queryParam(name) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(name)
}   