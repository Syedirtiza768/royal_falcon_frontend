import Link from "next/link";
import React from "react";

function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-[20px] md:px-[100px]">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Transform Your Workforce?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              It&apos;s not just about working smarter; it&apos;s about working
              better, together.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              href={"/contact"}
              className="bg-white text-primary py-2 px-7 rounded-md hover:bg-white/80"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
