const arg = process.argv[2];
if (!arg) process.exit(0);

const n = Number(arg);
if (Number.isNaN(n)) process.exit(0);

const size = Math.floor(n);
if (size <= 0) process.exit(0);

for (let row = 1; row <= size; row++) {
  const ch = row % 2 === 1 ? '1' : '0';
  console.log(ch.repeat(size));
}
