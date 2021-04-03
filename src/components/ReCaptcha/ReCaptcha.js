import React, { useEffect } from 'react';

const ReCaptcha = ({ siteKey }) => {
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      'recaptcha-key',
      `https://www.google.com/recaptcha/api.js?render=${siteKey}`,
      () => {
        console.log('Script loaded!');
      }
    );
  }, []);

  return (
    <div
      className='g-recaptcha'
      data-sitekey={siteKey}
      data-size='invisible'
      data-render='explicit'
      id='recaptcha'
    />
  );
};

export default ReCaptcha;
