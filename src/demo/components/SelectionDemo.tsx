import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

function SelectionDemo() {
  const ref = useRef<ScrollView>(null);
  const [isDrag, setIsDrag] = useState(false); // 是否在执行拖拽
  const [isAnimate, setIsAnimate] = useState(false); // 是否正在执行拖拽后动画
  const [isScrollTo, setIsScrollTo] = useState(false); // 是否正在执行自动滚动
  const [timer, setTimer] = useState<number>(0);
  const [targetIndex, setTargetIndex] = useState<number>(-1);

  const itemHeight = 30;

  const scrollTo = (y: number) => {
    setIsScrollTo(true);
    const index = Math.round(y / itemHeight);
    setTargetIndex(index);
    const targetY = index * itemHeight;
    ref.current?.scrollTo({y: targetY});
    console.log(y);
  };

  const onScrollBeginDrag = () => {
    setIsDrag(true);
    setIsScrollTo(false);
    clearTimeout(timer);
    // console.log(1);
  };
  const onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setIsDrag(false);
    setTimer(
      setTimeout(() => {
        if (!isDrag && !isAnimate && !isScrollTo) {
          scrollTo(e.nativeEvent.contentOffset.y);
        }
      }, 5),
    );
    // console.log(2);
  };
  const onMomentumScrollBegin = () => {
    setIsAnimate(true);
    clearTimeout(timer);
    // console.log(3);
  };
  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setIsAnimate(false);
    if (!isDrag && !isAnimate && !isScrollTo) {
      scrollTo(e.nativeEvent.contentOffset.y);
    }
    // console.log(4);
  };

  const getHeaderAndFooterPaddingView = () => {
    let h = (150 - 30) / 2;
    let header = <View style={{height: h}} />;
    let footer = <View style={{height: h}} />;
    return {header, footer};
  };

  return (
    <View style={styles.wrap}>
      <ScrollView
        ref={ref}
        style={styles.scrollView}
        bounces={false}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}>
        {getHeaderAndFooterPaddingView().header}
        {Array(20)
          .fill(0)
          .map((item, i) => (
            <View style={styles.item} key={i}>
              <Text style={targetIndex === i ? styles.active : styles.text}>
                {i}
              </Text>
            </View>
          ))}
        {getHeaderAndFooterPaddingView().footer}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 150,
  },
  scrollView: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  text: {
    color: 'gray',
  },
  active: {
    fontSize: 16,
    color: 'red',
  },
});

export default SelectionDemo;
