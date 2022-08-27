const ROLES = [
    {name: "ROLE_USER"},
    {name: "ROLE_MANAGER"},
    {name: "ROLE_ADMIN"},
    {name: "ROLE_SUPER_ADMIN"}
];
const USERS = [
    {name: "John Travolta", username: "john", password: "1234", roles: []},
    {name: "Will Smith", username: "will", password: "1234", roles: []},
    {name: "Jim Carry", username: "jim", password: "1234", roles: []},
    {name: "Mila Mala", username: "mila", password: "1234", roles: []}
];

const SERVERS = [
    {
        ipAddress: "192.168.88.160",
        name: "Ubuntu Linux",
        memory: "16 GB",
        type: "Personal PC",
        imgUrl: "server1.png",
        status: 'SERVER_UP'
    },
    {
        ipAddress: "192.168.88.177",
        name: "Ubuntu Linux",
        memory: "16 GB",
        type: "Personal PC",
        imgUrl: "server2.png",
        status: 'SERVER_DOWN'
    },
    {
        ipAddress: "192.168.88.191",
        name: "Windows 11",
        memory: "16 GB",
        type: "Personal PC",
        imgUrl: "server3.png",
        status: 'SERVER_DOWN'
    },
    {
        ipAddress: "192.168.88.225",
        name: "Windows 10",
        memory: "16 GB",
        type: "Personal PC",
        imgUrl: "server4.png",
        status: 'SERVER_UP'
    },
]
module.exports = {USERS, ROLES, SERVERS}
