import { QueryTypes } from "sequelize";
import { db } from "../models/index.model.js";
import { AppError } from "../utils/AppError.js";

const insert = async (req, res, next) => {
    const { body: { Name, Type, Age } } = req;
    const query = `INSERT INTO "PlayerTables" ("Name", "Type","Age","createdAt","updatedAt") VALUES (:Name, :Type , :Age,NOW(),NOW()) RETURNING *`;
    const [result, metadata] = await db.sequelize.query(query, {
        type: QueryTypes.INSERT,
        replacements: { Name, Type, Age }
    });
    return res.status(201).json({ Success: true, data: result, Message: "Data SuccessFully insert" });
}

const destroys = async (req, res, next) => {
    const { params: { id } } = req;
    const query = `DELETE FROM "PlayerTables" WHERE "id" = :id RETURNING *`;
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
    const { params: { id }, body: { Name, Type, Age } } = req;
    const query = `UPDATE "PlayerTables" SET "Name" = :Name ,"Type" = :Type, "Age" = :Age WHERE "id" = :id RETURNING *`;
    const [result, metadata] = await db.sequelize.query(query, {
        type: QueryTypes.UPDATE,
        replacements: { Name, Type, Age, id }
    });
    if (!result[0] || result[0] === undefined) {
        return next(new AppError(`This id = ${id} is Not Exists`, 404));
    } else {
        return res.status(200).json({ Success: true, data: result, Message: "Data SuccessFully Update" });
    }
}

export const PlayerController = {
    insert,
    destroys,
    updatesData
};
