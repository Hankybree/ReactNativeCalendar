import React from 'react'
import { Button } from 'react-native'

export default function DefaultButton(props) {
  return (
    <Button title={props.title} color="#e96d5e" onPress={props.onPress} />
  )
}