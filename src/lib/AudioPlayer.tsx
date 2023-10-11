"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { PlayPauseButton } from "./PlayPauseButton";
import { useDarkMode } from "./useDarkMode";
import { useRefCallback } from "./useRefCallback";

type Props = {
  dayNo: number;
  className?: string;
  id?: string;
  playNext?: string;
  title: string;
  info?: ReactNode;
  url: string;
};

export function AudioPlayer({
  dayNo,
  className,
  id,
  playNext,
  title,
  info,
  url,
}: Props) {
  const isDarkMode = useDarkMode();

  const waveformContainer = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [instance, setInstance] = useState<WaveSurfer>();

  const colors = useMemo(() => {
    if (isDarkMode) {
      return {
        cursorColor: "#fff",
        cursorColorWhenInactive: "transparent",
        progressColor: "#eee",
        waveColor: "#444",
      };
    }

    return {
      cursorColor: "#000",
      cursorColorWhenInactive: "transparent",
      progressColor: "#222",
      waveColor: "#ddd",
    };
  }, [isDarkMode]);

  const [mostRecentlyActive, setMostRecentlyActive] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!instance) return;

    instance.setOptions({
      cursorColor: mostRecentlyActive
        ? colors.cursorColor
        : colors.cursorColorWhenInactive,
      progressColor: colors.progressColor,
      waveColor: colors.waveColor,
    });
  }, [colors, mostRecentlyActive, instance]);

  const pause = useRefCallback((fromOtherPlayer?: boolean) => {
    if (!instance) return;

    setPlaying(false);
    instance?.pause();

    if (fromOtherPlayer) {
      setMostRecentlyActive(false);
    }
  });

  const play = useRefCallback((fromStart = false) => {
    if (!instance) return;

    (window as any).stopCurrentlyPlaying?.();
    (window as any).stopCurrentlyPlaying = () => {
      pause(true);
    };

    setPlaying(true);
    setMostRecentlyActive(true);
    if (fromStart) {
      instance.seekTo(0);
    }
    instance?.play();
  });

  const playOrPause = useRefCallback(() => {
    if (!playing) {
      play();
    } else {
      pause();
    }
  });

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      (async () => {
        const instance = WaveSurfer.create({
          container: waveformContainer.current!,
          height: 60,
          barWidth: 2,
          barHeight: 1,
          barGap: 1,
          cursorWidth: 3,
          cursorColor: colors.cursorColorWhenInactive,
          progressColor: colors.progressColor,
          waveColor: colors.waveColor,
        });

        instance.load(url);

        instance.on("ready", () => {
          setInstance(instance);
          if (id) {
            (window as any).playerInstances = {
              ...(window as any).playerInstances,
              [id]: () => play(true),
            };
          }
        });

        instance.on("seeking", () => {
          play();
        });

        instance.on("finish", () => {
          pause();
          if (playNext) {
            (window as any).playerInstances?.[playNext]?.();
          }
        });
      })();
    }
  }, []);

  useEffect(() => {
    return () => {
      instance?.pause();
      // .destroy() would be better, because this technically could lead to a memory leak on lots of navigation, but, then there's a bug in my code where a nav back to the music page leads to "read from null" errors. So pausing will do for now :P
    };
  }, [instance]);

  return (
    <div className={className}>
      <div className="text-sm text-[var(--muted)] select-none">Day {dayNo}</div>
      <div className="font-bold leading-tight text-xl text-[var(--hard)]">
        {title}
      </div>

      <div className="mt-1 text-sm text-[var(--muted)]">
        {info}{" "}
        <span className="whitespace-nowrap">
          (
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href={url}
          >
            audio file
          </a>
          )
        </span>
      </div>

      <div className="mt-4 mb-4 h-[60px] flex">
        <PlayPauseButton
          onClick={playOrPause}
          loading={!instance}
          playing={playing}
        />
        <div
          ref={waveformContainer}
          className="grow h-[60px] cursor-pointer"
        ></div>
      </div>
    </div>
  );
}
