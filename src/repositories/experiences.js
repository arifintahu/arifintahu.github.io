const data = [
  {
    id: 1,
    company: 'Co-Founder & CTO',
    title: 'Oversea Academy',
    period: 'January 2021 - Present',
    skill: 'TypeScript, NodeJS, Express, MongoDB, Socket.io, AWS, EC2',
    activities: [
      'Working on developing a scalable api for an IOS and Android App together with a team of 4.',
      'Implementing a real time Chat Microservice using WebSockets with Socket.IO and a MongoDB database to store messages'
    ]
  },
  {
    id: 2,
    company: 'PT Elnusa Tbk.',
    title: 'Web Application Developer',
    period: 'January 2020 - Present',
    skill: 'NodeJS, Express, PostgreSQL, VueJS, MoleculerJS',
    activities: [
      'Working on developing a scalable microservice for Smartmeter web application using MoleculerJS.',
      'Implementing a presense employee web app using event driven architecture',
      'Building single page and progressive web apps using VueJS'
    ]
  }
];

export function getExperiences() {
  return data;
}
