/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <>
      {/* <!-- HERO section start --> */}
      <section
        id="home"
        className="color-animate bg-gradient-light-1 pt-36 dark:bg-gradient-dark-1 lg:pt-7">
        {/* <!-- <div
        className="bg-svg-grid__light dark:bg-svg-grid__dark absolute bottom-0 left-0 right-0 top-0 z-0"
      ></div> --> */}
        <div className="container">
          <div className="flex flex-wrap">
            {/* <!-- Text --> */}
            <div className="z-50 w-full self-center px-4 lg:w-1/2">
              <div className="ml-1 flex items-center gap-1 font-inter text-2xl font-semibold text-dark2 dark:text-light1">
                Hello!
                <div>
                  <img
                    src="/assets/img/emticon-hand.png"
                    alt="emoticon hand"
                    className="w-7 md:w-10"
                  />
                </div>
              </div>
              <h1 className="text-color--tittle whitespace-nowrap font-jakarta text-base font-bold md:text-xl">
                <span className="block text-4xl font-bold lg:text-7xl">
                  I'm <span className="text-color--green">Albi </span>Mudakar,
                </span>
              </h1>
              <h2 className="text-color--subtittle mb-2.5 mt-2 text-base font-semibold lg:text-xl">
                Cloud Engineer | Web Developer | Network Enthusiast.
              </h2>
              <p className="text-color--desc text-md mb-6 leading-relaxed lg:whitespace-nowrap">
                A passionate build scalable Cloud, solving problems, and detail
                attention oriented.
              </p>
              <a
                href="#contact"
                className="animate btn-bg-primary rounded-2xl px-8 py-3 text-base font-semibold text-light2 shadow-sm">
                Contact
              </a>
              <a
                href="#"
                className="animate btn-bg-secondary btn-text-color-secondary mx-2 rounded-2xl px-6 py-3 text-base font-semibold">
                Resume CV
              </a>
            </div>
            {/* <!-- Image --> */}
            <div className="z-10 w-full self-end px-4 lg:w-1/2">
              <div className="lg:rigth-0 relative mt-10 lg:mt-9">
                <img
                  src="/assets/img/my-profile.svg"
                  alt="Albi Mudakar"
                  className="mx-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
