import {
  selectAll,
  selectSingle,
  insert,
  update,
  deleteSingle,
  getStatistika,
} from "../models/prodaja.js";

import { selectSinglePotrosac } from "../models/potrosac.js";

import { selectSingleProdavac } from "../models/prodavac.js";

export async function selectAllReq(req, res) {
  if (!req) {
    console.log("ne postoji");
  }

  const prodaja = await selectAll();

  res.send(prodaja);
}

export async function insertReq(req, res) {
  if (!req) {
    console.log("ne postoji");
  }

  const { kupac_id, prodavac_id, opis, cena } = req.body;

  const sqlResponse = await insert(kupac_id, prodavac_id, opis, cena);
  if (
    kupac_id !== null &&
    prodavac_id !== null &&
    opis !== null &&
    cena !== null
  ) {
    res.send({ status: true, sqlResponse });
  } else {
    res.send({ status: false });
  }
}

export async function updateReq(req, res) {
  if (!req) {
    console.log("ne postoji");
  }

  const { id, kupac_id, prodavac_id, opis, cena } = req.body;

  const sqlResponse = await update(id, kupac_id, prodavac_id, opis, cena);
  res.send(sqlResponse);
}
export async function deleteReq(req, res) {
  if (!req) {
    console.log("ne postoji");
  }

  await deleteSingle(req.body.id);
  res.send("Success");
}

export async function getStatistikaReq(req, res) {
  if (!req) {
    console.log("ne postoji");
  }

  const { datum_prodaje_od, datum_prodaje_do, prodavac_id } = req.body;

  const prodaje = await getStatistika(
    datum_prodaje_od,
    datum_prodaje_do,
    prodavac_id
  );

  console.log(req.body);
  console.log(prodaje);

  res.send(prodaje);
}
