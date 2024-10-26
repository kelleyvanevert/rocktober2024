import { AudioPlayer } from "@/lib/AudioPlayer";

const tracks = [
  {
    title: "wtf",
    path: "/tracks/01-10-2024-Inorganic Mechanic-wtf.mp3",
  },
  {
    title: "Park",
    path: "/tracks/02-10-2024-Inorganic Mechanic-Park.mp3",
  },
  {
    title: "BBC",
    path: "/tracks/03-10-2024-Inorganic Mechanic-BBC.mp3",
  },
  {
    title: "Way too many legs",
    path: "/tracks/04-10-2024-Inorganic Mechanic-Way too many legs.mp3",
  },
  {
    title: "Printen",
    path: "/tracks/05-10-2024-Inorganic Mechanic-Printen.mp3",
  },
  {
    title: "I always wanted to eat them",
    path: "/tracks/06-10-2024-Inorganic Mechanic-I always wanted to eat them.mp3",
  },
  {
    title: "5400 RPM",
    path: "/tracks/07-10-2024-Inorganic Mechanic-5400 RPM.mp3",
  },
  {
    title: "Back to harmonics",
    path: "/tracks/08-10-2024-Inorganic Mechanic-Back to harmonics.mp3",
  },
  {
    title: "Microwave",
    path: "/tracks/09-10-2024-Inorganic Mechanic-Microwave.mp3",
  },
  {
    title: "22nd century music",
    path: "/tracks/10-10-2024-Inorganic Mechanic-22nd century music.mp3",
  },
  {
    title: "Flight",
    path: "/tracks/11-10-2024-Inorganic Mechanic-Flight.mp3",
  },
  {
    title: "Message",
    path: "/tracks/12-10-2024-Inorganic Mechanic-Message.mp3",
  },
  {
    title: "2 tracks",
    path: "/tracks/13-10-2024-Inorganic Mechanic-2 tracks.mp3",
  },
  {
    title: "Robot Sewage Dawg",
    path: "/tracks/14-10-2024-Inorganic Mechanic-Robot Sewage Dawg.mp3",
  },
  {
    title: "High",
    path: "/tracks/16-10-2024-Inorganic Mechanic-High.mp3",
  },
  {
    title: "Nespresso",
    path: "/tracks/17-10-2024-Inorganic Mechanic-Nespresso.mp3",
  },
  {
    title: "well then",
    path: "/tracks/18-10-2024-Inorganic Mechanic-well then.mp3",
  },
  {
    title: "Playing something with Elliot",
    path: "/tracks/19-10-2024-Inorganic Mechanic-Playing something with Elliot.mp3",
  },
  {
    title: "Moan",
    path: "/tracks/20-10-2024-Inorganic Mechanic-Moan.mp3",
  },
  {
    title: "Proto-Justice",
    path: "/tracks/21-10-2024-Inorganic Mechanic-Proto-Justice.mp3",
  },
  {
    title: "Lekker last minute weer",
    path: "/tracks/22-10-2024-Inorganic Mechanic-Lekker last minute weer.mp3",
  },
  {
    title: "Meow",
    path: "/tracks/23-10-2024-Inorganic Mechanic-Meow.mp3",
  },
];

export default function Home() {
  return (
    <main>
      <div className="mt-14 mb-8 md:mt-20 md:mb-12">
        <h1 className="font-black text-5xl text-center">Rocktober 2024</h1>
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
              // info={track.info}
              url={track.path}
            />
          );
        })}
      </div>
    </main>
  );
}
