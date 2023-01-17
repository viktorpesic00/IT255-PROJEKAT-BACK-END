import { pool } from "./database.js";

export async function getAllProizvod() {
  const [rows] = await pool.query("SELECT * FROM proizvod");
  return rows;
}
export async function getSingleProizvod(id) {
  const [rows] = await pool.query("SELECT * FROM proizvod WHERE id  = ?", [id]);
  return rows[0];
}
export async function createProizvod(Proizvod) {
  const row = await pool.query(
    `INSERT INTO proizvod (Ime, Cena) VALUES (?, ?)`,
    ["", ""]
  );
  return getSingleProizvod(row[0].insertId);
}

export async function updateProizvod(id) {
  await copyUpdatedFRL(id);
  const row = await pool.query(
    `UPDATE proizvod SET Ime = ?, Cena = ? WHERE id = ?`,
    ["", "", id]
  );

  return getSingleProizvod(id);
}

export async function deleteProizvod(id) {
  await copyDeletedFRL(id);
  const [rows] = await pool.query("DELETE FROM `Proizvod` WHERE ID = ?", [id]);
  return rows[0];
}
