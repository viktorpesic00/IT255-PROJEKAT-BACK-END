import {
  selectAll,
  selectSinglePotrosac,
  insert,
  update,
  deleteSingle,
} from "../models/potrosac.js";

export async function selectAllReq(req, res) {
  const potrosac = await selectAll();

  res.send(potrosac);
}

export async function insertReq(req, res) {
  console.log("insertreq");

  const {
    ime,
    prezime,
    email,
    broj_telefona,
    adresa,
    grad,
    firma,
    pozicija,
    prodavac_id,
  } = req.body;

  const sqlResponse = await insert(
    ime,
    prezime,
    email,
    broj_telefona,
    adresa,
    grad,
    firma,
    pozicija,
    prodavac_id
  );
  res.send(sqlResponse);
}
export async function updateReq(req, res) {
  const {
    ime,
    prezime,
    email,
    broj_telefona,
    adresa,
    grad,
    firma,
    pozicija,
    prodavac_id,
    id,
  } = req.body;

  const sqlResponse = await update(
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
  );

  console.log("primljen odradjen vracen");
  res.send(sqlResponse);
}
export async function deleteReq(req, res) {
  await deleteSingle(req.body.id);
  res.send("Success");
}
