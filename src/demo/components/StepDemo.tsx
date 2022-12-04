import React, {useState} from 'react';
import StepIndicator from 'react-native-step-indicator';

const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Payment Method',
  'Track',
];
const customStyles = {
  stepIndicatorSize: 25, // 除了选中之外的占用大小
  currentStepIndicatorSize: 30, // 当前选中的占用大小
  separatorStrokeWidth: 2, // 连接线粗细
  currentStepStrokeWidth: 3, // 选中的边框宽度
  stepStrokeWidth: 3, // 除了选中之外的边框宽度
  stepStrokeCurrentColor: '#fe7013', // 当前选中的边框颜色
  stepStrokeFinishedColor: '#fe7013', // 其他选中的边框颜色
  stepStrokeUnFinishedColor: '#ffffff', // 未选中的边框颜色
  separatorFinishedColor: '#fe7013', // 其他选中的连接线颜色
  separatorUnFinishedColor: '#ffffff', // 未选中的连接线颜色
  stepIndicatorFinishedColor: '#fe7013', // 未选中的背景色
  stepIndicatorUnFinishedColor: '#FFFFFF', // 其他选中的背景色
  stepIndicatorCurrentColor: '#ffffff', // 当前选中的背景色
  stepIndicatorLabelFontSize: 13, // 除了选中之外的字体大小
  currentStepIndicatorLabelFontSize: 13, // 选中的字体大小
  stepIndicatorLabelCurrentColor: '#fe7013', // 选中的字体颜色
  stepIndicatorLabelFinishedColor: '#ffffff', // 其他选中的字体颜色
  stepIndicatorLabelUnFinishedColor: '#aaaaaa', // 未选中的字体颜色
  labelColor: '#999999', // label 颜色
  labelSize: 13, // label 字体大小
  currentStepLabelColor: '#fe7013', // 选中的 label 颜色
};

function StepDemo() {
  const [cur, setCur] = useState(2);

  const handleChangeStep = (step: number) => {
    setCur(step);
  };

  return (
    <StepIndicator
      onPress={handleChangeStep}
      customStyles={customStyles}
      currentPosition={cur}
      labels={labels}
    />
  );
}

export default StepDemo;
