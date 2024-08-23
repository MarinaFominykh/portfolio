export const initialProjects = [
  {
    id: 1,
    src: "rating.png",
    title: "Mafia rating",
    techs: [
      {
        id: 1,
        title: "js",
        src: "javascript.svg",
      },
      {
        id: 2,
        title: "react",
        src: "react.svg",
      },
      {
        id: 3,
        title: "html",
        src: "html.svg",
      },
      {
        id: 4,
        title: "sass",
        src: "sass.svg",
      },
    ],
    description:
      "A single-page application for calculating the rating of players in Mafia. Users can view the overall player rating, as well as individual player statistics. The rating can be sorted by any field. Users can also view information on all games. Users have the ability to add new games. Administrators have the ability to edit player and game data, as well as delete data. The application logic is written using the MVC (Model-View-Controller) pattern. Uses МongoDB as a database. The application has an adaptive design and can be displayed correctly on any device, including mobile phones and tablets.",
    //url: "https://mafia-raiting.ru/",
    githubUrl: "https://github.com/MarinaFominykh/rating_front",
  },
  {
    id: 2,
    src: "rating_back.png",
    title: "Mafia rating backend",
    techs: [
      {
        id: 1,
        title: "js",
        src: "javascript.svg",
      },

      {
        id: 2,
        title: "nodejs",
        src: "node.svg",
      },
      {
        id: 3,
        title: "mongodb",
        src: "mongo.png",
      },
      {
        id: 4,
        title: "express",
        src: "expressjs.svg",
      },
    ],
    description:
      "Developed and deployed an Express API to support the front-end of the Mafia rating web application. Routes support query parameters and authorization using JWT. Includes endpoints for games, players, registration, login",
    //url: "https://mafia-raiting.ru/",
    githubUrl: "https://github.com/MarinaFominykh/rating_back",
  },
  {
    id: 3,
    src: "mesto.png",
    title: "Mesto",
    techs: [
      {
        id: 1,
        title: "js",
        src: "javascript.svg",
      },
      {
        id: 2,
        title: "react",
        src: "react.svg",
      },
      {
        id: 3,
        title: "html",
        src: "html.svg",
      },
      {
        id: 4,
        title: "css",
        src: "css.svg",
      },
      {
        id: 5,
        title: "nodejs",
        src: "node.svg",
      },
      {
        id: 6,
        title: "mongodb",
        src: "mongo.png",
      },
      {
        id: 7,
        title: "express",
        src: "expressjs.svg",
      },
    ],
    description:
      "Full-stack application. The frontend is an interactive page for displaying cards with photos. Authorized users can add photos, delete them, and give likes. Вackend – Express API. Routes support query parameters and authorization using JWT. Includes endpoints for cards, registration, login and profile. ",
    url: "https://marinafominykh.github.io/mesto/",
    githubUrl: "https://github.com/MarinaFominykh/react-mesto-api-full",
  },
  {
    id: 4,
    src: "movies.png",
    title: "Movies",
    techs: [
      {
        id: 1,
        title: "js",
        src: "javascript.svg",
      },
      {
        id: 2,
        title: "react",
        src: "react.svg",
      },
      {
        id: 3,
        title: "html",
        src: "html.svg",
      },
      {
        id: 4,
        title: "css",
        src: "css.svg",
      },
      {
        id: 5,
        title: "nodejs",
        src: "node.svg",
      },
      {
        id: 6,
        title: "mongodb",
        src: "mongo.png",
      },
      {
        id: 7,
        title: "express",
        src: "expressjs.svg",
      },
    ],
    description:
      "A service where users can search for movies and save them in their personal account. This is a full-stack application consisting of multiple pages. The movie search page includes a search form and a block displaying search results. The saved movies page allows users to view the movies they have saved. There are also registration and login pages with forms for entering user data, as well as a profile editing page. An API has been implemented for user authentication and movie saving.",
    githubUrl: "https://github.com/MarinaFominykh/movies-explorer-frontend",
  },
  {
    id: 5,
    src: "random.png",
    title: "Random",
    techs: [
      {
        id: 1,
        title: "js",
        src: "javascript.svg",
      },
      {
        id: 2,
        title: "html",
        src: "html.svg",
      },
      {
        id: 3,
        title: "css",
        src: "css.svg",
      },
    ],
    description:
      "This is an application designed to assign roles in the Mafia game. It is created to assist organizers and game masters in quickly assigning roles for any number of players in any game layout. Upon loading, 10 cards with role names and 10 cards with player nicknames (users can specify real player names or use pre-set fake ones) are displayed. Clicking on the button assigns a random role to each player. Users can modify role names, add new roles, or delete unnecessary ones.The application has an adaptive design and can be displayed correctly on any device, including mobile phones and tablets.",
    url: "https://marinafominykh.github.io/Random/index.html",
    githubUrl: "https://github.com/MarinaFominykh/Random",
  },
  {
    id: 6,
    src: "lyubimovka.png",
    title: "Lyubimovka",
    techs: [
      {
        id: 1,
        title: "js",
        src: "javascript.svg",
      },
      {
        id: 2,
        title: "html",
        src: "html.svg",
      },
      {
        id: 3,
        title: "css",
        src: "css.svg",
      },
    ],
    description:
      "Worked on a team of 7 on developing a landing page for the Lyubimovka festival. Lyubimovka is an independent non-profit collective project of Russian playwrights, focused on young drama. Every year, Lyubimovka accepts and selects new plays by emerging and established Russian-speaking authors, to give them the opportunity to find their voice and be heard.The application was written in pure JavaScript using ES6 syntax. The Swiper library was used to implement sliders. Flex and grid technologies were also used, allowing the site to be displayed correctly on any device.",
    url: "https://marinafominykh.github.io/lyubimovka/src/index.html",
    githubUrl: "https://github.com/MarinaFominykh/lyubimovka",
  },
  {
    id: 7,
    src: "chatbot.png",
    title: "ChatbotGPT",
    techs: [
      {
        id: 1,
        title: "js",
        src: "javascript.svg",
      },
      {
        id: 2,
        title: "nodejs",
        src: "node.svg",
      },
    ],
    description:
      "A Telegram chatbot for interacting with the OpenAI API. The bot supports both text and voice messages.",
    githubUrl: "https://github.com/MarinaFominykh/chatbot-gpt",
  },

  {
    id: 9,
    src: "travel.png",
    title: "Russian travel",
    techs: [
      {
        id: 1,
        title: "js",
        src: "javascript.svg",
      },
      {
        id: 2,
        title: "html",
        src: "html.svg",
      },
      {
        id: 3,
        title: "css",
        src: "css.svg",
      },
    ],
    description:
      "A single-page website about traveling in Russia. The application has an adaptive design and can be displayed correctly on any device, including mobile phones and tablets.",
    url: "https://marinafominykh.github.io/russian-travel/index.html",
    githubUrl: "https://github.com/MarinaFominykh/russian-travel",
  },
  // {
  //     id: 9,
  //     src: "how_to_learn.png",
  //     title: "ToDo list",
  //     techs: [{
  //             id: 1,
  //             title: "js",
  //             src: "javascript.svg"

  //         },
  //         {
  //             id: 2,
  //             title: "react",
  //             src: "react.svg"

  //         },
  //         {
  //             id: 5,
  //             title: "nodejs",
  //             src: "nodejs.svg"

  //         },
  //         {
  //             id: 3,
  //             title: "mongodb",
  //             src: "mongo.svg"

  //         },
  //         {
  //             id: 4,
  //             title: "express",
  //             src: "expressjs.svg"

  //         },

  //     ],
  //     description: "A web application that allows users to plan their activities and monitor the work of their subordinates using a task management mechanism. The tasks page displays a list of tasks with the ability to group them by completion date, by responsible person (view mode for the manager), as well as without grouping - a list of all tasks sorted by the date of the last update. The titles of unfinished tasks with an end date equal to the current date are highlighted in red, completed tasks in green, and others in gray. Users can edit task attributes and create new ones. Uses МongoDB as a database.",
  //     url: "https://mafia-raiting.ru/",
  //     githubUrl: "https://github.com/MarinaFominykh/TODO_list"
  // },
];
