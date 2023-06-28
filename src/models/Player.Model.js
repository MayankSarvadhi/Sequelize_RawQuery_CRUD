
export default (sequelize, DataTypes) => {
    const playerSchema = sequelize.define("PlayerTable", {
        Name: {
            type: DataTypes.STRING,
            allowNull: [false, "Name Must Be Provided"],
        },
        Type: {
            type: DataTypes.ENUM,
            allowNull: [false, "Type Must be Provided"],
            values: ["batsman", "bowler", "all-rounder"]
        },
        Age: {
            type: DataTypes.BIGINT,
            allowNull: [false, "Age Must be Provided"]
        }
    });
    return playerSchema;
};
