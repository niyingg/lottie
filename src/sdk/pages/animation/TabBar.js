import React, { useRef } from "react";
import { View, Lottie } from "@tarojs/components";
import Taro, { useDidShow, useReady } from "@tarojs/taro";
import styles from "./index.scss";

const TabBar = (props) => {
  const { tabBarIndex = 1 } = props;

  const tb1 = useRef();
  const tb2 = useRef();
  const tb3 = useRef();

  const play = (index) => {
    switch (index) {
      case 1:
        tb2.current?.stop();
        tb3.current?.stop();
        tb1.current?.play();
        break;
      case 2:
        tb1.current?.stop();
        tb3.current?.stop();
        tb2.current?.play();
        break;
      case 3:
        tb1.current?.stop();
        tb2.current?.stop();
        tb3.current?.play();
        break;
    }
  };

  useDidShow(() => {
    play(tabBarIndex);
  });

  useReady(() => {
    tb1.current = my.createLottieContext("lottie-1" + tabBarIndex);
    tb2.current = my.createLottieContext("lottie-2" + tabBarIndex);
    tb3.current = my.createLottieContext("lottie-3" + tabBarIndex);

    console.log("useReady");
  });

  const clickCanvas = (index) => {
    Taro.vibrateShort();
  };

  console.log(tabBarIndex, "tabBarIndex");
  return (
    <View className={styles.tabBar}>
      <View className={styles.tabBarItem} onClick={() => clickCanvas(1)}>
        <Lottie
          id={"lottie-1" + tabBarIndex}
          path="/test.json"
          autoplay={tabBarIndex === 1}
          repeatCount={100}
        />
      </View>

      <View className={styles.tabBarItem} onClick={() => clickCanvas(2)}>
        <Lottie
          id={"lottie-2" + tabBarIndex}
          path="/test.json"
          autoplay={tabBarIndex === 2}
        />
      </View>

      <View className={styles.tabBarItem} onClick={() => clickCanvas(3)}>
        <Lottie
          id={"lottie-3" + tabBarIndex}
          path="./test.json"
          autoplay={tabBarIndex === 3}
        />
      </View>
    </View>
  );
};

export default React.memo(TabBar);
