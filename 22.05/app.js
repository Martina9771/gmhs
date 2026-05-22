function printRange(start, end) {
let result = "";

for (let i = start; i <= end; i++) {
result += i + " ";
}

console.log(result.trim());
}

printRange(3, 7);