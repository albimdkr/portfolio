export default function Header (){
    return (
      <>
        {/* <!-- HEADER section start --> */}
        <header
          className="flex-items-center fixed left-0 top-0 z-[1000] mb-10 w-full"
          id="header">
          <div id="nav-blur"className="fm:hidden fixed inset-0 h-[3.7rem]"></div>
          <div id="nav-blur-margin" className="h-2"></div>
          <div className="wrapper-max container">
            <div
              className="relative flex items-center justify-between"
              id="nav-wrapper">
              <div className="flex h-[2.66rem] items-center">
                <nav
                  id="nav-menu"
                  className="right-4 flex rounded-lg transition duration-300 md:gap-2 lg:static lg:rounded-none lg:bg-transparent">
                  <a
                    href="#home"
                    className="px- block px-2 py-6 text-lg font-bold">
                    <div className="z-50 flex items-center gap-1.5 font-[1000] leading-none">
                      <div className="border-box flex h-9 w-9 items-center justify-center rounded-xl border-2 border-light1 bg-primary dark:border-light1 dark:bg-secondary/75 sm:h-6 sm:w-6 sm:rounded-lg">
                        <div className="h-3.5 w-0.5 rotate-12 rounded-full bg-light1 sm:h-3 sm:w-0.5"></div>
                      </div>
                      <div className="m-0 hidden text-xl sm:block">
                        <span className="text-color--tittle font-jakarta">
                          albi
                        </span>
                        <span className="text-color--green font-jakarta">
                          dev
                        </span>
                      </div>
                    </div>
                  </a>
                  <ul className="flex items-center md:gap-1">
                    <li className="group">
                      <a
                        href="#projects"
                        className="header-link text-color--green text-sm font-semibold">
                        Projects
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#blog"
                        className="header-link text-color--green text-sm font-semibold">
                        Blog
                      </a>
                    </li>
                    <li className="lg:hidden">
                      <div className="relative">
                        <button
                          className="nav-link nav-link--label animate ml-2 px-4 py-2 font-semibold text-accent3"
                          id="button-work"
                          type="button">
                          Work
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3 w-3 -rotate-90 rotate-90">
                            <path d="M14.5 7.40192C16.5 8.55662 16.5 11.4434 14.5 12.5981L8.5 16.0622C6.5 17.2169 4 15.7735 4 13.4641L4 6.5359C4 4.2265 6.5 2.78312 8.5 3.93782L14.5 7.40192Z"></path>
                          </svg>
                        </button>
                        <div
                          className="border-divider-light menu-items-blur absolute top-[3.5rem] flex w-40 flex-col rounded-2xl border bg-white/70 p-2 dark:border dark:border-light2/10 dark:bg-dark2/70"
                          id="menu-item">
                          <a
                            className="header-link m-1.5 h-8 rounded-lg p-2 text-xs text-accent6/85 hover:bg-accent3/15 dark:hover:bg-accent3/10"
                            href="#skills">
                            Skills &amp; Tools
                          </a>
                          <a
                            className="header-link m-1.5 h-8 rounded-lg p-2 text-xs text-accent6/85 hover:bg-accent3/15 dark:hover:bg-accent3/10"
                            href="#experience">
                            Experience
                          </a>
                          <a
                            className="header-link m-1.5 h-8 rounded-lg p-2 text-xs text-accent6/85 hover:bg-accent3/15 dark:hover:bg-accent3/10"
                            href="#contact">
                            Contact
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="hidden lg:block">
                      <div className="flex">
                        <div className="nav-link nav-link--label--work-lg rounded-full text-sm font-semibold text-accent6">
                          Work
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3 w-3">
                            <path d="M14.5 7.40192C16.5 8.55662 16.5 11.4434 14.5 12.5981L8.5 16.0622C6.5 17.2169 4 15.7735 4 13.4641L4 6.5359C4 4.2265 6.5 2.78312 8.5 3.93782L14.5 7.40192Z"></path>
                          </svg>
                        </div>
                        <ul className="flex items-center">
                          <li className="group">
                            <a
                              href="#experience"
                              className="header-link text-sm text-accent6">
                              Experience
                            </a>
                          </li>
                          <li className="group">
                            <a
                              href="#skills"
                              className="header-link text-sm text-accent6">
                              Skills &amp; Tools
                            </a>
                          </li>
                          <li className="group">
                            <a
                              href="#contact"
                              className="header-link text-sm text-accent6">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <ul className="flex items-center">
                <li className="mr-2 hidden lg:block">
                  <a href="https://github.com/albimdkr" target="_blank">
                    <button className="nav-link--label animate label-a-white flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        className="fill-current">
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span className="hidden lg:block">github</span>
                    </button>
                  </a>
                  {/* <!-- <a href="#" className="header-link rounded-lg bg-accent1 px-4 py-2"
              >Quick Access</a
              > --> */}
                </li>
                <li className="hidden sm:block">
                  <div className="ml-2 mr-4 h-4 w-[1px] bg-slate-300 dark:bg-slate-600"></div>
                </li>
                <li>
                  <button
                    id="btn-theme"
                    className="animate label-a-white h-10 w-10 rounded-xl p-2">
                    <svg
                      className="block fill-slate-700 dark:hidden"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg
                      className="hidden fill-slate-50 dark:block"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fillRule="evenodd"
                        clipRule="evenodd"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* <!-- HEADER section end --> */}
      </>
    );
}