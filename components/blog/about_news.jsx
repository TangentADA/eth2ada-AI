import React from "react";
import { single_news_data } from "../../data/news_data";
import HeadLine from "../headLine";
import Image from "next/image";
import News_item from "./news_item";

const About_news = () => {
  return (
    <>
      {/* <!-- Latest Posts --> */}
      <section className="relative py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            src="/images/gradient_light.jpg"
            layout="fill"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          <HeadLine
            text="You Might Have Read About Us In The News"
            classes="font-display text-jacarta-700 mb-12 text-center text-3xl dark:text-white"
          />

          <News_item data={single_news_data.slice(1, 4)} />
        </div>
      </section>
      {/* <!-- end latest posts --> */}
    </>
  );
};

export default About_news;
