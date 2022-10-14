declare module '@react-native-hero/umeng-analytics' {
  function init(): Promise<any>;
  function enterPage(routeName: string): void;
  function leavePage(routeName: string): void;
}
