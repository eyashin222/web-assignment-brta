import Button from "./Button";

function Footer() {
  return (
    <footer className="bg-gray-400 p-6 text-white w-full  sm:w-full">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {/* Column 1: Contact Info */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Contact Info</h3>
          <p>123 Street, City</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Column 2: Important Links */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Important Links</h3>
          <ul>
            <li>
              <a href="#">Home of ministry</a>
            </li>
            <li>
              <a href="#">About vehicle</a>
            </li>
            <li>
              <a href="#">Services provider&#39;s list</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Column 3: Email Subscription */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">
            Subscribe to Our Newsletter
          </h3>
          <form >
            <input
              type="email"
              placeholder="Your Email"
              className="mb-2 w-full rounded border p-2"
            />
            <Button StyleType="base">Subscribe</Button>
          </form>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
