import type { Preview } from '@storybook/nextjs';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

import '../src/app/globals.css';

const messages = {
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Try again',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    search: 'Search',
    noResults: 'No results found',
    language: 'Language',
  },
  navigation: {
    home: 'Home',
    about: 'About',
    signIn: 'Sign In',
    getStarted: 'Get Started',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  about: {
    'hero.eyebrow': 'About Us',
    'hero.headline': 'We Help Brands\nDeserve to Be Seen.',
    'hero.subheadline': 'A creative team helping brands present themselves professionally in the digital world.',
    'hero.cta': 'Meet the Team',
    'story.eyebrow': 'Our Story',
    'story.headline': 'Forsure Digitalindo',
    'story.body': 'Forsure Digitalindo empowers businesses with a professional digital presence.',
    'pillars.eyebrow': 'What We Stand For',
    'pillars.headline': 'Our Core Pillars',
    'pillars.creative_title': 'Creative',
    'pillars.creative_desc': 'Crafting visually compelling designs and content.',
    'pillars.strategy_title': 'Strategy',
    'pillars.strategy_desc': 'Building meaningful digital presence with purpose.',
    'pillars.impact_title': 'Digital Impact',
    'pillars.impact_desc': 'Delivering results that grow your brand.',
    'vision.eyebrow': 'Vision & Mission',
    'vision.vision_title': 'Our Vision',
    'vision.vision_text': 'To be the trusted digital partner.',
    'vision.mission_title': 'Our Mission',
    'vision.mission_1': 'Deliver professional, high-quality digital solutions.',
    'vision.mission_2': 'Combine creative excellence with strategic thinking.',
    'vision.mission_3': 'Build long-term partnerships.',
    'vision.mission_4': 'Stay at the forefront of digital trends.',
    'ceo.eyebrow': 'A Message from Our Founder',
    'ceo.quote': 'Every business deserves a professional digital presence.',
    'ceo.name': 'Yevo Cosuren',
    'ceo.role': 'CEO & Co-Founder, Forsure Digitalindo',
    'team.eyebrow': 'The People Behind the Work',
    'team.headline': 'Our Team',
    'cta.headline': 'Interested in Working Together?',
    'cta.subheadline': 'We are ready to help your brand stand out stronger.',
    'cta.contact': 'Contact Us',
    'cta.services': 'View Services',
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0c0c14' },
        { name: 'light', value: '#f8fafc' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export default preview;
