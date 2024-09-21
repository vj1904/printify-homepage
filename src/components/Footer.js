// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="text-center mb-4">
        <h3 className="text-lg">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-green-500">
            Facebook
          </a>
          <a href="#" className="hover:text-green-500">
            Instagram
          </a>
          <a href="#" className="hover:text-green-500">
            Twitter
          </a>
        </div>
      </div>
      <p className="text-center">
        &copy; 2024 Company Name, Inc. All rights reserved.
      </p>
    </footer>
  );
}
