import { actions, actionTypes } from '~/store/slots'

describe('store/slots/actions', () => {
  test('setBungo() returns correct actionType and payload', () => {
    expect(actions.setBungo(1, 1)).toEqual({
      type: actionTypes.SET_BUNGO,
      payload: { slotId: 1, bungoId: 1 },
    })
  })

  test('setRing() returns correct actionType and payload', () => {
    expect(actions.setRing(2, 1)).toEqual({
      type: actionTypes.SET_RING,
      payload: { slotId: 2, ringId: 1 },
    })
  })

  test('setCardId() returns correct actionType and payload', () => {
    expect(actions.setCardId(1, 2)).toEqual({
      type: actionTypes.SET_CARD_ID,
      payload: { slotId: 1, cardId: 2 },
    })
  })

  test('setCardLv() returns correct actionType and payload', () => {
    expect(actions.setCardLv(2, 2)).toEqual({
      type: actionTypes.SET_CARD_LV,
      payload: { slotId: 2, cardLv: 2 },
    })
  })

  test('setTech() returns correct actionType and payload', () => {
    expect(actions.setTech(3, 40)).toEqual({
      type: actionTypes.SET_TECH,
      payload: { slotId: 3, tech: 40 },
    })
  })

  test('setGenius() returns correct actionType and payload', () => {
    expect(actions.setGenius(3, 43)).toEqual({
      type: actionTypes.SET_GENIUS,
      payload: { slotId: 3, genius: 43 },
    })
  })

  test('setBeauty() returns correct actionType and payload', () => {
    expect(actions.setBeauty(3, 48)).toEqual({
      type: actionTypes.SET_BEAUTY,
      payload: { slotId: 3, beauty: 48 },
    })
  })

  test('setTheme() returns correct actionType and payload', () => {
    expect(actions.setTheme(4, 40)).toEqual({
      type: actionTypes.SET_THEME,
      payload: { slotId: 4, theme: 40 },
    })
  })

  test('setTruth() returns correct actionType and payload', () => {
    expect(actions.setTruth(4, 45)).toEqual({
      type: actionTypes.SET_TRUTH,
      payload: { slotId: 4, truth: 45 },
    })
  })
})
