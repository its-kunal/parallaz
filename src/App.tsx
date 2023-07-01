
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import sunSVG from "./assets/Sun.png";
import bullockCartSVG from "./assets/Bullock Cart.png";
import LandSVG from "./assets/Land.png";


export default function App() {
  
  return (
    <div className="bg-[#5f0b08]">
      <Parallax pages={3} className="bg-[#5f0b08]">
        <ParallaxLayer className="overflow-hidden bg-gradient-to-b from-[#af5613] to-[#5f0b08]"></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          className="overflow-hidden"
          speed={0.4}
          factor={1}
        >
          <img src={sunSVG} alt="" className="h-screen w-full object-cover " />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={0.15}>
          <div className="text-[#5f0b08] font-black text-5xl text-center font-playfair ">
            Agriculture
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          className="overflow-hidden"
          speed={0.3}
          // horizontal={true}
        >
          <img
            src={bullockCartSVG}
            alt=""
            className="h-screen w-full object-cover"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} className="overflow-hidden" speed={0.4}>
          <img src={LandSVG} alt="" className="h-screen w-full object-cover" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          factor={2}
          className="overflow-hidden bg-gradient-to-b to-[#af5613] from-[#5f0b08]"
        ></ParallaxLayer>
        <ParallaxLayer offset={1} factor={2}>
          <div className="flex justify-center pt-4">
            <div className="text-[#e5d49e] px-2 text-lg text-center font-animata">
              <h1 className="font-black text-3xl my-4">Fields of Legacy</h1>
              <p>
                In the realm of golden fields, where life unfolds,
                <br />
                Where nature's blessings and stories are told,
                <br />
                A symphony of colors, a tapestry so grand,
                <br />
                The song of agriculture, nurtured by the farmer's hand.
                <br />
              </p>{" "}
              <Divider />
              <p>
                Oh, the humble tiller, with heart so pure,
                <br />
                A steward of the land, steadfast and sure,
                <br />
                With calloused palms and a spirit bright,
                <br />
                They toil with love from morning till night.
                <br />
              </p>{" "}
              <Divider />
              <p>
                They sow the seeds with hope in their eyes,
                <br />
                Embracing the earth with tender ties,
                <br />
                In sunlit meadows, their dreams take root,
                <br />
                As they nurture each plant, from shoot to fruit.
                <br />
              </p>{" "}
              <Divider />
              <p>
                They dance with joy as raindrops fall,
                <br />
                As nature's gift, a blessing for all,
                <br />
                Their faces adorned with radiant smiles,
                <br />
                Mirroring nature's abundance in miles.
                <br />
              </p>{" "}
              <Divider />
              <p>
                With gentle care, they chase away the pests,
                <br />
                Protecting the crops like guardians blessed,
                <br />
                Their knowledge deep, their wisdom profound,
                <br />
                As they work in harmony with the fertile ground.
                <br />
              </p>{" "}
              <Divider />
              <p>
                They harvest the rewards of their patient wait,
                <br />
                Bounty aplenty, a divine fate,
                <br />
                From golden grains to fruits so sweet,
                <br />
                The farmer's labor, a triumph complete.
                <br />
              </p>{" "}
              <Divider />
              <p>
                In fields alive, they find their delight,
                <br />
                In nature's canvas, a vibrant sight,
                <br />
                The rhythm of life, a joyful song,
                <br />
                In the symphony of agriculture, they belong.
                <br />
              </p>{" "}
              <Divider />
              <p>
                So let us honor the farmer's worth,
                <br />
                Their tireless spirit, their humble birth,
                <br />
                For in their toil, the world is fed,
                <br />
                With abundance and joy, our hearts are led.
                <br />
              </p>{" "}
              <Divider />
              <p>
                To the farmers, we raise a grateful cheer,
                <br />
                For their tireless efforts throughout the year,
                <br />
                In their hands, the earth finds its rebirth,
                <br />
                The guardians of nature, the stewards of mirth.
                <br />
              </p>{" "}
              <Divider />
              <p>
                In this ode to agriculture, let us rejoice,
                <br />
                And celebrate the farmer with one resounding voice,
                <br />
                For in their labor, a nation is fed,
                <br />
                With happiness and gratitude, our spirits are spread.
                <br />
              </p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

function Divider() {
  return <div className="h-[0.1px] rounded-full bg-[#e5d49e] my-[5px]"></div>;
}

// function App1() {
//   return (
//     <Parallax pages={2}>
//       <ParallaxLayer speed={0}>
//         <div className="bg-yellow-600 h-full w-full"></div>
//       </ParallaxLayer>
//       <ParallaxLayer speed={0.1}>
//         <div className="bg-black h-full w-full"></div>
//       </ParallaxLayer>

//       <ParallaxLayer offset={1}>
//         <div className="bg-purple-950 h-full w-full"></div>
//       </ParallaxLayer>
//     </Parallax>
//   );
// }
