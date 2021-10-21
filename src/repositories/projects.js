const data = [
  {
    id: 1,
    title: 'Monitoring System',
    description:
      'This project was made in as a way to practice my GraphQL skills. I also used it to learn how to implement an ORM into my back-end, which in this case I used Sequelize. It replicats the famous column layout that Pinteres uses, and it exemplifies several small features present in the real website. I made a GraphQL API for my backend using Apollo Server, which allowed a wall between the clients and the API. The user can also login with their google account, and all info related to the user is saved in a ClearDB MySQL database. If the user wants to upload a pin, the image (and other details) are inserted to the database and uploaded to Cloudinary as an image storage.',
    skill: 'TypeScript, NodeJS, Express, MongoDB, Socket.io, AWS, EC2',
    source: '',
    preview: '',
    images: [
      {
        url: 'Web Application Developer',
        description: 'Images'
      }
    ]
  },
  {
    id: 2,
    title: 'Monitoring System',
    description:
      'This project was made in as a way to practice my GraphQL skills. I also used it to learn how to implement an ORM into my back-end, which in this case I used Sequelize. It replicats the famous column layout that Pinteres uses, and it exemplifies several small features present in the real website. I made a GraphQL API for my backend using Apollo Server, which allowed a wall between the clients and the API. The user can also login with their google account, and all info related to the user is saved in a ClearDB MySQL database. If the user wants to upload a pin, the image (and other details) are inserted to the database and uploaded to Cloudinary as an image storage.',
    skill: 'TypeScript, NodeJS, Express, MongoDB, Socket.io, AWS, EC2',
    source: '',
    preview: '',
    images: [
      {
        url: 'Web Application Developer',
        description: 'Images'
      }
    ]
  }
];

export function getProjects() {
  return data;
}
