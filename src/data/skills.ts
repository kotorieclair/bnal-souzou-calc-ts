import { Skills } from '~/store/data'

export const CRITICAL = 1
export const HIT = 2
export const KOURIN = 3

const skills: Skills = {
  [CRITICAL]: {
    id: CRITICAL,
    name: '急所攻撃率',
    suffix: '%',
  },
  [HIT]: {
    id: HIT,
    name: '命中率',
    suffix: '%',
  },
  [KOURIN]: {
    id: KOURIN,
    name: '降臨上昇率',
    suffix: '%',
  },
}

export default skills
