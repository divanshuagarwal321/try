module.exports = {
    port: process.env.PORT,
    data: {
        users: {
            names: ['divanshu', 'shobhit', 'sparshi', 'shradha', 'ram', 'shyam', 'raju', 'mohan', 'sohan', 'rohan', 'abdul', 'birju', 'hari', 'chintu', 'pintu', 'golu', 'bheem', 'motu', 'patlu', 'nobita'],
            password: ['divanshu123', 'shobhit123', 'sparshi123', 'shradha123', 'ram123', 'shyam123', 'raju123', 'mohan123', 'sohan123', 'rohan123', 'abdul123', 'birju123', 'hari123', 'chintu123', 'pintu123', 'golu123', 'bheem123', 'motu123', 'patlu123', 'nobita123'],
            emailId: ['divanshu123@gmail.com', 'shobhit123@gmail.com', 'sparshi123@gmail.com', 'shradha123@gmail.com', 'ram123@gmail.com', 'shyam123@gmail.com', 'raju123@gmail.com', 'mohan123@gmail.com', 'sohan123@gmail.com', 'rohan123@gmail.com', 'abdul123@gmail.com', 'birju123@gmail.com', 'hari123@gmail.com', 'chintu123@gmail.com', 'pintu123@gmail.com', 'golu123@gmail.com', 'bheem123@gmail.com', 'motu123@gmail.com', 'patlu123@gmail.com', 'nobita123@gmail.com']

        },
        tasks: {
            toDo: ['study', 'cricket', 'sleep', 'watch movie', 'read', 'eat', 'exercise', 'breakfast', 'dinner', 'charge', 'walk', 'run', 'pray', 'shit', 'brush', 'bath', 'wash', 'comb', 'jump', 'swim']
        }
    },
    secrets: {
        jwt: process.env.JWT_KEY_DEV
    },
    db: {
        name: "todo",
        cred: {
          username: "root",
          password: "root",
        },
        host: "localhost",
        define: {
          charset: "utf8mb4",
          collate: "utf8mb4_general_ci",
        },
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 300000,
          idle: 10000,
        },
        logging: console.log,
        // logging: false,
        port: 3306
        // name: online-order-dev
      },
}