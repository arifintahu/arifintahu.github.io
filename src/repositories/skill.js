const data = [
  {
    id: 1,
    title: 'Front-end Skills',
    skills: [
      {
        title: 'Web Application Developer',
        descriptions: [
          'Working on developing a scalable api for an IOS and Android App together with a team of 4.',
          'Implementing a real time Chat Microservice using WebSockets with Socket.IO and a MongoDB database to store messages'
        ]
      }
    ]
  },
  {
    id: 1,
    title: 'Back-end Skills',
    skills: [
      {
        title: 'Web Application Developer',
        descriptions: [
          'Working on developing a scalable api for an IOS and Android App together with a team of 4.',
          'Implementing a real time Chat Microservice using WebSockets with Socket.IO and a MongoDB database to store messages'
        ]
      }
    ]
  }
];

export function getSkills() {
  return data;
}
