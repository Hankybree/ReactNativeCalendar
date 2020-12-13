import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import globalStyles from '../styles/global'
import { Calendar } from 'react-native-calendars'

export default function CalendarScreen({ navigation }) {
  const [markedDates, setMarkedDates] = useState({})

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
      })
  }, [])
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Calendar theme={theme} markedDates={markedDates} onDayPress={(day) => {
        console.log(day)
        //navigation.navigate('Details', { date: day.dateString })
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  calendar: {
    // backgroundColor: 'red',
    // height: vh(50)
  }
})