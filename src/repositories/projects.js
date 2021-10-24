const data = [
  {
    id: 1,
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
    title: 'Monitoring System',
    description: `This project was made in as a way to practice my GraphQL skills. I
      also used it to learn how to implement an ORM into my back-end, which
      in this case I used Sequelize. It replicats the famous column layout
      that Pinteres uses, and it exemplifies several small features present
      in the real website. I made a GraphQL API for my backend using Apollo
      Server, which allowed a wall between the clients and the API. The user
      can also login with their google account, and all info related to the
      user is saved in a ClearDB MySQL database. If the user wants to upload
      a pin, the image (and other details) are inserted to the database and
      uploaded to Cloudinary as an image storage.`,
    skill:
      'NodeJS, Express, PostgreSQL, VueJS, MoleculerJS, Microservices, MQTT, AMQP',
    source: '',
    preview: '',
    images: [
      {
        url: 'https://cdn.mos.cms.futurecdn.net/jU8HAQWqxPMgH3g6qSbA5.jpg',
        description: 'Images'
      }
    ]
  }
];

export function getProjects() {
  return data;
}
