import { appSchema } from "@nozbe/watermelondb"

import { skillSchema } from "./skillShema"

export const schemas = appSchema({
  version: 1,
  tables: [ skillSchema ]
})