import { Animation } from "./Animation";
import { Timeline } from "./Timeline";
import { RAF } from "./RAF";

export class Engine {
  private animations = new Set<Animation>();
  private timelines = new Set<Timeline>();

  /**
   * Register animation
   */
  public addAnimation(animation: Animation) {
    this.animations.add(animation);

    return animation;
  }

  /**
   * Remove animation
   */
  public removeAnimation(animation: Animation) {
    animation.stop();

    this.animations.delete(animation);
  }

  /**
   * Register timeline
   */
  public addTimeline(timeline: Timeline) {
    this.timelines.add(timeline);

    return timeline;
  }

  /**
   * Remove timeline
   */
  public removeTimeline(timeline: Timeline) {
    timeline.stop();

    this.timelines.delete(timeline);
  }

  /**
   * Pause everything
   */
  public pauseAll() {
    this.animations.forEach(animation => {
      animation.pause();
    });

    this.timelines.forEach(timeline => {
      timeline.pause();
    });

    RAF.pause();
  }

  /**
   * Resume everything
   */
  public resumeAll() {
    RAF.resume();

    this.animations.forEach(animation => {
      animation.resume();
    });

    this.timelines.forEach(timeline => {
      timeline.resume();
    });
  }

  /**
   * Stop everything
   */
  public stopAll() {
    this.animations.forEach(animation => {
      animation.stop();
    });

    this.timelines.forEach(timeline => {
      timeline.stop();
    });
  }

  /**
   * Destroy everything
   */
  public destroy() {
    this.stopAll();
    this.animations.clear();
    this.timelines.clear();

    RAF.clear();
  }

  /**
   * Debug information
   */
  public stats() {
    return {
      animations: this.animations.size,
      timelines: this.timelines.size,
      rafRunning: RAF.isRunning(),
      rafCallbacks: RAF.size(),
    };
  }
}

export const engine = new Engine();