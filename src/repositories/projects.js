const data = [
  {
    id: 1,
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
    id: 2,
    year: '2021',
    title: 'Project Structure API',
    description: `This project was made for Project Structure Template especially REST API. Building project with 
      standardized structure could save much our time. We could focus on business process without considering too much on 
      project structure. On the other hand, a good project structure should be clean, nice refactored, and easy to maintain.
    `,
    skill:
      'NodeJS, Typescript, Express, PostgreSQL, REST API, Unit Test, Mocha, Supertest, Swagger',
    source: 'https://github.com/arifintahu/project-structure-api',
    preview: '',
    images: [
      {
        url: require('@/assets/images/projects/projectapi-1.jpeg'),
        description: 'Project Structure API'
      },
      {
        url: require('@/assets/images/projects/projectapi-2.jpeg'),
        description: 'Project Structure API'
      }
    ]
  },
  {
    id: 3,
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
    id: 4,
    year: '2021',
    title: 'Overblast: Bulk Whatsapp Sender App',
    description: `This project was made for sending blast messages to hundreds of Whatsapp number. It built using NextJS as server 
    side rendering and Whastappweb.js as library for Whatsapp API. The user could upload the file containing numbers, then fill the 
    message. After that, it would automatically send messages to multiple contants after scanning Whatsapp QR Code.
    `,
    skill: 'NodeJS, NextJS, TailwindCSS, Whatsappweb.js, Socketio',
    source: '',
    preview: 'https://overblast.herokuapp.com/',
    images: [
      {
        url: require('@/assets/images/projects/overblast-2.jpeg'),
        description: 'Overblast'
      },
      {
        url: require('@/assets/images/projects/overblast-1.jpeg'),
        description: 'Overblast'
      }
    ]
  },
  {
    id: 5,
    year: '2020',
    title: 'MosQu: Mosque Management',
    description: `This project was made for joing 1000 start up bootcamp held by Kominfo Indonesia. It delivered app management 
    for mosque stakeholder. It was built with VueJS and Vuetofy as Front-end, while the back-end is built using NodeJS, Express, and 
    Socketio for realtime communication. The user could add financial records, send whatsapp blast, and record people profile.
    `,
    skill: 'NodeJS, Express, PostgreSQL, VueJS, Vuetify, JWT, Socketio',
    source: '',
    preview: 'https://mosqu.netlify.app/',
    images: [
      {
        url: require('@/assets/images/projects/mosqu-1.jpeg'),
        description: 'MosQu'
      },
      {
        url: require('@/assets/images/projects/mosqu-2.jpeg'),
        description: 'MosQu'
      }
    ]
  },
  {
    id: 6,
    year: '2020',
    title: 'DiRumahAja: Online Presence',
    description: `This project was made during working in PT Elnusa Tbk. DiRumahAja is an online presence app for employee. It records thousands user
      activities such as presence and geolocation. It was built using VueJS as Front-end and NodeJS microservice architecture with MQTT broker as back-end.
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
  },
  {
    id: 7,
    year: '2020',
    title: 'Movie Recommender App',
    description: `This project was made for implementation of user based collaborative filtering on movies dataset. 
      User-Based Collaborative Filtering is a technique used to predict the items that a user might like on the basis of 
      ratings given to that item by the other users who have similar taste with that of the target user. It was built 
      using Python and Flask as web server. The user could select any user then it shows the recommendation movies 
      based on similar tastes.
    `,
    skill: 'Python, Flask, Pandas, Numpy, Scipy',
    source: 'https://github.com/arifintahu/movie-recommender-app',
    preview: '',
    images: [
      {
        url: require('@/assets/images/projects/movieapp.png'),
        description: 'DiRumahAja'
      }
    ]
  },
  {
    id: 8,
    year: '2019',
    title: 'QBLearning: Exam Managemet',
    description: `This project was made for QBLearning project. There are several features such as Question Writer, 
    Question Bank, Exam Management, and so on. It was built using NodeJs and Typescript with GraphQL as API. Then, the frontend 
    was built using VueJS and Apollo for GraphQL API Connection. The user could add some questions and exams inside the app for 
    exam managament.
    `,
    skill: 'NodeJS, Typescript, GraphQL, Vue, Apollo',
    source: '',
    preview: '',
    images: [
      {
        url: require('@/assets/images/projects/qblearning-1.jpeg'),
        description: 'QBLearning'
      },
      {
        url: require('@/assets/images/projects/qblearning-2.jpeg'),
        description: 'QBLearning'
      }
    ]
  }
];

export function getProjects() {
  return data;
}
