type Props = {
  loading?: boolean;
  playing: boolean;
  onClick?: () => void;
};

export function PlayPauseButton({ loading, playing, onClick }: Props) {
  return (
    <button
      className="w-[60px] h-[60px] grow-0 shrink-0 group transform transition-transform active:scale-90 outline-none"
      type="button"
      onClick={onClick}
    >
      {renderIcon(loading, playing)}
    </button>
  );
}

function renderIcon(loading = false, playing = false) {
  if (loading) {
    return (
      <svg
        key="loading"
        width="60"
        height="60"
        viewBox="-2 -2 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fillRule="evenodd"
          strokeWidth="2"
          className="stroke-black dark:stroke-white"
        >
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    );
  }

  return (
    <svg
      key="play_pause"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {playing ? (
        <g key="playing">
          <rect
            x="21"
            y="20"
            width="6"
            height="20"
            className="fill-black dark:fill-white"
          />
          <rect
            x="33"
            y="20"
            width="6"
            height="20"
            className="fill-black dark:fill-white"
          />
        </g>
      ) : (
        <g key="paused">
          <path
            d="M22.5,30 v-11 l18,11 l-18,11 z"
            className="fill-black dark:fill-white"
          />
        </g>
      )}
      <path
        d="M18,44 h24 v2.5 h-24 z"
        className="fill-black dark:fill-white invisible group-focus:visible"
      />
    </svg>
  );
}
