import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

import teamSchema from "./Team.Model.js"
import playerSchema from "./Player.Model.js"


export const db = { sequelize, DataTypes };

db.teamSchema = teamSchema(sequelize,DataTypes);
db.playerSchema = playerSchema(sequelize,DataTypes);



// db.sequelize.sync({ force : false });
