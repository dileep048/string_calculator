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
