export const users = [
  {
    id: 1,
    username: "admin",
    password: "admin",
    email: "admin@gmail.com",
  },
  {
    id: 2,
    username: "user",
    password: "user123",
    email: "user123@gmail.com",
  },
  {
    id: 3,
    username: "john_doe",
    password: "user1234",
    email: "user1234@gmail.com",
  },
];

export const getUserByEmail = (email) => {
  return users.find((user) => user.email === email);
}
