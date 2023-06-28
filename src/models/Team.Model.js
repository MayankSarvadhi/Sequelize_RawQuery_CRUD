export default (sequelize, DataTypes) => {
  const teamSchema = sequelize.define("TeamsTable", {
    Name: {
      type: DataTypes.STRING,
      allowNull: [false,"Name Must be Provided"],
      unique: true,
    },
    CoachName: {
      type: DataTypes.STRING,
      allowNull: [false, "Coach Must be Provided"],
    },
  });
  return teamSchema;
};
