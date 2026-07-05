import { Animation } from "./Animation";

interface TimelineStep {
  animation: Animation;
  offset: number;
}

export class Timeline {
  private steps: TimelineStep[] = [];
  private currentIndex = 0;
  private playing = false;
  private paused = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  /**
   * Add animation
   *
   * offset:
   * milliseconds after previous animation starts.
   *
   * 0 => play together
   * 300 => wait 300ms
   */
  public add(
    animation: Animation,
    offset = 0,
  ) {
    this.steps.push({
      animation,
      offset,
    });

    return this;
  }

  /**
   * Play timeline
   */
  public play() {
    if (this.playing) return;
    this.playing = true;
    this.paused = false;
    this.currentIndex = 0;
    this.runCurrent();
  }

  /**
   * Run current animation
   */
  private runCurrent() {
    if (!this.playing) return;

    if (this.currentIndex >= this.steps.length) {
      this.finish();
      return;
    }

    const current = this.steps[this.currentIndex];

    this.timeoutId = setTimeout(() => {
      current.animation.play();

      const check = () => {
        if (current.animation.isCompleted()) {
          this.currentIndex++;
          this.runCurrent();
          return;
        }

        requestAnimationFrame(check);
      };

      check();
    }, current.offset);
  }

  /**
   * Pause
   */
  public pause() {
    this.paused = true;
    const current = this.steps[this.currentIndex];
    current?.animation.pause();

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  /**
   * Resume
   */
  public resume() {
    if (!this.paused) return;

    this.paused = false;
    const current = this.steps[this.currentIndex];
    current?.animation.resume();
  }

  /**
   * Stop
   */
  public stop() {
    this.playing = false;
    this.paused = false;
    this.currentIndex = 0;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.steps.forEach((step) => {
      step.animation.stop();
    });
  }

  /**
   * Restart
   */
  public restart() {
    this.stop();
    this.play();
  }

  /**
   * Remove everything
   */
  public clear() {
    this.stop();
    this.steps = [];
  }

  /**
   * Total animations
   */
  public size() {
    return this.steps.length;
  }

  /**
   * Finished
   */
  private finish() {
    this.playing = false;
  }
}