import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'Jayabrata Pramanik',
    aria: 'My name is Jayabrata Pramanik',
  },
  title: {
    display: 'Software Engineer',
    aria: 'I am a software engineer',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/Jayabrata18/',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/jayabrata-pramanik/',
    },
    {
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/12ZAsWLLwowDvewcxUXuDeZyAYyuFBmCB/view?usp=sharing/',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:jayabrata180402@gmail.com',
    },
  ],
};

export default config;
