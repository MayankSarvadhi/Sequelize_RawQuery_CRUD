import { QueryTypes } from "sequelize";
import { db } from "../models/index.model.js";
import { AppError } from "../utils/AppError.js";


const insert = async (req, res, next) => {
  const { body: { Name, CoachName } } = req;
  const query = `INSERT INTO "TeamsTables" ("Name", "CoachName","createdAt","updatedAt") VALUES (:Name, :CoachName,NOW(),NOW()) RETURNING *`;
  const [result, metadata] = await db.sequelize.query(query, {
    type: QueryTypes.INSERT,
    replacements: { Name, CoachName }
  });
  return res.status(201).json({ Success: true, data: result, Message: "Data SuccessFully insert" });
}

const destroys = async (req, res, next) => {
  const { params: { id } } = req;
  const query = `DELETE FROM "TeamsTables" WHERE "id" = :id RETURNING *`;
  const [result, metadata] = await db.sequelize.query(query, {
    type: QueryTypes.DELETE,
    replacements: { id }
  });
  if (!result || result === undefined) {
    return next(new AppError(`This id = ${id} is Not Exists`, 404));
  } else {
    return res.status(200).json({ Success: true, data: result, Message: "Data SuccessFully Deleted" });
  }

}

const updatesData = async (req, res, next) => {
  const { params: { id }, body: { Name, CoachName } } = req;
  const query = `UPDATE "TeamsTables" SET "Name" = :Name ,"CoachName" = :CoachName WHERE "id" = :id RETURNING *`;
  const [result, metadata] = await db.sequelize.query(query, {
    type: QueryTypes.UPDATE,
    replacements: { Name, CoachName, id }
  });
  if (!result[0] || result[0] === undefined) {
    return next(new AppError(`This id = ${id} is Not Exists`, 404));
  } else {
    return res.status(200).json({ Success: true, data: result, Message: "Data SuccessFully Update" });
  }
}

export const TeamController = {
  insert,
  destroys,
  updatesData
};
