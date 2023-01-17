import { pool } from "./database.js";

export async function selectAll() {
  const [rows] = await pool.query("SELECT * FROM Prodaja");
  return rows;
}
export async function selectSingle(id) {
  const [rows] = await pool.query("SELECT * FROM Prodaja WHERE id  = ?", [id]);
  return rows[0];
}
export async function insert(kupac_id, prodavac_id, opis, cena) {
  const row = await pool.query(
    `INSERT INTO prodaja (kupac_id, prodavac_id,opis,cena) VALUES (?, ?,?,?)`,
    [kupac_id, prodavac_id, opis, cena]
  );
  return selectSingle(row[0].insertId);
}

export async function update(id, kupac_id, prodavac_id, opis, cena) {
  const row = await pool.query(
    `UPDATE prodaja SET kupac_id = ?, prodavac_id = ?, opis = ?, cena = ? WHERE id = ?`,
    [kupac_id, prodavac_id, id, opis, cena]
  );

  return selectSingle(id);
}

export async function deleteSingle(id) {
  const [rows] = await pool.query("DELETE FROM `Prodaja` WHERE id = ?", [id]);
  return rows[0];
}

export async function getStatistika(
  datum_prodaje_od,
  datum_prodaje_do,
  prodavac_id
) {
  const [rows] = await pool.query(
    `SELECT *,prodavac.ime as imeProdavca,prodavac.prezime as prezimeProdavca,potrosac.ime as imePotrosaca, 
    potrosac.prezime as prezimePotrosaca,potrosac.adresa as adresaPotrosaca,potrosac.grad as gradPotrosaca, 
    potrosac.broj_telefona as brojPotrosaca 
    FROM prodaja 
    join potrosac on prodaja.kupac_id = potrosac.id 
    join prodavac on prodaja.prodavac_id = prodavac.id 
  
    where prodaja.datum_prodaje >= ? AND prodaja.datum_prodaje <= ? AND prodaja.prodavac_id = ?;`,
    [datum_prodaje_od, datum_prodaje_do, prodavac_id]
  );

  return rows;
}
