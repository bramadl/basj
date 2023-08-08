import { FC } from "react";

import { TestimonyCard } from "../_components/testimony-card";
import { TestimonySwiper } from "../_components/testimony-swiper";

export const TestimonialSection: FC = () => {
  return (
    <section
      id="testimonial"
      className="flex py-[72px] md:py-[100px] px-8 md:px-[120px] flex-col items-start gap-12 md:gap-[72px] self-stretch bg-primary-forest-green"
    >
      <h2 className="text-primary-white text-mobile-h2-700 md:text-desktop-h2-700 text-center self-stretch">
        Let the number speaks.
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 self-stretch">
        <TestimonyCard variant="white" />
        <TestimonyCard variant="primary" />
      </div>
      <TestimonySwiper />
    </section>
  );
};
