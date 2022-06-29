const data = [
  {
    id: 1,
    company: 'Oversea Academy',
    title: 'Co-Founder & CTO',
    period: 'January 2021 - Present',
    skill:
      'NodeJS, Typescript, PostgresQL, ReactJS, Power BI, Python, AWS, EC2',
    activities: [
      'Building data analytics using Python and Power BI for customer insights',
      'Working on developing an automated messaging application using Node and ReactJS',
      'Deploying and managing application infrastructure using AWS and EC2'
    ],
    isShow: false
  },
  {
    id: 2,
    company: 'PT Elnusa Tbk.',
    title: 'Web Application Developer',
    period: 'January 2020 - December 2021',
    skill:
      'NodeJS, Express, PostgreSQL, VueJS, MoleculerJS, Microservices, MQTT, AMQP',
    activities: [
      'Worked on development of web application monitoring which is integrated to IoT devices',
      'Worked on development of online presence monitoring which is used by entire employees',
      'Responsible for building single page applications using VueJS',
      'Responsible for building API with microservices architecture using NodeJs'
    ],
    isShow: true
  },
  {
    id: 3,
    company: 'Bibit.id',
    title: 'Backend Engineer',
    period: 'December 2021 - Present',
    skill: 'NodeJS, MySQL, AWS, Caching, Unit Test, Serverless, Elastic',
    activities: [
      'Responsible for defining technical requirements and designing system architectures',
      'Responsible for building and maintaining APIs and serverless services',
      'Developed scheduler service using AWS Lambda and Event Bridge',
      'Worked on building API for back-office features that will be used for internal team',
      'Refactored code and improved code quality',
      'Assisted team with reviewing clean and coding efficiency',
      'Delivered new and enhancement features on time'
    ],
    isShow: true
  }
];

export function getExperiences() {
  return data.filter((item) => item.isShow);
}
