import Link from "next/link";
import React from "react";

function CallToAction({ dictionary }) {
  return (
    <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-[20px] md:px-[100px]">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {dictionary.CallToActionHeading}
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              {dictionary.CallToActionSubTitle}
            </p>
          </div>
          <div className="space-x-4">
            <Link
              href={"/contact"}
              className="bg-white text-primary py-2 px-7 rounded-md hover:bg-white/80"
            >
              {dictionary.contactButonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
