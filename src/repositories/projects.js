const data = [
  {
    id: 1,
    year: '2021',
    title: 'To Do List App',
    description: `This project was made in as a way to participate Gethired Devcode Front-end Challenge. I
      also used it to learn how to implement an UI design to Front-end Code and integration from Back-end using API. 
      It shows To Do App for managing tasks. I made using Typescript and ReactJS with TailwindCSS as a CSS Framework. The user
      could add his/her activities and todo items with its priority. If the user has done the todo items, the items could be checked as done.`,
    skill: 'Typescript, ReactJS, TailwindCSS, Vite, Axios',
    source: 'https://github.com/arifintahu/challenge-todo-app',
    preview: 'https://arifintahu-todo-devcode.vercel.app/',
    images: [
      {
        url: require('@/assets/images/projects/todo-list-app-1.jpeg'),
        description: 'To Do List App'
      },
      {
        url: require('@/assets/images/projects/todo-list-app-2.jpeg'),
        description: 'To Do List App'
      }
    ]
  },
  {
    id: 2,
    year: '2021',
    title: 'Smartmeter: IoT Monitoring',
    description: `This project was made during working in PT Elnusa Tbk. Smartmeter is an IoT monitoring application system which
      is connected with the devices such as household water measurement and gas measurement. I used VueJS as Front-end and MoleculerJS as
      back-end microservices. The user could figure out the information from the dashboard and set up the device directly from the app.
    `,
    skill:
      'NodeJS, Express, PostgreSQL, VueJS, MoleculerJS, Microservices, MQTT, AMQP',
    source: '',
    preview: 'https://iot.elnusa.co.id/smartmeter',
    images: [
      {
        url: require('@/assets/images/projects/smartmeter-1.jpeg'),
        description: 'Smartmeter'
      },
      {
        url: require('@/assets/images/projects/smartmeter-2.jpeg'),
        description: 'Smartmeter'
      },
      {
        url: require('@/assets/images/projects/smartmeter-3.jpeg'),
        description: 'Smartmeter'
      }
    ]
  },
  {
    id: 3,
    year: '2020',
    title: 'DiRumahAja: Online Presence',
    description: `This project was made during working in PT Elnusa Tbk. DiRumahAja is an online presence app for employee. It records thousands user
      activities such as presence and geolocation. It built using VueJS as Front-end and NodeJS microservice architecture with MQTT broker as back-end.
      The user could submit online presence through the app and then the admin user could figure out the dashboard.
    `,
    skill: 'NodeJS, Express, PostgreSQL, VueJS, Microservices, MQTT, AMQP',
    source: '',
    preview: 'https://dirumahaja.elnusa.co.id/',
    images: [
      {
        url: require('@/assets/images/projects/dirumahaja-1.jpeg'),
        description: 'DiRumahAja'
      },
      {
        url: require('@/assets/images/projects/dirumahaja-2.jpeg'),
        description: 'DiRumahAja'
      },
      {
        url: require('@/assets/images/projects/dirumahaja-3.jpeg'),
        description: 'DiRumahAja'
      }
    ]
  }
];

export function getProjects() {
  return data;
}
