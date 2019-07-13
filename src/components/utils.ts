// TODO
// 装像レベル合わせセット
// アナリティクス
// componentのutils

export const sendGAnalytics = (
  action: string,
  category: string,
  label: string
) => {
  if (process.env.NODE_ENV === 'production') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
    })
  }
}
