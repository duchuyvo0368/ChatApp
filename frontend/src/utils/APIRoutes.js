export const host="http://localhost:5000";

export const loginRoute=`${host}/v1/api/auth/login`;
export const registerRoute =`${host}/v1/api/auth/register`;
export const logoutRoute=`${host}/v1/api/auth/logout`;
export const allUsersRoute=`${host}/v1/api/auth/allUsers`
export const sendMessageRoute=`${host}/v1/api/messages/addmessages`;
export const recieveMessageRoute=`${host}/v1/api/messages/getmessages`;
export const setAvatarRoute=`${host}/v1/api/auth/setavatar`;