import { add } from "./utils/add";

test('return 0 for an empty string', () => {
    expect(add("")).toBe(0);
})

test('return number itself if 1 numbers', () => {
    expect(add("1")).toBe(1)
})

test('return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3)
})

test('any amount of numbers return sum', () => {
    expect(add("1,2,3,4")).toBe(10);
})

test('handle new lines between number', () => {
    expect(add("1\n2,3")).toBe(6);
})

test('support custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
})
