import express from "express";
export const router = express.Router();
import multer from "multer";
import cors from "cors";

import * as potrosac from "../controllers/potrosac.js";
import * as prodaja from "../controllers/prodaja.js";
import * as prodavac from "../controllers/prodavac.js";

router.use(express.static("./methods-public"));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use(cors());

router.get("/potrosac/getAll", (req, res) => {
  potrosac.selectAllReq(req, res);
});
router.post("/potrosac/insert", (req, res) => {
  console.log("ins");
  potrosac.insertReq(req, res);
});
router.post("/potrosac/delete", (req, res) => {
  potrosac.deleteReq(req, res);
});
router.post("/potrosac/update", (req, res) => {
  potrosac.updateReq(req, res);
});
// // ====
router.get("/prodaja/getAll", (req, res) => {
  prodaja.selectAllReq(req, res);
});
router.post("/prodaja/insert", (req, res) => {
  prodaja.insertReq(req, res);
});
router.post("/prodaja/delete", (req, res) => {
  prodaja.deleteReq(req, res);
});
router.post("/prodaja/update", (req, res) => {
  prodaja.updateReq(req, res);
});
router.post("/prodaja/statistika", (req, res) => {
  prodaja.getStatistikaReq(req, res);
});

// // ====
router.get("/prodavac/getAll", (req, res) => {
  prodavac.selectAllReq(req, res);
});
router.post("/prodavac/insert", (req, res) => {
  prodavac.insertReq(req, res);
});
router.post("/prodavac/delete", (req, res) => {
  prodavac.deleteReq(req, res);
});
router.post("/prodavac/update", (req, res) => {
  prodavac.updateReq(req, res);
});
router.post("/prodavac/login", (req, res) => {
  prodavac.loginReq(req, res);
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ status: false });
});
