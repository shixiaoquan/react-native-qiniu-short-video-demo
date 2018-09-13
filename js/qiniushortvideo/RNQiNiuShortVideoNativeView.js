//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const RNQiNiuShortVideo = requireNativeComponent('RNQiNiuShortVideo', RNQiNiuShortVideoView)

export default class RNQiNiuShortVideoView extends Component {
  render () {
    return <RNQiNiuShortVideo {...this.props} />
  }
}

RNQiNiuShortVideoView.propTypes = {
  exampleProp: React.PropTypes.any
}
