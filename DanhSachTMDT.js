import React from 'react'
import { View, Text } from "react-native"

const DanhSachTMDT = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <Text>{JSON.stringify(props)}</Text>
            <Text>{props.text2}</Text>
            <Text>{props.abc}</Text>
        </View>
    )
}

export default DanhSachTMDT