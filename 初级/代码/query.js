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

// 传统方式
function queryToObj() {
    const res = {}
    const search = window.location.search.substring(1);
    search.split('&').forEach((item) => {
        const [ key, val ] = item.split('=')
        res[key] = val;
    })
    return res;
}

// URLSearchParams
function queryToObj() {
    const res = {}
    const paramList = new URLSearchParams(location.search);
    paramList.forEach((val, key) => {
        res[key] = val
    })
    return res;
}