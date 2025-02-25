
import React from 'react';

const Map = () => {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7602042779396!2d77.61341091482233!3d13.035504490815872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c5c85e0beb%3A0x4c2a5041e0583b91!2sMS%20Palya%2C%20Jamia%20Masjid!5e0!3m2!1sen!2sin!4v1645518269012!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
