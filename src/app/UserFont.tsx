import localFont from 'next/font/local';

export const spaceMono = localFont({
  src: [
    {
      path: '/SpaceMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/SpaceMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});

