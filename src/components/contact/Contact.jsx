export default function Contact(){
    return (
      <>
        {/* <!-- CONTACT section start --> */}
        <section
          id="contact"
          className="color-animate bg-gradient-light-1 pb-32 pt-36 dark:bg-gradient-dark-1">
          <div className="container">
            <div className="w-full px-4">
              <div className="mx-auto mb-16 text-center">
                <h4 className="text-color--green mb-2 text-lg font-bold uppercase">
                  Contact
                </h4>
                <h2 className="lg:text-1xl text-3xl font-bold text-dark2 dark:text-light2 sm:text-4xl">
                  Drop me a line
                </h2>
                <p className="text-md text-color--desc mt-2 font-medium md:text-lg">
                  Feel free to reach out with any inquiries or opportunities
                </p>
              </div>
            </div>
            <form id="contact-form">
              <div className="w-full lg:mx-auto lg:w-2/3">
                <div className="mb-8 w-full px-4">
                  <label
                    htmlFor="name"
                    className="text-color--green text-base font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md bg-dark2/10 p-3 text-dark2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-light2/10 dark:text-light2 dark:focus:border-secondary"
                  />
                </div>
                <div className="mb-8 w-full px-4">
                  <label
                    htmlFor="email"
                    className="text-color--green text-base font-bold">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full rounded-md bg-dark2/10 p-3 text-dark2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-light2/10 dark:text-light2 dark:focus:border-secondary"
                  />
                </div>
                <div className="mb-8 w-full px-4">
                  <label
                    htmlFor="message"
                    className="text-color--green text-base font-bold">
                    Message
                  </label>
                  <textarea
                    type="textarea"
                    id="message"
                    className="h-32 w-full rounded-md bg-dark2/10 p-3 text-dark2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-light2/10 dark:text-light2 dark:focus:border-secondary"></textarea>
                </div>
                <div className="w-full px-4">
                  <button className="btn-bg-primary w-full rounded-lg px-8 py-3 text-base font-semibold text-light2 shadow-sm transition duration-200">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* <!-- CONTACT section end --> */}
      </>
    );
}