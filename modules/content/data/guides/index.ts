import type { Guide } from '@/modules/content/domain/guide'

import { estudarGuides } from './estudar'
import { pesquisaIaGuides } from './pesquisa-ia'
import { enemGuides } from './enem'
import { ensinoSuperiorGuides } from './ensino-superior'
import { carreiraGuides } from './carreira'
import { inclusaoGuides } from './inclusao'

export const guides: Guide[] = [
  ...estudarGuides,
  ...pesquisaIaGuides,
  ...enemGuides,
  ...ensinoSuperiorGuides,
  ...carreiraGuides,
  ...inclusaoGuides,
]
