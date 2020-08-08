function doSomething() {
    console.log(222222);
}

console.log(111111);
// doSomething();
// setTimeout(doSomething, 4000);
setTimeout(function() {
    console.log('lazy and waiting');
}, 4000)

setTimeout(() => {
    console.log('see you')
}, 5000)

setInterval(() => {
    console.log('doing it')
}, 1000);
console.log(333333);