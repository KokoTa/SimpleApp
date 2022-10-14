import CodePush from 'react-native-code-push';
import {CreateApp as App} from '../navigator/index';

const codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};

const updateStateChange = (syncStatus: any) => {
  switch (syncStatus) {
    case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
      console.log('Checking for update.');
      break;
    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
      console.log('Downloading package.');
      break;
    case CodePush.SyncStatus.AWAITING_USER_ACTION:
      console.log('Awaiting user action.');
      break;
    case CodePush.SyncStatus.INSTALLING_UPDATE:
      console.log('Installing update.');
      break;
    case CodePush.SyncStatus.UP_TO_DATE:
      console.log('App up to date.');
      break;
    case CodePush.SyncStatus.UPDATE_IGNORED:
      console.log('Update cancelled by user.');
      break;
    case CodePush.SyncStatus.UPDATE_INSTALLED:
      console.log('Update installed and will be applied on restart.');
      break;
    case CodePush.SyncStatus.UNKNOWN_ERROR:
      console.log('An unknown error occurred.');
      break;
  }
};

const handleUpdateProgressChange = (progress: any) => {
  console.log(progress.receivedBytes, progress.totalBytes);
};

export const hotCodeAppUpdate = () => {
  CodePush.sync(
    {
      updateDialog: {
        title: 'Updating',
      },
      installMode: CodePush.InstallMode.IMMEDIATE,
    },
    updateStateChange,
    handleUpdateProgressChange,
  );
};

// https://github.com/lisong/code-push-demo-app/blob/master/App.js
export default CodePush(codePushOptions)(App);
