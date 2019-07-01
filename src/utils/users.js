const users = [];

//addUser

const addUser = ({id, username, room}) => {
  //clean the data
  username = username.trim ().toLowerCase ();
  room = room.trim ().toLowerCase ();

  //validate the data
  if (!username || !room) {
    return {
      error: 'Username and room are required!',
    };
  }

  //check for exiting user
  const existingUser = users.find (user => {
    return user.room === room && user.username === username;
  });

  //validate username
  if (existingUser) {
    return {
      error: 'Username is in use!',
    };
  }

  //store user
  const user = {id, username, room};
  users.push (user);
  return {user};
};

//removeUser
const removeUser = id => {
  const index = users.findIndex (user => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice (index, 1)[0];
  }
};

//getUsers
const getUser = id => {
  const index = users.findIndex (user => {
    return user.id === id;
  });

  if (index !== -1) {
    return users[index];
  }
};

//getUsersInRoom
const getUsersInRoom = room => {
  room = room.trim ().toLowerCase ();
  return users.filter (user => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};

// addUser ({
//   id: 22,
//   username: 'Andrew',
//   room: 'Center City',
// });

// addUser ({
//   id: 23,
//   username: 'Andrew2',
//   room: 'Center City',
// });

// console.log (getUser (23));
// console.log (getUsersInRoom ('Center City'));
