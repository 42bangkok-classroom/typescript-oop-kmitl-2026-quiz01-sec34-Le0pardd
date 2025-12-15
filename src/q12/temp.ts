const tempArg: string | undefined = process.argv[2];

if (tempArg === undefined) {
    console.error("Error: Please provide a temperature (number) argument.");
    process.exit(1);
}

const temp = Number(tempArg);
if (Number.isNaN(temp)) {
    console.error("Error: Temperature must be a valid number.");
    process.exit(1);
}

if (temp > 30) {
    console.log("Hot");
} else {
    console.log("Normal");
}