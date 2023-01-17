module.exports = function reverse (n) {
    n=Math.abs(n);
    let str=String(n);
    if (n%10==0) {
        let temp=str.slice(0, -1);
        return temp.split("").reverse().join("");
    }
    else {
        return str.split("").reverse().join("");
    }
}
