import { pool } from "../models/database.js";

export async function selectAll() {
  const [rows] = await pool.query("SELECT * FROM ProdajaProizvoda");
  return rows;
}
export async function getSingleProdajaProizvoda(id) {
  const [rows] = await pool.query(
    "SELECT * FROM ProdajaProizvoda WHERE id  = ?",
    [id]
  );
  return rows[0];
}
export async function createProdajaProizvoda(ProdajaProizvoda) {
  const row = await pool.query(
    `INSERT INTO prodajaproizvoda (prodaja_id, proizvod_id) VALUES (?, ?)"`,
    ["", ""]
  );
  return getSingleProdajaProizvoda(row[0].insertId);
}

export async function updateProdajaProizvoda(id) {
  await copyUpdatedFRL(id);
  const row = await pool.query(
    `UPDATE prodajaproizvoda SET prodaja_id = ?, proizvod_id = ? WHERE id = ?`,
    ["", "", "", id]
  );

  return getSingleProdajaProizvoda(id);
}

export async function deleteProdajaProizvoda(id) {
  await copyDeletedFRL(id);
  const [rows] = await pool.query(
    "DELETE FROM `ProdajaProizvoda` WHERE ID = ?",
    [id]
  );
  return rows[0];
}
