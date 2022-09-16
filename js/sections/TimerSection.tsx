import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import sectionStyle from '../global/sectionStyle';

function TimerSection(props: any) {
  const [timer, setTimer] = useState<number>(0);
  const [count, setCount] = useState(0);
  const [log, setLog] = useState<number[]>([]);

  useEffect(() => {
    if (count % 2) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [count, timer]);

  return (
    <View style={sectionStyle.sectionContainer}>
      <Text style={sectionStyle.sectionTitle}>{props.title}</Text>
      <Text style={sectionStyle.sectionSubTitle}>count 为奇数将终止定时器</Text>
      <Text style={sectionStyle.sectionSubTitle}>count: {count}</Text>
      <Text style={sectionStyle.sectionSubTitle}>log: {log.toString()}</Text>
      <TouchableOpacity
        style={sectionStyle.sectionButton}
        onPress={() =>
          setTimer(
            setInterval(() => {
              setLog(prevArr => [...prevArr, count]);
            }, 1000),
          )
        }>
        <Text>开启定时器</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={sectionStyle.sectionButton}
        onPress={() => setCount(count + 1)}>
        <Text>count+1</Text>
      </TouchableOpacity>
    </View>
  );
}

TimerSection.propTypes = {
  title: PropTypes.string,
};

export default TimerSection;
