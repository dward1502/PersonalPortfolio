export const projects = [
  {
    id: 'heartStories',
    title: 'The Heart Stories',
    description:
      'The Heart Stories is a website to share heart transplant stories of individuals I have met in my journey. It also has my own personal bi-monthly blog discussing my own personal time moving forward with a heart transplant and dealing with the second chance at life. ',
    info: [
      'Working with markup to render a blog and stories created by users',
      'Using Passport.js to handle authentication and users',
      'Used Next.js to create static and server rendered pages',
      'Hosted with Vercel integrated with Github',
      'Animations are using React Framer Motion',
    ],
    route: '/projects/heartStories',
    tech: ['Next.js', 'SCSS', 'Javascript', 'Passport.js','Vercel','React Hooks'],
    image: '/images/heartstories_homepage.png',
    projectImages: [
      '/images/heartstories_phone.png',
      '/images/heartstories_home_full.png',
      '/images/heartstories_stories.png',
      '/images/heartstories_blog.png',
    ],
    link: 'https://www.theheartsstories.com/',
    github: 'https://github.com/dward1502/heartBlog',
  },
  {
    id: 'psar',
    title: 'Pacific Southwest Association of Realtors',
    description: 'Real estate association website that contains information on services provided and agent portals to access Multiple Listing Services. Integrated Hubspot for Association to update the site by themselves as well as have marketing capabilities. ',
    info: [
      'Working with markup to render a blog and stories created by users',
      'Using Passport.js to handle authentication and users',
      'Used Next.js to create static and server rendered pages',
      'Hosted with Vercel integrated with Github',
      'Animations are using React Framer Motion',
    ],
    route: '/projects/psar',
    tech: ['HTML 5', 'CSS 3', 'Javascript', 'AWS','Hubspot'],
    image: '/images/psarHomepage.png',
    projectImages: [
      '/images/psar_phone.png',
      '/images/psar_home_full.png',
      '/images/psar_crmls_full.png',
      '/images/psar_join_full.png',
    ],
    link: 'https://www.psar.org/home',
    github: null,
  },
  {
    id: 'wakita',
    title: 'Wakita & Associates',
    description: 'Real estate agent companies website that operates in Chula Vista, San Diego. Displays agents name number and has the ability to look at regions in San Diego and associated houses that are for sale. A house search feature that uses CRMLS and Google Maps.',
    info: [
      'Working with markup to render a blog and stories created by users',
      'Using Passport.js to handle authentication and users',
      'Used Next.js to create static and server rendered pages',
      'Hosted with Vercel integrated with Github',
      'Animations are using React Framer Motion',
    ],
    route: '/projects/wakita',
    tech: ['HTML5', 'Bootstrap', 'JQuery', 'AWS', 'CRMLS', 'Google Maps'],
    image: '/images/WakitaHomes.png',
    projectImages: [
      '/images/wakita_phone.png',
      '/images/wakita_full.png',
      '/images/wakita_communities.png',
      '/images/wakita_properties.png',
    ],
    link: 'https://www.wakitahomes.com/',
    github: 'https://github.com/ravenstech/wakita',
  },
];
