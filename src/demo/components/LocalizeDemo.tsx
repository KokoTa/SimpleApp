import React from 'react';
import {I18nManager, Text, TouchableOpacity} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import {I18n} from 'i18n-js';
import en from '../../locale/en.json';
import zh from '../../locale/zh.json';
import useForceUpdate from '../../hooks/useForceUpdate';
import GlobalStyle from '../../styles/GlobalStyle';

const translationGetters = {
  en,
  zh,
};

const i18n = new I18n(translationGetters);

const setI18nConfig = (language?: any, rtl?: any) => {
  let languageTag = 'en';
  let isRTL = false;

  const res = RNLocalize.findBestAvailableLanguage(
    Object.keys(translationGetters),
  );

  if (res) {
    languageTag = res.languageTag;
    isRTL = res.isRTL;
  }

  if (language) {
    languageTag = language;
    isRTL = rtl;
  }

  console.log(languageTag, isRTL);
  I18nManager.forceRTL(isRTL); // 是否文字反方向
  i18n.locale = languageTag; // 设置语言
};

setI18nConfig();

function LocalizeDemo() {
  const forceUpdate = useForceUpdate();

  const handleGetLocalize = () => {
    console.log(RNLocalize.getLocales());
    console.log(RNLocalize.getCurrencies());
  };

  const handleLanguageChange = () => {
    setI18nConfig('en', false);
    forceUpdate();
  };

  return (
    <>
      <TouchableOpacity onPress={() => handleGetLocalize()}>
        <Text style={GlobalStyle.ButtonText}>Get Localize info</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLanguageChange()}>
        <Text style={GlobalStyle.ButtonText}>Change Language</Text>
      </TouchableOpacity>
      <Text>{i18n.t('message')}</Text>
    </>
  );
}

export default LocalizeDemo;
