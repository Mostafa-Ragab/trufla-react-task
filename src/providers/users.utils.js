export const filterUserFromList = (users, user) =>
  users.filter((usr) => usr.id !== user.id);

export const filterInterestFromUser = (users, usr, interest) => {
  return users.map((user) =>
    user.id === usr
      ? {
          ...user,
          interests: user.interests.filter((hobby) => hobby !== interest),
        }
      : user
  );
};
