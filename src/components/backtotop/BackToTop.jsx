export default function BackToTop(){
    return (
      <>
        {/* <!-- BACK TO TOP section start --> */}
        <a href="#home" id="to-top">
          <div className="hover:animated-pulse animate fixed bottom-5 right-5 flex h-10 w-10 cursor-pointer rounded-full bg-slate-300/80 hover:bg-slate-300/90 dark:bg-slate-700/50 dark:text-slate-100 dark:hover:bg-slate-600/50">
            {/* <!-- <i className=""></i> --> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-1xl m-auto h-5 w-5 text-primary dark:text-secondary">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </a>
        {/* <!-- BACK TO TOP section end --> */}
      </>
    );
}