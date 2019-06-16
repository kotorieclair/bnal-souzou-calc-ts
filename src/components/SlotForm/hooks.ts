import * as React from 'react'

export function useDebounce<T>(
  val: T,
  func: (arg0: T) => void,
  delay?: number
): void {
  const [initialized, setInitialized] = React.useState(false)

  React.useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      return
    }

    const t = setTimeout(() => {
      func(val)
    }, delay || 1000)

    return () => {
      clearTimeout(t)
    }
  }, [val])
}
