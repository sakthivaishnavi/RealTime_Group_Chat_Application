const { get } = require("./router");

const users = [];

const addUser = ({ id, name, room }) => {

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const exisitingUser = users.find((user) => name===user.name && room===user.room);

    if(exisitingUser){
        return {error : 'Username not available !'};
    }

    const user = {id,name,room};
    users.push(user);
    return { user }
}

const removeUser = (id) => {

    const index = users.findIndex((user) => user.id===id); 
    if(index!==-1){
        return users.splice(index,1)[0];
    }   

}

const getUser = (id) => users.find((user) => user.id===id);

const getUsersInRoom = (room) => users.find((user)=> user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
