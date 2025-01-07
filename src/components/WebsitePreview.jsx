import React from 'react';

function WebsitePreview({ previewUrl, handleDownload }) {
  return (
    <div className="mt-6 w-full flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">المعاينة:</h2>
      <div className="w-full h-64 border rounded-md overflow-hidden mb-4">
        <iframe
          src={previewUrl}
          title="Website Preview"
          className="w-full h-full border-none"
          sandbox=""
        ></iframe>
      </div>
      <button
        onClick={handleDownload}
        className="bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer"
      >
        تحميل الكود
      </button>
    </div>
  );
}

export default WebsitePreview;