import {
  selectAll,
  selectSingleProdavac,
  insert,
  update,
  deleteSingle,
} from "../models/prodavac.js";

export async function selectAllReq(req, res) {
  if (!req) {
    console.log("ne postoji");
  }

  const prodavac = await selectAll();

  res.send(prodavac);
}

export async function insertReq(req, res) {
  if (!req) {
    console.log("ne postoji");
  }

  const { ime, prezime, email, password } = req.body;

  const prodavci = await selectAll();

  for (let prodavac of prodavci) {
    if (prodavac.email == email) {
      res.send({ status: false });
      return;
    }
  }

  const sqlResponse = await insert(ime, prezime, email, password);

  res.send({ status: true, prodavac: sqlResponse });
}

// export async function registerReq(req, res) {
//   if (!req) {
//     console.log("ne postoji");
//   }

//   const { ime, prezime, email, password } = req.body;

//   const prodavci = await selectAll();

//   for (let prodavac of prodavci) {
//     if (prodavac.email === email) {
//       res.send({ status: false });
//       return;
//     }
//   }

//   const sqlResponse = await insert(ime, prezime, email, password);

//   res.send({ status: true, sqlResponse });
// }
export async function updateReq(req, res) {
  if (!req) {
    console.log("ne postoji");
  }

  const { id, ime, prezime, email, password } = req.body;

  const sqlResponse = await update(id, ime, prezime, email, password);
  res.send(sqlResponse);
}
export async function deleteReq(req, res) {
  if (!req) {
    console.log("ne postoji");
  }

  await deleteSingle(req.body.id);
  res.send("Success");
}

export async function loginReq(req, res) {
  if (!req) {
    console.log("err");
  }
  const { email, password } = req.body;
  const prodavci = await selectAll();
  //console.log(prodavci);
  for (let prodavac of prodavci) {
    if (prodavac.email == email) {
      if (prodavac.password === password) {
        res.send({ status: true, prodavac: prodavac });
        return;
      }
    }
  }
  res.send({ status: false });
}
