export interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
