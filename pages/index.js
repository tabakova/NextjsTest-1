import { Main } from "../sections";

const mainProps = {
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  image: { src: "/img/video.png", alt: "Video Image", width: 320, height: 500 },
  cardtopimage: { src: "/img/topcardicon.png", alt: "Top card image", width: 83, height: 69},
  cardtitletop: "Brief",
  carddescriptiontop: "Complete brief writing or simple guidance on what to include, we've got you covered.",
  cardmidimage: { src: "/img/midcardicon.png", alt: "Mid card image", width: 83, height: 73 },
  cardtitlemid: "Search",
  carddescriptionmid: "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
  cardbottomimage: { src: "/img/bottomcardicon.png", alt: "Bottom card image", width: 83, height: 76 },
  cardtitlebottom: "Pitch",
  carddescriptionbottom: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Main {...mainProps} />
        {/** Other sections */}
      </div>
    </>
  );
}
