import React, { useState, useEffect } from 'react';
import { createEvent } from '../supabaseClient';
import WebsiteForm from './WebsiteForm';
import WebsitePreview from './WebsitePreview';

function WebsiteBuilder() {
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  // Create preview URL when generatedCode changes
  useEffect(() => {
    if (generatedCode) {
      const blob = new Blob([generatedCode], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      setPreviewUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPreviewUrl('');
    }
  }, [generatedCode]);

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

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedCode], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'generated-website.html';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="h-full p-4 w-full max-w-2xl flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">
        منشئ المواقع والتطبيقات بالذكاء الاصطناعي
      </h1>
      <WebsiteForm
        details={details}
        setDetails={setDetails}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      {generatedCode && (
        <WebsitePreview
          previewUrl={previewUrl}
          handleDownload={handleDownload}
        />
      )}
    </div>
  );
}

export default WebsiteBuilder;