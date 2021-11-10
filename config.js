// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: '****',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/',
    },
    {
      id: '3',
      name: 'Discord',
      icon: 'message-circle',
      link: 'https://discord.com/app',
    },
    {
      id: '4',
      name: 'Spotify',
      icon: 'play',
      link: 'https://open.spotify.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'trending-up',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'anchor',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Asana',
        link: 'https://app.asana.com/0/',
      },
      {
        name: 'NextCloud',
        link: 'https://lost-navi.xyz',
      },
      {
        name: 'Ruby on Rails',
        link: 'https://rubyonrails.org/',
      },
      {
        name: 'Google',
        link: 'https://google.com',
      },
    ],
    secondList: [
      {
        name: 'Whatsapp',
        link: 'https://web.whatsapp.com/',
      },
      {
        name: 'CodeWars',
        link: 'https://www.codewars.com/dashboard',
      },
      {
        name: 'Instagram',
        link: 'https://instagram.com',
      },
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
    ],
  },
};
