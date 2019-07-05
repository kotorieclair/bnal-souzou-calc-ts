import { Skills } from '~/store/data'

export const CRITICAL_LABEL = '急所攻撃率'
export const HIT_LABEL = '命中率'
export const KOURIN_LABEL = '降臨上昇率'

export const CRITICAL_SUFFIX = '%'
export const HIT_SUFFIX = '%'
export const KOURIN_SUFFIX = '%'

export const CRITICAL = 1
export const HIT = 2
export const KOURIN = 3

const skills: Skills = {
  [CRITICAL]: {
    id: CRITICAL,
    name: CRITICAL_LABEL,
    suffix: '%',
  },
  [HIT]: {
    id: HIT,
    name: HIT_LABEL,
    suffix: '%',
  },
  [KOURIN]: {
    id: KOURIN,
    name: KOURIN_LABEL,
    suffix: '%',
  },
}

export default skills
