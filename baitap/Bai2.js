import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Bai2 = () => {
  const [mylink, setMyLink] = useState(
    'https://genk.mediacdn.vn/k:2016/photo-4-1473821557648/top6suthatcucsocvepikachu.jpg',
  );
  var array = [
    'https://genk.mediacdn.vn/k:2016/photo-4-1473821557648/top6suthatcucsocvepikachu.jpg',
    'https://www.warmoven.in/media/catalog/product/cache/e4dbbe88580d6bb18ca174b8700f08f3/image/14883cb6/pikachu-photo-cake-2.png.mst.webp',
    'https://anhdep123.com/wp-content/uploads/2020/05/%E1%BA%A3nh-pokemon-%C4%91%E1%BA%B9p.jpg',
    'https://images5.alphacoders.com/481/thumb-1920-481903.png',
    'https://cdn.ndtv.com/tech/images/gadgets/pikachu_hi_pokemon.jpg',
    'https://genk.mediacdn.vn/k:thumb_w/640/2016/photo-1-1473821552147/top6suthatcucsocvepikachu.jpg',
    'https://genk.mediacdn.vn/k:thumb_w/640/2016/photo-2-1473821557637/top6suthatcucsocvepikachu.jpg',
    'https://genk.mediacdn.vn/k:2016/photo-3-1473821557562/top6suthatcucsocvepikachu.jpg',
  ];
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const layAnh = () => {
    // Lấy random vị trí trong mảng
    var layso = getRndInteger(0, array.length - 1);
    // Lấy link ảnh tại vị trí random
    var layLink = array[layso];
    //Set lại state cho myLink
    setMyLink(layLink);
  };
  return (
    <View style={{flex: 1, }}>
      <Image
        style={{flex: 1}}
        source={{uri: mylink}}
        resizeMode="contain"></Image>
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={{backgroundColor: 'orange',width: 120,height: 60 , borderRadius: 20,justifyContent:'center',alignItems: 'center', }}
        onPress={() => layAnh()}>
        <Text style={{fontSize: 20 }}>ShowImage</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default Bai2;
