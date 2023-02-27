const database = require("../models");

class PessoasController {
  static async getAllPessoas(req, res) {
    try {
      const allPessoas = await database.Pessoas.findAll();
      return res.status(200).json(allPessoas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getAllPessoasById(req, res) {
    const id = req.params.id;
    console.log("==> ID - ", id);

    try {
      const allPessoasById = await database.Pessoas.findOne({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json(allPessoasById);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createPessoa(req, res) {
    const newPessoa = req.body;

    try {
      const newPessoaCreated = await database.Pessoas.create(newPessoa);
      return res.status(201).json(newPessoaCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updatePessoa(req, res) {
    const pessoaDatas = req.body;
    try {
      const updatePessoa = await database.Pessoas.update(pessoaDatas, {
        where: { id: Number(pessoaDatas.id) },
      });
      if (updatePessoa) {
        const getPessoa = await database.Pessoas.findOne({
          where: {
            id: Number(pessoaDatas.id),
          },
        });
        return res.status(201).json(getPessoa);
      } else {
        return res
          .status(400)
          .json({ success: false, message: "error on update" });
      }
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deletePessoa(req, res) {
    const id = req.params.id;

    try {
      const deletePessoa = await database.Pessoas.destroy({
        where: { id: Number(id) },
      });
      if (deletePessoa) {
        return res
          .status(200)
          .json({ success: true, message: `success on delete id: ${id}` });
      }
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getPessoasByMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const getPessoaByMatricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_Id: Number(estudanteId),
        },
      });
      return res.status(200).json(getPessoaByMatricula);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createMatricula(req, res) {
    const { estudanteId } = req.params;
    const newMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const createMatricula = await database.Matriculas.create(newMatricula);
      return res.status(200).json(createMatricula);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const novasInfos = req.body;

    try {
      const updateMatricula = await database.Matriculas.update(novasInfos, {
        where: { id: Number(matriculaId), estudante_Id: Number(estudanteId) },
      });
      if (updateMatricula) {
        const getMatricula = await database.Matriculas.findOne({
          where: {
            id: Number(matriculaId),
          },
        });
        return res.status(201).json(getMatricula);
      } else {
        return res
          .status(400)
          .json({ success: false, message: "error on update" });
      }
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteMatricula(req, res) {
    const { matriculaId, estudanteId } = req.params;

    console.log("AAAAAAAAAAAa", matriculaId);

    try {
      const deleteMatricula = await database.Matriculas.destroy({
        where: { id: Number(matriculaId), estudante_Id: Number(estudanteId) },
      });
      if (deleteMatricula) {
        return res.status(200).json({
          success: true,
          message: `success on delete id: ${matriculaId}`,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: `error on delete id: ${matriculaId}`,
        });
      }
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = PessoasController;
