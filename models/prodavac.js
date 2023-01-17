import { pool } from "./database.js";

export async function selectAll() {
  const [rows] = await pool.query("SELECT * FROM `prodavac`");
  return rows;
}
export async function selectSingleProdavac(id) {
  const [rows] = await pool.query("SELECT * FROM `prodavac` WHERE ID = ?", [
    id,
  ]);
  return rows[0];
}
export async function insert(ime, prezime, email, password) {
  const row = await pool.query(
    `INSERT INTO Prodavac ( Ime, Prezime, Email, Password)
      VALUES (?, ?, ?, ?)`,
    [ime, prezime, email, password]
  );
  return selectSingleProdavac(row[0].insertId);
}

export async function update(id, ime, prezime, email, password) {
  const row = await pool.query(
    `UPDATE prodavac SET Ime = ?, Prezime = ?, Email = ?, Password = ? WHERE id = ?`,
    [ime, prezime, email, password, id]
  );

  return selectSingleProdavac(id);
}

export async function deleteSingle(id) {
  const [rows] = await pool.query("DELETE FROM `prodavac` WHERE ID = ?", [id]);
  return rows[0];
}
