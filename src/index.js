module.exports = function reverse (n) {
    let ans = n;
    if (n < 0) {
        ans = -n;
    }
    return ans.toString().split('').reverse().join('');
}
