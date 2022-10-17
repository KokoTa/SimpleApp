import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function CustomScrollSelect() {
  const [list] = useState<any>(
    Array(20)
      .fill(1)
      .map((n, i) => i),
  );
  const scrollView = useRef<ScrollView>(null);
  const itemHeight = 40;
  const isAnimated = useRef(false); // react useState 是异步赋值的，用 useRef 实现数据同步赋值

  const handleScrollTo = (y: number) => {
    const ceilIndex = Math.ceil(y / itemHeight);
    const ceilTop = ceilIndex * itemHeight;
    if (ceilTop - y <= itemHeight / 2) {
      scrollView.current?.scrollTo({
        x: 0,
        y: ceilIndex * itemHeight,
        animated: true,
      });
    } else {
      scrollView.current?.scrollTo({
        x: 0,
        y: (ceilIndex - 1) * itemHeight,
        animated: true,
      });
    }
  };

  const handleScrollEnd = (e: any) => {
    // 有两种滚动结束的情况:
    // 一种是 drag 行为结束，一种是 drag 动画结束
    // drag 行为结束是一定会触发的，但是 drag 动画结束不一定会触发
    // 这就导致了有可能会触发两次结束处理
    // 因此这里让 drag 行为结束处理延迟执行
    // 延迟执行的期间如果出现 drag 动画结束，则不会调用 drag 行为结束处理，而会调用 drag 动画结束处理
    const y = e.nativeEvent.contentOffset.y;
    setTimeout(() => {
      if (!isAnimated.current) {
        handleScrollTo(y);
      }
    }, 10);
  };

  const handleAnimated = (e: any, isStart: boolean) => {
    isAnimated.current = isStart;
    if (!isAnimated.current) {
      handleScrollTo(e.nativeEvent.contentOffset.y);
    }
  };

  return (
    <>
      <View>
        <Text>CustomScrollSelect</Text>
      </View>
      <View style={styles.root}>
        <LinearGradient
          style={styles.borderTopWrap}
          colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}>
          <View style={styles.borderTop} />
        </LinearGradient>
        <ScrollView
          ref={scrollView}
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          onScrollEndDrag={handleScrollEnd}
          onMomentumScrollBegin={e => handleAnimated(e, true)}
          onMomentumScrollEnd={e => handleAnimated(e, false)}>
          <View>
            <View style={styles.padTop} />
            {list.map((item: any, index: number) => (
              <View key={index} style={styles.item}>
                <Text style={styles.itemText}>
                  {item}-{item}
                </Text>
              </View>
            ))}
            <View style={styles.padBottom} />
          </View>
        </ScrollView>
        <LinearGradient
          style={styles.borderBottomWrap}
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <View style={styles.borderBottom} />
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  linearGradient: {},
  root: {
    height: 200,
    position: 'relative',
    backgroundColor: '#fff',
  },
  borderTopWrap: {
    height: 80,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
  },
  borderTop: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  borderBottomWrap: {
    height: 80,
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    zIndex: 200,
  },
  borderBottom: {
    flex: 1,
    borderTopWidth: 0.5,
    borderColor: 'gray',
  },
  padTop: {
    height: 80,
  },
  padBottom: {
    height: 80,
  },
  scroll: {},
  item: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  itemText: {
    fontSize: 18,
  },
});

export default CustomScrollSelect;
