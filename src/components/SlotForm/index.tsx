import * as R from 'ramda'
import * as React from 'react'
import { Props as SelectInputProps } from '~/components/SelectInput'
import {
  BaseStatus,
  Bungo,
  BungoId,
  Card,
  CardId,
  CardLv,
  RingId,
  StateContext as DataStateContext,
  WEAPON_TYPE_ALCHEMY,
  WEAPON_TYPE_BOW,
  WEAPON_TYPE_BOW_ALT,
  WEAPON_TYPE_FIGHT,
} from '~/store/data'
import {
  actions as slotActions,
  DispatchContext as SlotDispatchContext,
  StateContext as SlotStateContext,
} from '~/store/slots'
import {
  bungoWeaponLabels,
  cardRareLabels,
  INACCURATE_SIGN,
  WEAPON_OPTION_BOW,
  WEAPON_OPTION_SPECIAL,
} from './constants'
import { useDebounce } from './hooks'
import {
  BungoInput,
  CardInput,
  SlotFormContainer,
  SlotFormNumberInput,
  SlotFormSelectInput,
  StatusInput,
  StatusInputItem,
  StatusInputLabel,
  StatusInputName,
} from './styles'
import { Props } from './types'

export * from './types'

const SlotForm: React.FC<Props> = ({ className, slotId }: Props) => {
  const { bungos, cards, weapons, rings } = React.useContext(DataStateContext)
  const { [slotId]: state } = React.useContext(SlotStateContext)
  const dispatch = React.useContext(SlotDispatchContext)

  const sendAnalytics = (action: string, label: string) => {
    if (process.env.NODE_ENV === 'production') {
      gtag('event', action, {
        event_category: 'input',
        event_label: `${label}/${slotId}`,
      })
    }
  }

  const handleBungoChange = (id: BungoId) => {
    dispatch(slotActions.setBungo(slotId, id))
    dispatch(slotActions.setRing(slotId, null))
    sendAnalytics('bungo', '文豪')
  }

  const handleRingChange = (id: RingId) => {
    dispatch(slotActions.setRing(slotId, id))
    sendAnalytics('ring', '指環・武器種')
  }

  const handleCardIdChange = (id: CardId) => {
    dispatch(slotActions.setCardId(slotId, id))
    if (state.cardLv === null || !cards[id].status[state.cardLv]) {
      const lv = parseInt(Object.keys(cards[id].status)[0], 10)
      dispatch(slotActions.setCardLv(slotId, lv as CardLv))
    }
    sendAnalytics('cardId', '装像')
  }

  const handleCardLvChange = (lv: CardLv) => {
    dispatch(slotActions.setCardLv(slotId, lv))
    sendAnalytics('cardLv', '装像Lv')
  }

  const handleTechChange = (tech: BaseStatus['tech']) => {
    dispatch(slotActions.setTech(slotId, tech))
  }

  const sendTechAnalytics = () => {
    sendAnalytics('baseStatus', 'ステータス:技術')
  }

  const handleGeniusChange = (genius: BaseStatus['genius']) => {
    dispatch(slotActions.setGenius(slotId, genius))
  }

  const sendGeniusAnalytics = () => {
    sendAnalytics('baseStatus', 'ステータス:天才')
  }

  const handleBeautyChange = (beauty: BaseStatus['beauty']) => {
    dispatch(slotActions.setBeauty(slotId, beauty))
  }

  const sendBeautyAnalytics = () => {
    sendAnalytics('baseStatus', 'ステータス:美')
  }

  const handleThemeChange = (theme: BaseStatus['theme']) => {
    dispatch(slotActions.setTheme(slotId, theme))
  }

  const sendThemeAnalytics = () => {
    sendAnalytics('baseStatus', 'ステータス:主題')
  }

  const handleTruthChange = (truth: BaseStatus['truth']) => {
    dispatch(slotActions.setTruth(slotId, truth))
  }

  const sendTruthAnalytics = () => {
    sendAnalytics('baseStatus', 'ステータス:真実')
  }

  useDebounce(state.status.tech, sendTechAnalytics)
  useDebounce(state.status.genius, sendGeniusAnalytics)
  useDebounce(state.status.beauty, sendBeautyAnalytics)
  useDebounce(state.status.theme, sendThemeAnalytics)
  useDebounce(state.status.truth, sendTruthAnalytics)

  const bungoOptions: SelectInputProps['options'] = React.useMemo(() => {
    return bungoWeaponLabels.map(({ id, label }) => {
      const weaponFilter =
        id === WEAPON_OPTION_BOW
          ? [WEAPON_TYPE_BOW, WEAPON_TYPE_BOW_ALT]
          : id === WEAPON_OPTION_SPECIAL
          ? [WEAPON_TYPE_ALCHEMY, WEAPON_TYPE_FIGHT]
          : [id]
      return {
        label,
        optgroup: Object.values(bungos)
          .filter((bungo: Bungo) => weaponFilter.includes(bungo.weapon))
          .map((bungo: Bungo) => ({ label: bungo.name, value: bungo.id })),
      }
    })
  }, [Object.keys(bungos).length])

  const ringOptions: SelectInputProps['options'] = React.useMemo(() => {
    if (!state.bungo) {
      return []
    }
    const currentBungo = bungos[state.bungo]
    return [
      {
        label: `${weapons[currentBungo.weapon].name}（指環なし）`,
        value: 0,
      },
      ...(currentBungo.rings
        ? currentBungo.rings.map(ring => ({
            label: `${weapons[rings[ring].weapon].name}${
              !rings[ring].isAccurate ? INACCURATE_SIGN : ''
            }`,
            value: ring,
          }))
        : []),
    ]
  }, [state.bungo])

  const cardIdOptions: SelectInputProps['options'] = React.useMemo(() => {
    return cardRareLabels.map(({ id, label }) => ({
      label,
      optgroup: Object.values(cards)
        .filter((card: Card) => card.rare === id)
        .map((card: Card) => ({ label: card.name, value: card.id })),
    }))
  }, [Object.keys(cards).length])

  const cardLvOptions: SelectInputProps['options'] = React.useMemo(() => {
    if (!state.cardId) {
      return []
    }
    const selectedCardStatus = cards[state.cardId].status
    return Object.values(
      R.mapObjIndexed(
        (status: BaseStatus | null, lv) => ({
          label: `Lv.${lv}${!status ? INACCURATE_SIGN : ''}`,
          value: parseInt(lv, 10),
        }),
        selectedCardStatus
      )
    )
  }, [state.cardId])

  return (
    <SlotFormContainer className={className}>
      <BungoInput>
        <SlotFormSelectInput
          options={bungoOptions}
          title="文豪"
          selected={state.bungo}
          onChange={handleBungoChange}
        />
        {state.bungo ? (
          <SlotFormSelectInput
            options={ringOptions}
            title="指環・武器種"
            selected={state.ring || 0}
            onChange={handleRingChange}
          />
        ) : null}
      </BungoInput>
      <CardInput>
        <SlotFormSelectInput
          options={cardIdOptions}
          title="装像"
          selected={state.cardId}
          onChange={handleCardIdChange}
        />
        {state.cardId ? (
          <SlotFormSelectInput
            options={cardLvOptions}
            title="レベル"
            selected={state.cardLv}
            onChange={handleCardLvChange}
          />
        ) : null}
      </CardInput>
      <StatusInputLabel>文豪のステータス（未入力可）</StatusInputLabel>
      <StatusInput>
        <StatusInputItem>
          <StatusInputName>技術</StatusInputName>
          <SlotFormNumberInput
            value={state.status.tech}
            onInput={handleTechChange}
          />
        </StatusInputItem>
        <StatusInputItem>
          <StatusInputName>天才</StatusInputName>
          <SlotFormNumberInput
            value={state.status.genius}
            onInput={handleGeniusChange}
          />
        </StatusInputItem>
        <StatusInputItem>
          <StatusInputName>美</StatusInputName>
          <SlotFormNumberInput
            value={state.status.beauty}
            onInput={handleBeautyChange}
          />
        </StatusInputItem>
        <StatusInputItem>
          <StatusInputName>主題</StatusInputName>
          <SlotFormNumberInput
            value={state.status.theme}
            onInput={handleThemeChange}
          />
        </StatusInputItem>
        <StatusInputItem>
          <StatusInputName>真実</StatusInputName>
          <SlotFormNumberInput
            value={state.status.truth}
            onInput={handleTruthChange}
          />
        </StatusInputItem>
      </StatusInput>
    </SlotFormContainer>
  )
}

export default SlotForm
