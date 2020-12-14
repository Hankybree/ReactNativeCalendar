import { StyleSheet } from 'react-native'
import { vw, getWidth, getHeight } from '../../services/screen'

export default StyleSheet.create({
  container: {
    flex: 1,
    height: getHeight(),
    width: getWidth(),
    paddingTop: 20
  },
  dark: {
    backgroundColor: 'black'
  },
  light: {
    backgroundColor: '#393f5f'
  },
  text: {
    color: '#e2dddf',
    fontFamily: 'montserrat',
    fontSize: vw(3),
    textAlign: 'center'
  },
  header: {
    color: '#e96d5e',
    fontFamily: 'orbitron',
    fontSize: vw(15)
  }
})