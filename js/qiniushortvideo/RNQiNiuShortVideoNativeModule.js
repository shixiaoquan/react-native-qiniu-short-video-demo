//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { RNQiNiuShortVideo } = NativeModules

export default {
  exampleMethod () {
    return RNQiNiuShortVideo.exampleMethod()
  },

  EXAMPLE_CONSTANT: RNQiNiuShortVideo.EXAMPLE_CONSTANT
}
