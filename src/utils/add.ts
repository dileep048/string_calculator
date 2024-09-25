export function add(numbers: string) {
    if(numbers === "") return 0;
    return numbers.split(/[\n,]/).reduce((sum,num) => sum + parseInt(num, 10), 0);
}