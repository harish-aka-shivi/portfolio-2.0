import React from 'react';
import Resume from '../statics/resume.pdf';

const ResumeRedirect = () => {
  React.useEffect(() => {
    window.location.replace(Resume);
  }, []);

  return null;
};

export default ResumeRedirect;
