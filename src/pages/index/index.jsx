import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <View
          onClick={() => {
            Taro.navigateTo({ url: "/sdk/pages/test/index" });
          }}
        >
          去动画页面
        </View>
      </View>
    );
  }
}
