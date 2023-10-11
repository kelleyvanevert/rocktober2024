import { AudioPlayer } from "@/lib/AudioPlayer";

const tracks = [
  {
    title: "Carlota explores the ocean",
    path: "/tracks/01 - Carlota explores the ocean.mp3",
    info: "Wow, I had so much fun making this :P This is going to be a good month...",
  },
  {
    title: "Love is blind",
    path: "/tracks/02 - Love is blind.mp3",
    info: "Just some trash talk from our new guilty pleasure dinner time series here at Loggerhof.",
  },
  {
    title: "Kort geding",
    path: "/tracks/03 - Kort geding.mp3",
    info: "It sounds way more dramatic/depressing than it actually was BTW -- but for the song, it works.",
  },
  {
    title: "Breathe",
    path: "/tracks/04 - Breathe.mp3",
    info: "YES! this might be my favorite one yet. ",
  },
  {
    title: "Scary story",
    path: "/tracks/05 - Scary story.mp3",
    info: "Not a vibe, sadly. My worst one yet.",
  },
  {
    title: "Exhausted",
    path: "/tracks/06 - Exhausted.mp3",
    info: "I was sooo depleted, so I just made something cute...",
  },
  {
    title: "Rust, a memory-safe programming language ft. Auke",
    path: "/tracks/07 - Rust, a memory-safe programming language ft. Auke.mp3",
    info: "Auke's challenge was so send me something in the piano, based on the Golden Road chord progression. And then I turned it into lo-fi :P",
  },
  {
    title: "Powerbank",
    path: "/tracks/08 - Powerbank.mp3",
    info: "Based on a recording Manca made for me of a Swedish airplane announcement. (Thanks!!) Swedish is so sexy.",
  },
  {
    title: "Warning signs of potential organizing",
    path: "/tracks/09 - Warning signs of potential organizing.mp3",
    info: "Amazon's leaked video on unionizing is ... aggrevating :|",
  },
  {
    title: "Alien helicopter ft. Noa",
    path: "/tracks/10 - Alien helicopter ft. Noa.mp3",
    info: "Starting point of this track was random-arpeggiated flute notes, ..and then Noa and I tried turning it into something XD",
  },
  {
    title: "Flute 'n bass",
    path: "/tracks/11 - Flute 'n bass.mp3",
    info: "I figured I'd make another drum n bass song :)",
  },
];

export default function Home() {
  return (
    <main>
      <div className="mt-14 mb-8 md:mt-20 md:mb-12">
        <h1 className="font-black text-5xl text-center">Rocktober 2023</h1>
        <p className="mt-4 text-center italic">
          Make{" "}
          <a href="https://klve.nl" className="link">
            Kelley
          </a>{" "}
          make more music!
        </p>
      </div>

      <div className="mt-6 md:mt-14 max-w-[800px] mx-auto">
        {tracks.map((track, i) => {
          return (
            <AudioPlayer
              key={i}
              className="py-3 md:py-5"
              dayNo={i + 1}
              id={`track_${i}`}
              playNext={i < tracks.length ? `track_${i + 1}` : undefined}
              title={track.title}
              info={track.info}
              url={track.path}
            />
          );
        })}
      </div>
    </main>
  );
}
