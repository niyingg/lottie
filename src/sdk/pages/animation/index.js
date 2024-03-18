/* eslint-disable */
import Taro from "@tarojs/taro";
import React, { Component } from "react";

import { View, Text, Image, Lottie } from "@tarojs/components";
import TabBar from "./TabBar";
import styles from "./index.scss";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alipayPath: "",
      alipayPath1: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View>
        <TabBar />
      </View>
    );
  }
}

export default Index;
