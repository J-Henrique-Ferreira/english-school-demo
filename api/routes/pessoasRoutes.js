const { Router } = require("express");
const PessoaController = require("../controllers/PessoasController.js");
const PessoaMiddlewares = require("../middlewares/Pessoas");
const router = Router();

router
  .get("/pessoas", PessoaController.getAllPessoas)
  .get("/pessoas/:id", PessoaController.getAllPessoasById)
  .post(
    "/pessoas/",
    PessoaMiddlewares.createNewPessoa,
    PessoaController.createPessoa
  )
  .put(
    "/pessoas",
    PessoaMiddlewares.updatePessoa,
    PessoaMiddlewares.createNewPessoa,
    PessoaController.updatePessoa
  )
  .delete("/pessoas/:id", PessoaController.deletePessoa)

  //matricula
  .get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.getPessoasByMatricula
  )
  .post("/pessoas/:estudanteId/matricula", PessoaController.createMatricula)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.updateMatricula
  )
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.deleteMatricula
  );
module.exports = router;
