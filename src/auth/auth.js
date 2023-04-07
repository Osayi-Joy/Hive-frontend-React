//is loggedin
export const isLoggedIn = () => {
  let data = localStorage.getData("data");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};

//do login
export const doLogin = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
   next()
};
//logout
export const Logout = () => {
  localStorage.removeItem("data");
  next()
};

export const getCurrentUserDetails = () => {
  if (isLoggedIn) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return false;
  }
};
