//fill string to length
exports.f2L = function (inp = '', maxLen = 2, filler = '0'){
    return String(inp).padStart(maxLen, filler);
}
