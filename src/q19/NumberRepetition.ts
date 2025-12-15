const arg = process.argv[2];
const size = parseInt(arg ?? '', 10);

if (isNaN(size) || size <= 0) {
	// No valid size provided; do nothing (matches simple quiz expectations)
	process.exit(0);
}

for (let row = 1; row <= size; row++) {
	console.log(String(row).repeat(size));
}

