import { validateTitle } from "../validateTitle"

// title should not be empty
// title should be not above 45 chars (longest word in dictionary)
// title should have no numbers
// title can have uppercase letters
// title can have uppercase and lowercase letters
// title can have uppercase,lowercase, and a number

test("returns false for an empty title", () => {
  expect(validateTitle("")).toBe(false)
})

test("returns false for title above 45 chars", () => {
  expect(
    validateTitle(
      "Lopadotemachoselachogaleokranioleipsanodrimhypotrimmatosilphiokarabomelitokatakechymenokichlepikossyphophattoperisteralektryonoptekephalliokigklopeleiolagosiosiraiobaphtraganopterygon"
    )
  ).toBe(false)
})

test("returns true for title under or equal to 45 chars", () => {
  expect(validateTitle("superpower")).toBe(true)
})
test("returns false for title with a number", () => {
  expect(validateTitle("superp0w3r")).toBe(false)
})

test("returns true for title with all uppercase", () => {
  expect(validateTitle("SUPERPOWER")).toBe(true)
})

test("returns true for title with all lowercase", () => {
  expect(validateTitle("superpower")).toBe(true)
})

test("returns true for title with one uppercase and rest lowercase", () => {
  expect(validateTitle("Superpower")).toBe(true)
})

test("returns false for title with ALL UPPERCASE with a number", () => {
  expect(validateTitle("SUPERP0W3R")).toBe(false)
})

test("returns false for title with all numbers", () => {
  expect(validateTitle("1234567890")).toBe(false)
})

test("returns false for title with all numbers", () => {
  expect(validateTitle("1234567890")).toBe(false)
})

test("returns false for title with numbers above 45 chars", () => {
  expect(
    validateTitle(
      "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"
    )
  ).toBe(false)
})
