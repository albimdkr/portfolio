/* eslint-disable react/no-unescaped-entities */
export default function Experience() {
  return (
    <>
      {/* <!-- EXPERIENCE section start --> */}
      <section
        id="experience"
        className="color-animate bg-gradient-light-2 pb-32 pt-36 dark:bg-gradient-dark-2">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="text-color--green mb-2 text-lg font-bold uppercase">
                Bangkit 2023 Batch 2 Alumni
              </h4>
              <h2 className="text-color--tittle lg:text-1xl text-3xl font-bold sm:text-4xl">
                Cloud Computing
              </h2>
              <p className="text-md text-color--desc mt-2 font-medium md:text-lg">
                One of 4,520 selected students in Bangkit Academy. Bangkit is a
                career readiness program that aims to produce high-caliber
                technical talent for world-className Indonesian technology
                companies and startups, fully supported by Google, GoTo, and
                Traveloka.
              </p>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="https://grow.google/intl/id_id/bangkit/"
                className="mx-4 max-w-[200px] py-4 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 dark:hidden marker:lg:mx-6 xl:mx-8"
                target="_blank">
                <img
                  src="/assets/img/bangkit/bangkit.svg"
                  alt="Bangkit Academy"
                />
              </a>
              <a
                href="https://grow.google/intl/id_id/bangkit/"
                className="mx-4 hidden max-w-[200px] py-4 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 dark:block lg:mx-6 xl:mx-8"
                target="_blank">
                <img
                  src="/assets/img/bangkit/bangkit-white.svg"
                  alt="Bangkit Academy"
                />
              </a>
              <a
                href="https://grow.google/intl/id_id/"
                className="mx-4 max-w-[120px] py-4 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                <img
                  src="/assets/img/bangkit/google.svg"
                  alt="Google"
                  target="_blank"
                />
              </a>
              <a
                href="https://www.gotocompany.com/"
                className="mx-4 max-w-[120px] py-4 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                <img
                  src="/assets/img/bangkit/goto.svg"
                  alt="Goto"
                  target="_blank"
                />
              </a>
              <a
                href="https://www.traveloka.com/en-id"
                className="mx-4 max-w-[120px] py-4 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                <img
                  src="/assets/img/bangkit/traveloka.svg"
                  alt="Traveloka"
                  target="_blank"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- EXPERIENCE section end --> */}
    </>
  );
}
