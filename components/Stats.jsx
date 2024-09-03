"use client";

import CountUp from "react-countup";

const stats = [
    {
      num: 1,
      text: "Year Of Experience"
    },
    {
      num: 10,
      text: "Projects Completed"
    },
    {
      num: 6,
      text: "Technology Expertise"
    }

];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-10 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 item-center justify-center xl:justify-center"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-tight sm:leading-tight md:leading-snug text-white/80`}>
                  {item.text.trim()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats
