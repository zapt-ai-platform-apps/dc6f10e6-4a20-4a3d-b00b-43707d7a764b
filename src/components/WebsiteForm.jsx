import React from 'react';

function WebsiteForm({ details, setDetails, handleSubmit, loading }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <textarea
        className="border p-2 mb-4 rounded-md resize-none h-32 box-border text-base"
        placeholder="أدخل تفاصيل الموقع أو التطبيق الذي ترغب في إنشائه"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button
        type="submit"
        className={`bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? 'جاري الإنشاء...' : 'إنشاء الموقع/التطبيق'}
      </button>
    </form>
  );
}

export default WebsiteForm;