import ApiMicroservices from "@/app/consts/ApiMicroservices";

const usersApi = `${ApiMicroservices.USERS}/users`;

const UserEndpoints = {
  ME: `${usersApi}/me`,
  UPLOAD_AVATAR: (userId: string) => `${usersApi}/${userId}/avatar`,
  PROFILE: `${usersApi}/profile`,
  CHANGE_PASSWORD: (userId: string) => `${usersApi}/${userId}/password`,
  ROLES: `${usersApi}/roles`,
  SAVE_LAST_LINK: `${usersApi}/save_last_link`,
};
export default UserEndpoints;
