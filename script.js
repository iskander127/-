let result = [];
let num = 2;		//   любое число num
let size = 2 * num - 1;
let direct = "left";
let arr = new Array(size);
arrInit(arr, size);
let x = y = xMax = xMin = yMax = yMin = num - 1;
result.push(arr[x][y]);
while (true) {
	switch (direct) {
		case "left": y--; break;
		case "right": y++; break;
		case "up": x--; break;
		case "down": x++; break;
	}
	if ((x < 0 || y < 0) || (x > size || y > size)) break;
	switch (direct) {
		case "left": if (y < yMin) { yMin = y; direct = "down" };
		case "right": if (y > yMax) { yMax = y; direct = "up" };
		case "up": if (x < xMin) { xMin = x; direct = "left" };
		case "down": if (x > xMax) { xMax = x; direct = "right" };
	}
	result.push(arr[x][y]);
}
result.join(", ");

function arrInit(arr, size) {
	for (let i = 0; i < size; i++) {
		arr[i] = new Array(size)
	}
	let val = 1
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			arr[i][j] = val++;
		}
	}
}
console.log(result);
