function Location() {
  return (
    <div className="mx-auto my-20">
      <div className="flex items-center gap-1">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </span>
        <h1 className="text-4xl">Find us</h1>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58377.85571716886!2d90.30176339221924!3d23.86776646891091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c3f69bf12d85%3A0xe4f6ea90ef13bd22!2sBangladesh%20Road%20Transport%20Authority%20(BRTA)%2C%20Dhaka%20Metro-3!5e0!3m2!1sen!2sbd!4v1701173497064!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
export default Location;
