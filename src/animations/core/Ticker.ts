import { RAF, RAFCallback } from "./RAF";

export type TickCallback = (
  delta: number,
  elapsed: number,
) => void;

export class Ticker {
  private callbacks = new Set<TickCallback>();

  private started = false;

  private readonly tick: RAFCallback = (delta, elapsed) => {
    this.callbacks.forEach((callback) => {
      callback(delta, elapsed);
    });
  };

  public add(callback: TickCallback) {
    this.callbacks.add(callback);

    if (!this.started) {
      this.started = true;
      RAF.add(this.tick);
    }
  }

  public remove(callback: TickCallback) {
    this.callbacks.delete(callback);

    if (this.callbacks.size === 0 && this.started) {
      RAF.remove(this.tick);
      this.started = false;
    }
  }

  public clear() {
    this.callbacks.clear();

    if (this.started) {
      RAF.remove(this.tick);
      this.started = false;
    }
  }

  public size() {
    return this.callbacks.size;
  }

  public has(callback: TickCallback) {
    return this.callbacks.has(callback);
  }
}

export const ticker = new Ticker();