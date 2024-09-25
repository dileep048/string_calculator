export function add(numbers: string) {
    if (numbers === "") return 0;

    let delimiter: RegExp | string = /[\n,]/;

    if (numbers.startsWith("//")) {
        delimiter = numbers[2];
        numbers = numbers.slice(4);
    }

    // if negative numbers throw error
    const negatives = numbers.split(delimiter).filter(num => parseInt(num, 10) < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numbers.split(delimiter).reduce((sum, num) => sum + parseInt(num, 10), 0);
}