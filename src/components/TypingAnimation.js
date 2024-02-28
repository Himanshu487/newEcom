// import React, { useState, useEffect } from 'react';

// const TypingAnimation = () => {
//   const [text, setText] = useState('');
//   const fullText = 'We have over 20 years of experience in selling buying and reting the properties';

//   useEffect(() => {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       setText(fullText.substring(0, index));
//       index++;
//       if (index > fullText.length) {
//         clearInterval(intervalId);
//       }
//     }, 100); // Adjust speed here (e.g., 50 for faster, 200 for slower)
//     return () => clearInterval(intervalId);
//   }, []);

//   return <div className='animationTextAlignment'>{text}</div>;
// };

// export default TypingAnimation;





import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  // const fullText = 'We have over 20 years of experience in selling, <br/>buying and renting the properties';
  const fullText = 'With over 20 years in real estate, we specialize in <br/> property sales, purchases, and rentals.';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 80); // Adjust speed here (e.g., 50 for faster, 200 for slower)
    return () => clearInterval(intervalId);
  }, []);

  return <div className='animationTextAlignment' dangerouslySetInnerHTML={{ __html: text }} />;
};

export default TypingAnimation;
