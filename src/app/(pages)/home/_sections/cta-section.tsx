import { Button } from "@basj/components/core/button/Button";

import { FC } from "react";
import { CtaTitle } from "../_components/cta-title";
import { CtaMessage } from "../_components/cta-message";

export const CtaSection: FC = () => {
  return (
    <section
      id="cta"
      className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col justify-center items-center self-stretch"
      style={{
        background:
          "url(https://s3-alpha-sig.figma.com/img/a09d/8b59/72ec71f3f0c4f62751809df7e77f1b6c?Expires=1692576000&Signature=RGHaMGOf8TbBxwLK7qNFN5fgF6WGAivN2W8xOjKc9Zqc2z5K7LplJ6AoPtoLsS5yV379meHPRJKtf81M6EeQ2sRGn73pGRoh7ECf8jkLklCWm2KexiCimCJO3uZCIvw2tz5vrjaYCiFLAktOelyBUHZf-8MhvNIVmLRKArsBTfTdWklD2I7f9IitoUYApyQ0lFDVnyxYfKqCE3QGlpiTm5n4wglyLZh64unQXCOXXw-xi~hzkuGKwNJso0JBEUOSXXY~Yd2Ddb8LCE0B8puSpKfaY7zl0MJ~2zIQAkpA8C5j6CN0JjO9RH7S-MSNOvDCRikHldD8rUWGD5AzS7GJ7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4) center center/cover",
      }}
    >
      <div className="flex py-10 md:py-20 px-8 md:px-[120px] xl:px-[200px] flex-col justify-center items-center gap-6 md:gap-7 self-stretch md:self-auto rounded-[20px] md:rounded-[40px] bg-[rgba(176,93,36,0.40)] backdrop-blur-[5px] text-primary-white">
        <CtaTitle />
        <CtaMessage />
        <Button outline="light">Contact us</Button>
      </div>
    </section>
  );
};