(function main() {
	const raw: string = process.argv[2] ?? "";
	const color = raw.toLowerCase();

	if (color === "red") {
		console.log("Stop");
		return;
	}

	if (color === "yellow") {
		console.log("Caution");
		return;
	}

	if (color === "green") {
		console.log("Go");
		return;
	}

	console.log("Unknown");
})();

