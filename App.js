import React, { useState } from "react"
import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput, TouchableWithoutFeedback } from 'react-native'
import DanhSachTMDT from './DanhSachTMDT'
import DanhSachSanPham from './DanhSachSanPham'

// const App = () => {
//   return (
//     <View style={styles.cha}>
//       <View style={styles.cha1}>
//         <View style={styles.con1}></View>
//         <View style={styles.con2}></View>
//       </View>
//       <View style={styles.cha2}>
//         <View style={styles.con3}></View>
//         <View style={{ justifyContent: 'center' }}>
//           <TouchableOpacity style={styles.thangut}>
//             <Text style={{ color: 'white', margin: 10 }}>Click Me</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.con4}></View>
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   cha: { backgroundColor: 'white', width: '100%', height: '100%' },
//   cha1: { backgroundColor: 'white', flexDirection: 'row', flex: 1, justifyContent: 'space-between' },
//   cha2: { backgroundColor: 'white', flexDirection: 'row', flex: 1, justifyContent: 'space-evenly' },
//   con1: { backgroundColor: "green", width: 40 },
//   con2: { backgroundColor: "red", width: 40 },
//   con3: { backgroundColor: 'yellow', width: 40 },
//   thangut: { backgroundColor: 'red', borderRadius: 10, width: 80, alignItems: 'center', height: 40 },
//   con4: { backgroundColor: 'black', width: 40 }


// })
// export default App


// const App = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       {/* <Image
//         resizeMode='contain'
//         style={{ width: '100%', height: '100%' }}
//         source={{ uri: 'https://kenh14cdn.com/203336854389633024/2021/12/13/ca0220a466e2acbcf5f3-1639398197069562492341.jpg' }} /> */}

//       {/* <TextInput onChangeText={(value) => {
//         console.log(value)
//       }}
//         style={{ backgroundColor: 'gray', color: 'red', fontSize: 40 }} /> */}

//       {/* <TouchableWithoutFeedback onPress={() => {alert('adshagd')}}>
//         <Text>dsadsad</Text>
//       </TouchableWithoutFeedback> */}
//     </View>
//   )
// }

// export default App


// ** Module - props

// const App = () => {
//   return(
//     <View style={{flex: 1, backgroundColor: 'green'}}>

//       <DanhSachTMDT text1='LAZADA' text2='kaadsdsaka' abc='4783627836782367' />
//       <DanhSachSanPham />

//     </View>
//   )
// }

// export default App;

// ** State

const App = () => {
  const [number, setNumber] = useState(0);
  const [myText, setMyText] = useState('')
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <Text>{number}</Text>

      <TouchableOpacity
      onPress={() => {
        setNumber(number + 1)
      }}
        style={{ padding: 25, backgroundColor: 'green', alignSelf: 'center', marginTop: 30 }}>
        <Text>CLICK</Text>
      </TouchableOpacity>



{/* //       <TextInput
        style={{ backgroundColor: 'red', width: '100%' }}
        value={myText}
        onChangeText={value => {
          setMyText(value)
        }}
      /> */}

    </View>
  )
}

export default App;