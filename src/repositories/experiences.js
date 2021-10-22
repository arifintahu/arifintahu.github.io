const data = [
  {
    id: 1,
    company: 'Co-Founder & CTO',
    title: 'Oversea Academy',
    period: 'January 2021 - Present',
    skill:
      'NodeJS, Typescript, PostgresQL, ReactJS, Power BI, Python, AWS, EC2',
    activities: [
      'Building data analytics using Python and Power BI for customer insights',
      'Working on developing an automated messaging application using Node and ReactJS',
      'Deploying and managing application infrastructure using AWS and EC2'
    ]
  },
  {
    id: 2,
    company: 'PT Elnusa Tbk.',
    title: 'Web Application Developer',
    period: 'January 2020 - Present',
    skill:
      'NodeJS, Express, PostgreSQL, VueJS, MoleculerJS, Microservices, MQTT, AMQP',
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
