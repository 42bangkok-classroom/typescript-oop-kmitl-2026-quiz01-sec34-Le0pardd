const arg = process.argv[2];
if (arg === undefined) process.exit(0);

const n = Number(arg);
if (Number.isNaN(n)) process.exit(0);

const max = Math.floor(n);
if (max < 0) process.exit(0);

for (let i = 0; i <= max; i += 1) {
	if (i % 2 === 0) console.log(i);
}


