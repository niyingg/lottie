/* eslint-disable */
import Taro from "@tarojs/taro";
import React, { Component } from "react";

import { View, Image, Lottie } from "@tarojs/components";
import { pattern } from "./base64";
import styles from "./index.scss";

console.log(Lottie, "Lottie");
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alipayPath: "",
      alipayPath1: "",
    };
  }
  componentDidMount() {
    Taro.nextTick(() => {
      this.onClick();
      console.log(3333);
    });
  }

  onClick = () => {
    if (process.env.TARO_ENV === "weapp") {
      const lottie = require("lottie-miniprogram").default;
      Taro.createSelectorQuery()
        .select(`#canvas`)
        .node((res) => {
          console.log(res, "00000");
          const canvas = res.node;
          const context = canvas.getContext("2d");
          lottie.setup(canvas);
          const animation = lottie.loadAnimation({
            loop: false,
            autoplay: false,
            animationData: require("./lottie/index.json"),
            rendererSettings: {
              context,
              clearCanvas: true,
            },
          });
          animation.play();
        })
        .exec();
    } else {
      this.setState(
        {
          alipayPath: require("./lottie/index.json").default,
          alipayPath1: require("./lottie/index.json"),
        },
        () => {
          const lottieContext = my.createLottieContext("ali");
          lottieContext.play();
        }
      );
    }
  };

  render() {
    const { alipayPath, alipayPath1 } = this.state;
    console.log(alipayPath, alipayPath1, "----------");

    return (
      <View className={styles.content}>
        <View className={styles.img}>
          <Image
            src={`data:image/png;base64,${pattern}`}
            className={styles.realImg}
          />
          <canvas
            id="canvas"
            type="2d"
            width="200"
            height="200"
            className={styles.canvas}
          ></canvas>
          {process.env.TARO_ENV !== "weapp" && (
            <Lottie
              className={styles.lottie}
              autoplay={false}
              repeatCount={10}
              id="ali"
              path={alipayPath1}
            />
          )}
        </View>
      </View>
    );
  }
}

export default Index;
