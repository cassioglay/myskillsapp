import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { schemas } from "./schemas"; 
import { SkillModel } from "../model/skillModel";

const adapter = new SQLiteAdapter({
  schema: schemas
})

export const database = new Database({ //Responsavel pela conexão com o banco
  adapter,
  modelClasses: [SkillModel]
})