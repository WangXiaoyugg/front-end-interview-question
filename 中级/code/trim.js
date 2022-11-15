function trim(str) {
    // \s 匹配单个空白字符，包括空格、制表符、换页符、换行符和其他 Unicode 空格
    // [ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
    return str.trim() || str.replace(/^\s+|\s+$/g, '');
}

console.log(trim('   abc   '))