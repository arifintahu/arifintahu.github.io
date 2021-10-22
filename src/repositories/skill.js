const data = [
  {
    id: 1,
    title: 'Front-end Skills',
    skills: [
      {
        title: 'VueJS and ReactJS',
        descriptions: [
          'Experienced building Vue and React app with router, state management, and API integrations',
          'Experienced combining plugable CSS Frameworks such as TailwindCSS, Bulma, and Bootstrap'
        ]
      },
      {
        title: 'Javascript and Typescript',
        descriptions: [
          'Experienced with well typed and well structured project',
          'Experienced using ESLint as a tool for improving code quality for Javascript and Typescript'
        ]
      },
      {
        title: 'HTML and CSS',
        descriptions: [
          'Experienced building native web app only using HTML and CSS',
          'Experienced using CSS styles such as flexbox, grid, and transition'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Back-end Skills',
    skills: [
      {
        title: 'NodeJS and Python',
        descriptions: [
          'Experienced on developing a scalable API using expressJS and Flask',
          'Experienced on building well structured API project including documentation using Swagger',
          'Experienced on deploying NodeJS app in EC2, Heroku, and Plesk'
        ]
      },
      {
        title: 'PostgresQL and MongoDB',
        descriptions: [
          'Experienced on querying SQL on PostgresQL and SQL-like Database',
          'Experienced on builidng a scalable project using PostgresQL and MongoDB'
        ]
      },
      {
        title: 'Test-driven Development',
        descriptions: [
          'Experienced on building test-driven project using Mocha, Chai, and Supertest',
          'Experienced on writing well structured unit and end-to-end testing'
        ]
      }
    ]
  }
];

export function getSkills() {
  return data;
}
