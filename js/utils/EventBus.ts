type ListenerType = {
  eventName: string;
  exec: Function;
};

export default class EventBus {
  static listenerList: ListenerType[] = [];

  static emit(eventName: string, data: any) {
    this.listenerList.forEach(listener => {
      if (listener.eventName === eventName) {
        listener.exec(data);
      }
    });
  }

  static on(eventName: string, exec: Function) {
    this.listenerList.push({
      eventName,
      exec,
    });
  }

  static remove(eventName: string) {
    const count = this.listenerList
      .map(item => item.eventName)
      .filter(name => name === eventName).length;
    for (let i = 0; i < count; i++) {
      const targetIndex = this.listenerList.findIndex(
        listener => listener.eventName === eventName,
      );
      if (targetIndex !== -1) {
        this.listenerList.splice(targetIndex, 1);
      }
    }
  }
}
