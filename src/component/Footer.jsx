import { FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = (prop) => {
  useEffect(() => {
    gsap.fromTo(
      ".contact-title",
      {
        scale: 0.1,
      },
      {
        scale: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".tech",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
        // fontFamily: "font-ubuntu",
      }
    );

    gsap.fromTo(
      ".contact",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact",
          start: "top 100%",
          toggleActions: "play none none ",
        },
        // fontFamily: "font-audiowide",
      }
    );
  }, []);

  return (
    <footer
      className={`bg-zinc-800  flex justify-center text-stone-300  py-16 ${prop.className}`}
      id="contact"
    >
      <section className="flex flex-col gap-3  w-[85%]">
        <p className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-b from-red-300  to-orange-500 font-audiowide contact-title">
          Contacts
        </p>

        <span className="text-stone-200 opacity-65 lg:font-thin  md:text-lg font-ubuntu ">
          Season Frontend Frontend Engineer with over 2 years of hands-on
          experience in designing and implementing scalable and innovative web
          solutions. Adapt at leveraging a comprehensive skill set encompassing
          front-end technologies.
        </span>
        <div
          className="flex
       items-center gap-2 contact text-stone-300 lg:font-thin  md:text-lg font-ubuntu"
        >
          <FaEnvelope />
          <span className=" contact  opacity-65 lg:font-thin  md:text-lg font-ubuntu">
            Wardude704@gamil.com
          </span>
        </div>
        <div className="flex gap-[10px] items-center">
          <svg
            className="h-[25px] w-[25px] cursor-pointer contact"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -7559.000000)"
                fill="white"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                    id="github-[#142]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="h-[25px] w-[25px] fill-current text-white cursor-pointer contact"
          >
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
          </svg>
          <svg
            className="h-[25px] w-[25px] fill-current text-white cursor-pointer contact"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>linkedin</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none" />
                <rect width="48" height="48" fill="none" />
              </g>
              <g id="icons_Q2" data-name="icons Q2">
                <path d="M41,4.1H7A2.9,2.9,0,0,0,4,7V41.1A2.9,2.9,0,0,0,7,44H41a2.9,2.9,0,0,0,2.9-2.9V7A2.9,2.9,0,0,0,41,4.1Zm-25.1,34h-6v-19h6Zm-3-21.6A3.5,3.5,0,0,1,9.5,13a3.4,3.4,0,0,1,6.8,0A3.5,3.5,0,0,1,12.9,16.5ZM38,38.1H32.1V28.8c0-2.2,0-5-3.1-5s-3.5,2.4-3.5,4.9v9.4H19.6v-19h5.6v2.6h.1a6.2,6.2,0,0,1,5.6-3.1c6,0,7.1,3.9,7.1,9.1Z" />
              </g>
            </g>
          </svg>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
