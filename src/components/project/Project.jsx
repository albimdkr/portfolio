/* eslint-disable react/no-unescaped-entities */

export default function Project() {
  return (
    <>
      {/* <!-- PROJECT section start --> */}
      <section
        id="projects"
        className="color-animate bg-gradient-light-1 pb-16 pt-36 dark:bg-gradient-dark-1">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="text-color--green mb-2 text-lg font-semibold uppercase">
                Portfolio
              </h4>
              <h2 className="text-color--tittle lg:text-1xl text-3xl font-bold sm:text-4xl">
                Project Overview
              </h2>
              <p className="text-md text-color--desc mt-2 font-medium md:text-lg">
                Here are some of the projects I've worked on over time
              </p>
            </div>

            {/* <!-- Start --> */}
            <div className="container">
              <div className="flex flex-row gap-8">
                {/* <!-- LG --> */}
                <div className="mx-auto hidden max-w-40 px-12 md:block md:pb-24">
                  <div className="relative top-0 mt-4 pt-1.5 md:sticky md:top-[86px]">
                    <div className="text-color--subtittle flex-grow font-sora font-semibold">
                      <time dateTime="2022-02-11" className="w-20">
                        03/02/2023
                      </time>
                    </div>
                  </div>
                </div>
                <div className="dark:border-divider-dark border-divider-light items-stretch border dark:border-light2/10"></div>
                <div className="flex min-w-0 flex-1 flex-col gap-16 md:gap-0 md:py-4">
                  <article className="md:pb-16">
                    <div className="fm:relative fm:top-0 pointer-events-none sticky top-[86px] -ml-10 pb-12 md:-ml-[2rem] lg:-ml-[3%]">
                      <div className="absolute -ml-0.5 mt-2.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-white dark:border-slate-300 dark:bg-slate-900 md:-ml-3 md:mt-2 md:h-5 md:w-5"></div>
                      <div className="absolute z-[-1] -ml-2 mt-4 w-8 border border-slate-700 dark:border-slate-300 md:-ml-4 md:w-10 lg:w-12"></div>
                    </div>
                    <div className="container flex">
                      <div className="-mt-12">
                        <h2 className="text-color--tittle mt-1 text-xl font-semibold">
                          SECLOUD
                        </h2>
                        <div className="mb-2 mt-1">
                          <span className="project--label">#Cloud</span>
                          <p className="text-color--desc mt-2 text-justify">
                            SECloud is a web-based cloud storage application, in
                            SECloud can store various media files such as
                            photos, videos, documents, pdf, zip, and others. In
                            its development, we made the Cloud Storage using the
                            Elastic Compute Service from Alibaba Cloud as a
                            website server and also used a domain from rumahweb.
                            This project is developed in the native language PHP
                            and also HTML, CSS, and JavaScript so that the
                            website can look attractive and interactive. Some
                            features include Login and Register, File upload,
                            File download and Compress files into ZIP.
                          </p>
                        </div>
                        {/* <!-- <div className="card--project container">
                        <img
                          src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZ3JhbW1pbmd8fHx8fHwxNzA3NzkzMzgx&ixlib=rb-4.0.3&q=80&w=1000"
                          alt="Bangkit Academy"
                          className="object-fit rounded-lg object-cover lg:h-72 lg:w-full"
                        />
                      </div> --> */}
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                {/* <!-- LG --> */}
                <div className="mx-auto hidden max-w-40 px-12 md:block md:pb-24">
                  <div className="relative top-0 mt-4 pt-1.5 md:sticky md:top-[86px]">
                    <div className="text-color--subtittle flex-grow font-sora font-semibold">
                      <time dateTime="2022-02-11" className="w-20">
                        12/06/2023
                      </time>
                    </div>
                  </div>
                </div>
                <div className="dark:border-divider-dark border-divider-light items-stretch border dark:border-light2/10"></div>
                <div className="flex min-w-0 flex-1 flex-col gap-16 md:gap-0 md:py-4">
                  <article className="md:pb-16">
                    <div className="fm:relative fm:top-0 pointer-events-none sticky top-[86px] -ml-10 pb-12 md:-ml-[2rem] lg:-ml-[3%]">
                      <div className="absolute -ml-0.5 mt-2.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-white dark:border-slate-300 dark:bg-slate-900 md:-ml-3 md:mt-2 md:h-5 md:w-5"></div>
                      <div className="absolute z-[-1] -ml-2 mt-4 w-8 border border-slate-700 dark:border-slate-300 md:-ml-4 md:w-10 lg:w-12"></div>
                    </div>
                    <div className="container flex">
                      <div className="-mt-12">
                        <h2 className="text-color--tittle mt-1 text-xl font-semibold">
                          Desktop App Company
                        </h2>
                        <div className="mb-2 mt-1">
                          <span className="project--label">#App</span>
                          <p className="text-color--desc mt-2 text-justify">
                            This is a project during the midterm exam 4 of the
                            Object Oriented Programming course, this project was
                            developed with Java Swing programming language and
                            using MySQL database. This project is designed for a
                            desktop-based enterprise application in which there
                            are several features such as
                          </p>
                        </div>
                        {/* <!-- <div className="card--project container">
                        <img
                          src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZ3JhbW1pbmd8fHx8fHwxNzA3NzkzMzgx&ixlib=rb-4.0.3&q=80&w=1000"
                          alt="Bangkit Academy"
                          className="object-fit rounded-lg object-cover lg:h-72 lg:w-full"
                        />
                      </div> --> */}
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                {/* <!-- LG --> */}
                <div className="mx-auto hidden max-w-40 px-12 md:block md:pb-24">
                  <div className="relative top-0 mt-4 pt-1.5 md:sticky md:top-[86px]">
                    <div className="text-color--subtittle flex-grow font-sora font-semibold">
                      <time dateTime="2022-02-11" className="w-20">
                        22/12/2023
                      </time>
                    </div>
                  </div>
                </div>
                <div className="dark:border-divider-dark border-divider-light items-stretch border dark:border-light2/10"></div>
                <div className="flex min-w-0 flex-1 flex-col gap-16 md:gap-0 md:py-4">
                  <article className="md:pb-16">
                    <div className="fm:relative fm:top-0 pointer-events-none sticky top-[86px] -ml-10 pb-12 md:-ml-[2rem] lg:-ml-[3%]">
                      <div className="absolute -ml-0.5 mt-2.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-white dark:border-slate-300 dark:bg-slate-900 md:-ml-3 md:mt-2 md:h-5 md:w-5"></div>
                      <div className="absolute z-[-1] -ml-2 mt-4 w-8 border border-slate-700 dark:border-slate-300 md:-ml-4 md:w-10 lg:w-12"></div>
                    </div>
                    <div className="container flex">
                      <div className="-mt-12">
                        <h2 className="text-color--tittle mt-1 text-xl font-semibold">
                          Baby Cry Detection App
                        </h2>
                        <div className="mb-2 mt-1">
                          <span className="project--label">#Cloud</span>
                          <p className="text-color--desc mt-2 text-justify">
                            Build and manage microservice architecture for
                            service Baby Cry Detection App, using the Docker for
                            isolate the images and the Deploy with Cloud Run on
                            Google Cloud.
                          </p>
                        </div>
                        {/* <!-- <div className="card--project container">
                        <img
                          src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZ3JhbW1pbmd8fHx8fHwxNzA3NzkzMzgx&ixlib=rb-4.0.3&q=80&w=1000"
                          alt="Bangkit Academy"
                          className="object-fit rounded-lg object-cover lg:h-72 lg:w-full"
                        />
                      </div> --> */}
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            {/* <!-- End --> */}
          </div>
        </div>
      </section>
      {/* <!-- PROJECT section end --> */}
    </>
  );
}
