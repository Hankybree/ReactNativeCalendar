import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ToastAndroid, Platform, Alert } from 'react-native'
import globalStyles from '../styles/global'
import { Calendar } from 'react-native-calendars'

export default function CalendarScreen({ navigation, route }) {
  const [markedDates, setMarkedDates] = useState({})
  const { lightStyle } = route.params

  useEffect(() => {
    fetch('https://holidayapi.com/v1/holidays?pretty&country=SE&year=2019&key=752b02dd-b7fd-43b1-89a3-06be863db585')
      .then(response => response.json())
      .then(result => {
        let holidayDates = {}

        result.holidays.forEach(holiday => {
          const dateThisYear = holiday.date.replace('2019', '2020')
          holidayDates[dateThisYear] = { marked: true, dotColor: '#e96d5e' }
        })

        setMarkedDates(holidayDates)
        if (Platform.OS === 'android') {
          ToastAndroid.show("Welcome!", ToastAndroid.LONG)
        } else {
          Alert.alert('Welcome!')
        }
      })
  }, [])
  return (
    <View style={[lightStyle ? globalStyles.light : globalStyles.dark,globalStyles.container, styles.container]}>
      <Calendar markedDates={markedDates} onDayPress={(day) => {
        console.log(day)
        navigation.navigate('Details', { date: day.dateString, lightStyle })
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
})