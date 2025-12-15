const inputString: string | undefined = process.argv[2];

if (inputString === undefined) {
 
    console.log("No @");
} 
else if (inputString.includes('@')) {
    console.log("Has @");
} else {
    console.log("No @");
}