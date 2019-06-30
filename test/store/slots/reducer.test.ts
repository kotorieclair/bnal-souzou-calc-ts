import { actionTypes, initialState, reducer, State } from '~/store/slots'

describe('store/slots/reducer', () => {
  test(`${actionTypes.SET_BUNGO} sets given bungoId`, () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_BUNGO,
        payload: { slotId: 1, bungoId: 1 },
      })
    ).toEqual({
      ...initialState,
      1: {
        ...initialState[1],
        bungo: 1,
      },
    })
  })

  test(`${actionTypes.SET_RING} sets given ringId`, () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_RING,
        payload: { slotId: 1, ringId: 2 },
      })
    ).toEqual({
      ...initialState,
      1: {
        ...initialState[1],
        ring: 2,
      },
    })
  })

  test(`${actionTypes.SET_CARD_ID} sets given cardId`, () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_CARD_ID,
        payload: { slotId: 2, cardId: 3 },
      })
    ).toEqual({
      ...initialState,
      2: {
        ...initialState[1],
        cardId: 3,
      },
    })
  })

  test(`${actionTypes.SET_CARD_LV} sets given cardLv`, () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_CARD_LV,
        payload: { slotId: 2, cardLv: 3 },
      })
    ).toEqual({
      ...initialState,
      2: {
        ...initialState[1],
        cardLv: 3,
      },
    })
  })

  test(`${actionTypes.SET_TECH} sets given tech`, () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_TECH,
        payload: { slotId: 3, tech: 48 },
      })
    ).toEqual({
      ...initialState,
      3: {
        ...initialState[1],
        status: {
          ...initialState[1].status,
          tech: 48,
        },
      },
    })
  })

  test(`${actionTypes.SET_GENIUS} sets given genius`, () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_GENIUS,
        payload: { slotId: 3, genius: 40 },
      })
    ).toEqual({
      ...initialState,
      3: {
        ...initialState[1],
        status: {
          ...initialState[1].status,
          genius: 40,
        },
      },
    })
  })

  test(`${actionTypes.SET_BEAUTY} sets given beauty`, () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_BEAUTY,
        payload: { slotId: 3, beauty: 50 },
      })
    ).toEqual({
      ...initialState,
      3: {
        ...initialState[1],
        status: {
          ...initialState[1].status,
          beauty: 50,
        },
      },
    })
  })

  test(`${actionTypes.SET_THEME} sets given theme`, () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_THEME,
        payload: { slotId: 4, theme: 45 },
      })
    ).toEqual({
      ...initialState,
      4: {
        ...initialState[1],
        status: {
          ...initialState[1].status,
          theme: 45,
        },
      },
    })
  })

  test(`${actionTypes.SET_TRUTH} sets given truth`, () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_TRUTH,
        payload: { slotId: 4, truth: 47 },
      })
    ).toEqual({
      ...initialState,
      4: {
        ...initialState[1],
        status: {
          ...initialState[1].status,
          truth: 47,
        },
      },
    })
  })

  test(`${
    actionTypes.COPY_SLOT
  } copies given from slotId values into given to slotId`, () => {
    const state: State = {
      ...initialState,
      1: {
        ...initialState[1],
        bungo: 15,
        cardId: 30,
        status: {
          ...initialState[1].status,
          genius: 45,
        },
      },
      3: {
        ...initialState[3],
        bungo: 20,
        ring: 3,
        status: {
          ...initialState[3].status,
          tech: 60,
          genius: 66,
          beauty: 90,
        },
      },
    }
    expect(
      reducer(state, {
        type: actionTypes.COPY_SLOT,
        payload: { from: 1, to: 3 },
      })
    ).toEqual({
      ...state,
      3: { ...state[1] },
    })
  })
})
