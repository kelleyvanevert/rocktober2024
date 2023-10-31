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
    info: `Julia (my biggest fan, I sent her daily updates): "Ik krijg hier een beetje stress van" XD`,
  },
  {
    title: "I really need to get MIDI input working",
    path: "/tracks/12 - I really need to get MIDI input working.mp3",
    info: "I do really need to get my MIDI setup working through, haha. Recording was a MESS. I had my keyboard playing aloud and my laptop recording from mic in, but that also meant I couldn't play over existing fragments :|",
  },
  {
    title: "El pájaro reggaetón",
    path: "/tracks/13 - El pájaro reggaetón.mp3",
    info: "This is a bit of an inside joke, I'm playing with the sound that the enigmatic 'Russian spy bird' (+ fish), that Manca once found on the street, makes. Combined with some text from Manca and Cyril :P I think Cyril or I messed up 'pájaro' btw.",
  },
  {
    title: "Resolve",
    path: "/tracks/14 - Resolve.mp3",
    info: "Let's just say that I didn't have a lot of resolve today :P",
  },
  {
    title: "Lullaby",
    path: "/tracks/15 - Lullaby.mp3",
    info: "Chen: 'Can you make something oriental?'",
  },
  {
    title: "Placeholder",
    path: "/tracks/16 - Placeholder.mp3",
    info: "No time, no energy",
  },
  {
    title: "Me cago en la puta de tu madre",
    path: "/tracks/17 - Me cago en la puta de tu madre.mp3",
    info: "Yesterday we had a nice dinner with the whole household, new and old roommates alike, and Maria -- and I got some good cussing samples :D I based this off of Maria's",
  },
  {
    title: "A distinct mmmmhh composition",
    path: "/tracks/18 - A distinct mmmmhh composition.mp3",
    info: "I totally forgot that I started watching Love is Blind with Carlota just because of this one crazy interview from it that I'd seen on TikTok, so I sampled it. My sister, who loves psytrance, says the second part is still a bit too much like techno though XD",
  },
  {
    title: "Machinist",
    path: "/tracks/19 - Machinist.mp3",
    info: "Cyril and I went to the NS open day for becoming a machinist today. I'm not so super happy with my excessive use of the voice sample, and generally the decoration of today's song, which I started out with a lot of enthusiasm..",
  },
  {
    title: "Raindrops",
    path: "/tracks/20 - Raindrops.mp3",
    info: "Today was really not a day for making music .. but, when playing around with the arpeggiator function of my new MIDI controller while setting it up, I started falling in love with the sound of the randomized arpeggiated staccato piano, which I then continued decorating according to my mood. And I brought back an old friend into the song: the double harmonized high-pitched sine waves :)",
  },
  {
    title: "Cruiseship",
    path: "/tracks/21 - Cruiseship.mp3",
    info: `At Chen's place, so I didn't want to spend too much time making music. I was very happy finding the "cruis ship fog horn" sound at the end though (for different future purposes), hence the name of the song.`,
  },
  {
    title: "Robots having a reasonably good time",
    path: "/tracks/22 - Robots having a reasonably good time.mp3",
    info: `Second day at Chen's, we went to a library in the city center so she could read her book and I could work on my song. I started out trying to make a simple drum pattern sound deep and interesting, and then wanted to layer yesterday's "fog horn" over it. In the end I kinda rushed it to completion though, and now it's a .. funny mixture`,
  },
  {
    title: "Nightmare",
    path: "/tracks/23 - Nightmare.mp3",
    info: `What started out as an attempt to play a cute (maybe beautiful) piece via my new MIDI controller ... turned into a nightmare storytelling situation, to try to save face when the first thing failed XD Turns out .. that "just playing some piano" is not super easy, when you haven't really played any piano in such a long time... :|`,
  },
  {
    title: "I need that in my life",
    path: "/tracks/24 - I need that in my life.mp3",
    info: `'Cause Carlota and I are watching Love is Blind a lot recently, and it's just such a good source of samples, haha`,
  },
  {
    title: "Funk practice",
    path: "/tracks/25 - Funk practice.mp3",
    info: "Listening this song back, I think I made a little classic mistake -- I added the guitar track later, but now that it assumes primary focus, it 'decides' the downbeat, making the song wonkier than I intended :P I didn't notice this while making it, because I was already focused on the 'correct' downbeat that I decided on while making the bass line..",
  },
  {
    title: `Advent of Code 2022 - Day 5 - "Supply Stacks"`,
    path: `/tracks/26 - Advent of Code 2022 - Day 5 - "Supply Stacks".mp3`,
  },
  {
    title: "Simplified Neo Soul",
    path: "/tracks/28 - Simplified Neo Soul.mp3",
  },
  {
    title: "28 dagen Cyril",
    path: "/tracks/29 - 28 dagen Cyril.mp3",
  },
  {
    title: "Dinosaurs are still alive",
    path: "/tracks/30 - Dinosaurs are still alive.mp3",
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
