const arg = process.argv[2];
if (!arg) process.exit(0);

const n = Number(arg);
if (Number.isNaN(n)) process.exit(0);

const size = Math.floor(n);
if (size < 1) process.exit(0);

for (let i = 1; i <= size; i++) {
	console.log("*".repeat(i));
}

