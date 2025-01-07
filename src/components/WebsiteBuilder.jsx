import React, { useState } from 'react';
import { createEvent } from '../supabaseClient';

function WebsiteBuilder() {
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!details.trim()) return;

    setLoading(true);
    console.log('Requesting code generation for details:', details);
    try {
      const result = await createEvent('chatgpt_request', {
        prompt: `Please generate a simple HTML page based on the following details: ${details}. Provide only the code within a code block.`,
        response_type: 'text',
      });
      console.log('Received generated code:', result.message);
      setGeneratedCode(result.message);
    } catch (error) {
      console.error('Error generating code:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full p-4 w-full max-w-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">
        منشئ المواقع والتطبيقات بالذكاء الاصطناعي
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          className="border p-2 mb-4 rounded-md resize-none h-32 box-border"
          placeholder="أدخل تفاصيل الموقع أو التطبيق الذي ترغب في إنشائه"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
          disabled={loading}
        >
          {loading ? 'جاري الإنشاء...' : 'إنشاء الموقع/التطبيق'}
        </button>
      </form>
      {generatedCode && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">النتيجة:</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
            <code>{generatedCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default WebsiteBuilder;