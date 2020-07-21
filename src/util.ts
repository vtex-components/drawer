export const placementValue = (placement: string) => {
  let values = {}

  switch (placement) {
    case 'top':
      values = {
        top: 0,
        left: 0,
        right: 0,
      }
      break

    case 'bottom':
      values = {
        bottom: 0,
        left: 0,
        right: 0,
      }
      break

    case 'right':
      values = {
        top: 0,
        bottom: 0,
        right: 0,
      }
      break

    default:
      values = {
        top: 0,
        bottom: 0,
        left: 0,
      }
      break
  }

  return values
}
