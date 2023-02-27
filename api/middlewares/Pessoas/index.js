const erroMessage = {
  success: false,
  message:
    "these parameters are mandatory: name: string, active:boolean, email: string, role:string",
};

class PessoaMiddlewares {
  static createNewPessoa(req, res, next) {
    const pessoasDatas = req.body;
    if (
      typeof pessoasDatas.nome !== "string" ||
      typeof pessoasDatas.ativo !== "boolean" ||
      typeof pessoasDatas.email !== "string" ||
      typeof pessoasDatas.role !== "string"
    ) {
      return res.status(400).send(erroMessage);
    }
    next();
  }

  static updatePessoa(req, res, next) {
    const pessoaDatas = req.body;
    if (typeof pessoaDatas.id !== "number" || typeof pessoaDatas.id === null) {
      return res
        .status(400)
        .send({ success: false, message: "the parameter id is required" });
    }
    next();
  }
}

module.exports = PessoaMiddlewares;
