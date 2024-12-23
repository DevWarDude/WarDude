const Experience = (prop) => {
  return (
    <section
      className={`${prop.className} flex flex-col items-center justify-center mb-[80px]`}
      id="experience"
    >
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-300 text-3xl to-orange-500 font-bold mb-7 text-center font-mono">
        EXPERIENCE
      </h1>
      <div className="w-[85%] flex flex-col gap-10">
        <div>
          <div className=" items-center justify-between lg:flex text-white">
            <div className="flex gap-5 mb-2">
              <p className="font-bold text-lg md:text-2xl">
                Intern Frontend Developer at Distinct Digital Strategy
              </p>
            </div>
            <span className="lg:block font-medium text-base  md:text-xl  md: md:font-semibold">
              Feb 2024 - Present
            </span>
          </div>
          <small className="text-stone-300 lg:font-thin md:text-lg ">
            As an Intern Frontend Developer at Distinct Digital Strategy since
            February 2024, I have gained valuable experience in designing and
            developing user-centric web interfaces. My role involves
            collaborating with cross-functional teams to implement responsive
            designs, optimize website performance, and ensure seamless user
            experiences
          </small>
        </div>
        <div>
          <div className="items-center justify-between lg:flex">
            <div className="flex gap-5 mb-2">
              <p className="font-bold text-lg md:text-2xl">
                Junior Frontend Developer at VirtualTourNG
              </p>
            </div>
            <span className="lg:block font-medium md:font-semibold text-base   md:text-xl">
              Mar 2024 - Present
            </span>
          </div>
          <small className="text-stone-300 lg:font-thin md:text-lg">
            As a Junior Frontend Developer at VirtualTourNG since March 2024.
            Leveraging technologies like JavaScript, Tailwind CSS, and Three.js,
            I have contributed to dynamic projects that align with modern web
            standards and client needs. This experience has strengthened my
            problem-solving skills and deepened my understanding of front-end
            development practices.
          </small>
        </div>
      </div>
    </section>
  );
};

export default Experience;
