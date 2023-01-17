import { pool } from "./database.js";

export async function selectAll() {
  const [rows] = await pool.query("SELECT * FROM `potrosac`");
  return rows;
}
export async function selectSinglePotrosac(id) {
  const [rows] = await pool.query("SELECT * FROM `potrosac` WHERE ID = ?", [
    id,
  ]);
  return rows[0];
}
export async function insert(
  ime,
  prezime,
  email,
  broj_telefona,
  adresa,
  grad,
  firma,
  pozicija,
  prodavac_id
) {
  const row = await pool.query(
    "INSERT INTO `potrosac`(`Ime`, `Prezime`, `Email`, `broj_telefona`, `adresa`, `grad`, `firma`, `pozicija`, `prodavac_id`) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      ime,
      prezime,
      email,
      broj_telefona,
      adresa,
      grad,
      firma,
      pozicija,
      prodavac_id,
    ]
  );
  return selectSinglePotrosac(row[0].insertId);
}

export async function update(
  ime,
  prezime,
  email,
  broj_telefona,
  adresa,
  grad,
  firma,
  pozicija,
  prodavac_id,
  id
) {
  const row = await pool.query(
    `
    UPDATE Potrosac SET 
    Ime = ?,
    Prezime = ?,
    Email = ?,
    broj_telefona = ?,
    adresa = ?,
    grad = ?,
    firma = ?,
    pozicija = ?

    WHERE id = ?
`,
    [ime, prezime, email, broj_telefona, adresa, grad, firma, pozicija, id]
  );

  return selectSinglePotrosac(id);
}

export async function deleteSingle(id) {
  const [rows] = await pool.query("DELETE FROM `potrosac` WHERE ID = ?", [id]);
  return rows[0];
}
