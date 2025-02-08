const Footer = () => {
  return (
    <div>
      <div class="footer-content text-center mb-4 bg-slate-800">
        <h2 class="text-2xl font-bold mb-2">Our Services</h2>
        <p class="text-lg text-gray-600 mb-4">
          We specialize in web development and mobile app development. Let us
          help you bring your ideas to life!
        </p>
        <ul class="footer-links list-none mb-4">
          <li class="mb-2">
            <a
              href="#web-development"
              class="text-lg text-blue-600 hover:text-blue-800"
            >
              Web Development
            </a>
          </li>
          <li class="mb-2">
            <a
              href="#app-development"
              class="text-lg text-blue-600 hover:text-blue-800"
            >
              App Development
            </a>
          </li>
          <li class="mb-2">
            <a
              href="#contact"
              class="text-lg text-blue-600 hover:text-blue-800"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div class="social-media flex justify-center mb-4">
        <a
          href="#"
          class="social-icon text-lg text-blue-600 hover:text-blue-800 mr-4"
        >
          Facebook
        </a>
        <a
          href="#"
          class="social-icon text-lg text-blue-600 hover:text-blue-800 mr-4"
        >
          Twitter
        </a>
        <a
          href="#"
          class="social-icon text-lg text-blue-600 hover:text-blue-800"
        >
          LinkedIn
        </a>
      </div>
      <p class="footer-bottom text-lg text-gray-600 text-center">
        &copy; 2025 Alif Brothers. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
