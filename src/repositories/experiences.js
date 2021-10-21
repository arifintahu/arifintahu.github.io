const data = [
  {
    id: 1,
    company: 'PT Elnusa Tbk.',
    title: 'Web Application Developer',
    period: 'January 2020 - Present',
    skill: 'TypeScript, NodeJS, Express, MongoDB, Socket.io, AWS, EC2',
    activities: [
      'Working on developing a scalable api for an IOS and Android App together with a team of 4.',
      'Implementing a real time Chat Microservice using WebSockets with Socket.IO and a MongoDB database to store messages'
    ]
  },
  {
    id: 2,
    company: 'PT Elnusa Tbk. 2',
    title: 'Web Application Developer',
    period: 'January 2020 - Present',
    skill: 'TypeScript, NodeJS, Express, MongoDB, Socket.io, AWS, EC2',
    activities: [
      'Working on developing a scalable api for an IOS and Android App together with a team of 4.',
      'Implementing a real time Chat Microservice using WebSockets with Socket.IO and a MongoDB database to store messages'
    ]
  }
];

export function getExperiences() {
  return data;
}
