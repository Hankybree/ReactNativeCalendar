import { StyleSheet } from 'react-native'
import { vh, vw } from '../../services/screen'

export default StyleSheet.create({
  container: {
    flex: 1,
    height: vh(100),
    width: vw(100),
    paddingTop: 20,
    backgroundColor: '#393f5f'
  },
  text: {
    color: '#e2dddf'
  }
})