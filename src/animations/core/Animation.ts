import { ticker } from "./Ticker";

export type AnimationDirection = "normal" | "reverse";

export interface AnimationOptions {
  duration?: number;
  delay?: number;
  repeat?: number;
  yoyo?: boolean;
  autoplay?: boolean;

  easing?: (t: number) => number;

  onStart?: () => void;

  onUpdate?: (progress: number, easedProgress: number) => void;

  onComplete?: () => void;
}

const linear = (t: number) => t;

export class Animation {
  private duration: number;
  private delay: number;
  private repeat: number;
  private yoyo: boolean;
  private easing: (t: number) => number;
  private elapsed = 0;
  private started = false;
  private playing = false;
  private completed = false;
  private iteration = 0;
  private direction: AnimationDirection = "normal";
  
  private readonly onStart?;
  private readonly onUpdate?;
  private readonly onComplete?;

  constructor(options: AnimationOptions) {
    this.duration = options.duration ?? 600;
    this.delay = options.delay ?? 0;
    this.repeat = options.repeat ?? 0;
    this.yoyo = options.yoyo ?? false;

    this.easing = options.easing ?? linear;
    this.onStart = options.onStart;
    this.onUpdate = options.onUpdate;
    this.onComplete = options.onComplete;

    if (options.autoplay) {
      this.play();
    }
  }

  private tick = (delta: number) => {
    if (!this.playing) return;

    this.elapsed += delta;

    if (this.elapsed < this.delay) {
      return;
    }

    if (!this.started) {
      this.started = true;
      this.onStart?.();
    }

    const animationTime = this.elapsed - this.delay;
    let progress = Math.min(animationTime / this.duration, 1);

    if (this.direction === "reverse") {
      progress = 1 - progress;
    }

    const eased = this.easing(progress);
    this.onUpdate?.(progress, eased);

    if (animationTime >= this.duration) {
      if (this.iteration < this.repeat) {
        this.iteration++;
        this.elapsed = this.delay;
        if (this.yoyo) {
          this.direction = this.direction === "normal" ? "reverse" : "normal";
        }

        return;
      }

      this.finish();
    }
  };

  private finish() {
    this.playing = false;
    this.completed = true;
    ticker.remove(this.tick);
    this.onComplete?.();
  }

  public play() {
    if (this.playing) return;
    this.playing = true;
    this.completed = false;
    ticker.add(this.tick);
  }

  public pause() {
    this.playing = false;
  }

  public resume() {
    if (this.completed) return;
    if (this.playing) return;
    this.playing = true;
  }

  public stop() {
    this.playing = false;
    this.completed = true;
    this.started = false;
    this.elapsed = 0;
    this.iteration = 0;
    ticker.remove(this.tick);
  }

  public restart() {
    this.stop();
    this.play();
  }

  public reverse() {
    this.direction = this.direction === "normal" ? "reverse" : "normal";
  }

  public seek(progress: number) {
    progress = Math.max(0, Math.min(progress, 1));
    this.elapsed = this.delay + progress * this.duration;
  }

  public setDuration(duration: number) {
    this.duration = duration;
  }

  public setDelay(delay: number) {
    this.delay = delay;
  }

  public isPlaying() {
    return this.playing;
  }

  public isCompleted() {
    return this.completed;
  }

  public getProgress() {
    return Math.min(
      Math.max((this.elapsed - this.delay) / this.duration, 0),
      1,
    );
  }
}
