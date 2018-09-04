
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {
  GCanvasView,
} from 'react-native-gcanvas';

import {
  requireNativeComponent,
  findNodeHandle,
  NativeModules
} from 'react-native';

import { enable, ReactNativeBridge, Image as GImage } from "gcanvas.js/src/";

// Must set up GCanvas Module before using, or a exception will thorw
ReactNativeBridge.GCanvasModule = NativeModules.GCanvasModule;
ReactNativeBridge.Platform = Platform;

export default class App extends Component<Props> {
    componentDidMount() {
  // var ref = this.refs.canvas_holder;
  // var canvas_tag = findNodeHandle(ref);
  //     console.log(ReactNativeBridge);

  // // var canvas_tag = "2";
  // var el = { ref: "" + canvas_tag, style: { width: 414, height: 376 } };

  // ref = enable(el, { bridge: ReactNativeBridge });

  // var ctx = ref.getContext('2d');
  // //rect
  // ctx.fillStyle = 'green';
  // ctx.fillRect(0, 0, 100, 100);

  // //rect
  // ctx.fillStyle = 'black';
  // ctx.fillRect(100, 100, 100, 100);
  // ctx.fillRect(25, 205, 414 - 50, 5);

}

render() {
  return (
    <GCanvasView ref='canvas_holder' style={{width: 200, height: 200, borderWidth: 1}}>
    </GCanvasView>
  );
}
 }