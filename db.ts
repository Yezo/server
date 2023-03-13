// Imports
import mysql from "mysql2"
import "dotenv/config"

// MySQL Pool
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise()

//GET all words in the "words" database
export async function getWords() {
  const [rows] = await pool.query("SELECT * FROM words")
  console.log(rows)
  return rows
}

//GET a specific word in the "words" database by ID
//Destructure row to receive it back as an object instead of an object inside an array
//Avoid template literals since props is untrusted data so use ?,[props] instead
export async function getWord(id: Number) {
  const [rows] = await pool.query(
    `
    SELECT * 
    FROM words
    WHERE id = ?
    `,
    [id]
  )
  return rows[0]
}

//Create word
export async function createWord(title: string, definition: string) {
  const [result] = await pool.query(
    `
    INSERT INTO words (title, definition)
    VALUES (?, ?)
    `,
    [title, definition]
  )
  const id = result.insertId
  return getWord(id)
}

//Delete word
export async function deleteWord(id: Number) {
  const [rows] = await pool.query(
    `
      DELETE FROM words
      WHERE id = ?
      `,
    [id]
  )
  return rows[0]
}
