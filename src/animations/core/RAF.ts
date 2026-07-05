/**
 * -------------------------------------------------------
 * RAF.ts
 * -------------------------------------------------------
 * Global requestAnimationFrame scheduler.
 *
 * Every animation in the application registers here.
 *
 * Features
 * --------
 * ✔ Single RAF loop
 * ✔ Auto starts
 * ✔ Auto stops
 * ✔ Delta Time
 * ✔ Elapsed Time
 * ✔ Pause
 * ✔ Resume
 * ✔ Remove callbacks
 * ✔ High performance
 * -------------------------------------------------------
 */

export type RAFCallback = (delta: number, elapsed: number) => void;

class RAFScheduler {
  /**
   * requestAnimationFrame id
   */
  private frameId: number | null = null;

  /**
   * Is loop currently running
   */
  private running = false;

  /**
   * Animation callbacks
   */
  private callbacks = new Set<RAFCallback>();

  /**
   * Last frame timestamp
   */
  private previousTime = 0;

  /**
   * Total elapsed time
   */
  private elapsed = 0;

  /**
   * Pause state
   */
  private paused = false;

  /**
   * Register callback
   */
  public add(callback: RAFCallback) {
    this.callbacks.add(callback);

    if (!this.running) {
      this.start();
    }
  }

  /**
   * Remove callback
   */
  public remove(callback: RAFCallback) {
    this.callbacks.delete(callback);

    if (this.callbacks.size === 0) {
      this.stop();
    }
  }

  /**
   * Start loop
   */
  private start() {
    this.running = true;

    this.previousTime = performance.now();

    this.frameId = requestAnimationFrame(this.loop);
  }

  /**
   * Stop loop
   */
  private stop() {
    this.running = false;

    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
    }

    this.frameId = null;

    this.elapsed = 0;

    this.previousTime = 0;
  }

  /**
   * Pause animation
   */
  public pause() {
    this.paused = true;
  }

  /**
   * Resume animation
   */
  public resume() {
    this.paused = false;

    this.previousTime = performance.now();
  }

  /**
   * Remove everything
   */
  public clear() {
    this.callbacks.clear();

    this.stop();
  }

  /**
   * Is scheduler running
   */
  public isRunning() {
    return this.running;
  }

  /**
   * Total active callbacks
   */
  public size() {
    return this.callbacks.size;
  }

  /**
   * Main RAF Loop
   */
  private loop = (time: number) => {
    if (!this.running) {
      return;
    }

    this.frameId = requestAnimationFrame(this.loop);

    if (this.paused) {
      this.previousTime = time;
      return;
    }

    const delta = time - this.previousTime;

    this.previousTime = time;

    this.elapsed += delta;

    /**
     * Clamp delta
     *
     * Prevent huge jumps
     * when browser tab becomes active.
     */
    const safeDelta = Math.min(delta, 40);

    this.callbacks.forEach((callback) => {
      callback(safeDelta, this.elapsed);
    });
  };
}

/**
 * Singleton
 */
export const RAF = new RAFScheduler();
