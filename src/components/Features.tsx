export default function Features() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="text-center group">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg text-white mb-2" style={{ fontFamily: 'var(--font-med)' }}>24/7 Support</h3>
        <p className="text-blue-100 text-sm" style={{ fontFamily: 'var(--font-light)' }}>
          Round-the-clock customer service for all your travel needs
        </p>
      </div>

      <div className="text-center group">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <h3 className="text-lg text-white mb-2" style={{ fontFamily: 'var(--font-med)' }}>Best Price Guarantee</h3>
        <p className="text-blue-100 text-sm" style={{ fontFamily: 'var(--font-light)' }}>
          We guarantee the lowest prices on all flight bookings
        </p>
      </div>

      <div className="text-center group">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 className="text-lg text-white mb-2" style={{ fontFamily: 'var(--font-med)' }}>Instant Booking</h3>
        <p className="text-blue-100 text-sm" style={{ fontFamily: 'var(--font-light)' }}>
          Quick and easy booking process with instant confirmation
        </p>
      </div>
    </div>
  );
}