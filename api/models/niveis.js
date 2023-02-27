"use strict";
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define(
    "Niveis",
    {
      desc_nivel: DataTypes.STRING,
    },
    {}
  );
  Niveis.associate = function (models) {
    Niveis.hasMany(models.Turmas, {
      foreignKey: "nivel_id",
    });
  };
  return Niveis;
};
