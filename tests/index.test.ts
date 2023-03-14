import request from "supertest"
import { app } from "../index"

describe("GET /words", () => {
  describe("should return all words", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/words")
      expect(response.statusCode).toBe(200)
      expect(response.body.length).toBeGreaterThan(0)
    })

    describe("GET /words/:id", () => {
      it("should return a specific word", async () => {
        const res = await request(app).get("/words/2")
        expect(res.statusCode).toBe(200)
        expect(res.body.id).toBe(2)
      })
    })
  })
})
