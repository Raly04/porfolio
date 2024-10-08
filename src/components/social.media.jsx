export default function SocialMedia() {

  const openTab = (link)=>{
    window.open(link);
  }

  return (
    <div className="ml-6 fixed hidden top-0 -left-20 xl:flex flex-col h-full w-1/8 justify-center items-center">
      <div className="bg-secondary w-0.5 h-full opacity-50"></div>
      <div className="">
        <div onClick={()=>openTab("https://github.com/Raly04")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="Github"
            className="my-3 cursor-pointer opacity-50"
            width={30}
          >
            <path
              d="M16 3a13 13 0 0 0-3.46 25.53 1 1 0 1 0 .53-1.92 11 11 0 1 1 7-.4 15.85 15.85 0 0 0-.3-3.92A6.27 6.27 0 0 0 24.68 16a6.42 6.42 0 0 0-1.05-3.87 7.09 7.09 0 0 0-.4-3.36 1 1 0 0 0-1.1-.67 8 8 0 0 0-3.37 1.28A11.35 11.35 0 0 0 16 9a13.09 13.09 0 0 0-3 .43 5.74 5.74 0 0 0-3.38-1.18 1 1 0 0 0-1 .66 7.06 7.06 0 0 0-.37 3.19A7.15 7.15 0 0 0 7.2 16a6.66 6.66 0 0 0 5 6.28 7.43 7.43 0 0 0-.15.79c-1 .06-1.58-.55-2.32-1.48a3.45 3.45 0 0 0-1.94-1.53 1 1 0 0 0-1.15.76A1 1 0 0 0 7.35 22c.16 0 .55.52.77.81a4.74 4.74 0 0 0 3.75 2.25 4.83 4.83 0 0 0 1.3-.18 1 1 0 0 0 .29-.14.72.72 0 0 0 .18-.21.34.34 0 0 0 .08-.09.85.85 0 0 0 .06-.17 1.52 1.52 0 0 0 .06-.2 4.11 4.11 0 0 1 .46-1.91 1 1 0 0 0-.76-1.65A4.6 4.6 0 0 1 9.2 16a4.84 4.84 0 0 1 .87-3 1 1 0 0 0 .24-.83 5 5 0 0 1 0-1.85 3.59 3.59 0 0 1 1.74.92 1 1 0 0 0 1 .23A12.49 12.49 0 0 1 16 11a9.91 9.91 0 0 1 2.65.43 1 1 0 0 0 1-.18 5 5 0 0 1 2-1 4.11 4.11 0 0 1 0 1.91 1.05 1.05 0 0 0 .32 1 4 4 0 0 1 .71 2.84 4.29 4.29 0 0 1-4.41 4.46 1 1 0 0 0-.94.65 1 1 0 0 0 .28 1.11c.59.51.5 4 .47 5.36a1 1 0 0 0 .38.81 1 1 0 0 0 .62.21 1.07 1.07 0 0 0 .25 0A13 13 0 0 0 16 3Z"
              fill="#ABB2BF"
              className="color000000 svgShape"
            ></path>
          </svg>
        </div>
        <div onClick={()=>openTab("https://www.linkedin.com/in/raly-andry-ny-aina-kadmiel-1768aa280/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="In"
            className=" my-3 cursor-pointer opacity-50"
            width={30}
          >
            <path
              d="M6.5 3A3.5 3.5 0 1 0 10 6.5 3.5 3.5 0 0 0 6.5 3zm0 5A1.5 1.5 0 1 1 8 6.5 1.5 1.5 0 0 1 6.5 8zM9 11H4a1 1 0 0 0 0 2h4v14H5V16a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1zm18.34 1.68A5.94 5.94 0 0 0 23 11h-1a7.84 7.84 0 0 0-4 .89 1 1 0 0 0-1-.89h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-9a2 2 0 0 1 4 0v9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V17a5.9 5.9 0 0 0-1.66-4.32zM27 27h-3v-8a4 4 0 0 0-8 0v8h-3V13h3v1a1 1 0 0 0 .62.92 1 1 0 0 0 1.09-.21c.95-1 1.7-1.71 4.29-1.71h1a4 4 0 0 1 2.92 1.09A4 4 0 0 1 27 17z"
              fill="#ABB2BF"
              className="color000000 svgShape"
            ></path>
          </svg>
        </div>
        <div onClick={()=>openTab("https://www.facebook.com/nyaina.raly/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="Facebook"
            className=" my-3 cursor-pointer opacity-50"
            width={30}
          >
            <path
              d="M24 3H8a5 5 0 0 0-5 5v16a5 5 0 0 0 5 5h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1v-2h1a1 1 0 0 0 1-1v-3.5a2.5 2.5 0 0 1 2.5-2.5H22v2h-1a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h1.72l-.5 2H20a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-3h1a1 1 0 0 0 1-.76l1-4a1 1 0 0 0-.18-.86A1 1 0 0 0 23 15h-2v-1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3.5a4.51 4.51 0 0 0-4.5 4.5V15h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v6H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3h-4a1 1 0 0 0 0 2h4a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"
              fill="#ABB2BF"
              className="color000000 svgShape"
            ></path>
          </svg>
        </div>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="Whatsapp"
            className=" my-3 cursor-pointer opacity-50"
            width={30}
          >
            <g fill="background" className="color000000 svgShape">
              <path
                d="M16 3A13 13 0 0 0 4.53 22.13L3 27.74a1 1 0 0 0 .27 1A1 1 0 0 0 4 29a.84.84 0 0 0 .27 0l5.91-1.65a1 1 0 0 0-.53-1.93l-4.23 1.14 1.15-4.3a1 1 0 0 0-.1-.76A11 11 0 1 1 16 27a11.23 11.23 0 0 1-1.84-.15 1 1 0 0 0-1.15.82 1 1 0 0 0 .82 1.15A13 13 0 1 0 16 3Z"
                fill="#ABB2BF"
                className="color000000 svgShape"
              ></path>
              <path
                d="m15 11.21-1.16-1.6a2.06 2.06 0 0 0-1.5-.84 2.08 2.08 0 0 0-1.62.6l-1.2 1.2a2.81 2.81 0 0 0-.8 2.08c0 1.77 1.36 4 4 6.6 3.09 3 5.23 4 6.69 4a2.7 2.7 0 0 0 2-.81l1.2-1.2a2 2 0 0 0-.24-3.11L20.8 17a2.09 2.09 0 0 0-1.83-.3l-1.49.47a.53.53 0 0 1-.26-.09 11.42 11.42 0 0 1-2.35-2.26.31.31 0 0 1 0-.11c.13-.44.35-1.15.5-1.64a2 2 0 0 0-.37-1.86Zm1.29 7.63a2.33 2.33 0 0 0 1.75.2l1.54-.46 1.61 1.25L20 21c-.48.47-2.25.33-5.86-3.21-3-2.91-3.41-4.5-3.41-5.18A.89.89 0 0 1 11 12l1.28-1.19 1.18 1.65c-.16.49-.39 1.22-.51 1.65a2.12 2.12 0 0 0 .05 1.4 11.24 11.24 0 0 0 3.33 3.33Z"
                fill="#ABB2BF"
                className="color000000 svgShape"
              ></path>
            </g>
          </svg>
        </a>
      </div>
      <div className="bg-secondary w-0.5 h-full opacity-50"></div>
    </div>
  );
}
