import { add } from "./utils/add";

test('return 0 for an empty string', () => {
    expect(add("")).toBe(0);
})
