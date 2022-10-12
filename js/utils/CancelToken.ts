import {AxiosRequestConfig} from 'axios';

interface CancelMap {
  [key: string]: AbortController;
}

export default class CancelToken {
  static cancelMap: CancelMap = {};

  static createCancelToken(config: AxiosRequestConfig, key: string): void {
    const existedCancelToken = this.cancelMap[key];
    if (existedCancelToken) {
      existedCancelToken.abort();
    }
    const controller = new AbortController();
    this.cancelMap[key] = controller;
    config.signal = controller.signal;
  }

  static delCancelToken(key: string): void {
    const controller = this.cancelMap[key];
    if (controller) {
      delete this.cancelMap[key];
    }
  }
}
