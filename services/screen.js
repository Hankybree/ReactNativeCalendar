import { Dimensions } from 'react-native'

const screen = Dimensions.get('screen')

export function getWidth() {
  return screen.width
}
export function getHeight() {
  return screen.height
}
export function vw(percentage) {
  const multiplier = percentage / 100
  return screen.width * multiplier
}
export function vh(percentage) {
  const multiplier = percentage / 100
  return screen.height * multiplier
}