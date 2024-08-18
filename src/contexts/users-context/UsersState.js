"use client"
import React, {
  useEffect,
  useReducer,
} from "react";
import {
  LOG_OUT, AUTH_USER_LOG,
  POST_USER, CHECK_USERS,
  GET_USER_ID,
  GET_USERS, HANDLE_CELL_CLICK,
  SET_SELECTION_MODEL,
} from "@context/users-context/usersTypes"
import UsersReducer from "@context/users-context/UsersReducer";
import * as tokenhelp from "@service/token-helpers"
import * as usershelp from "@service/user-helpers"
import { UsersContext } from "@context/createContexts";
import { useRouter } from "next/navigation";

const UsersState = (props) => {
  const initialState = {
    user: {
    },
    rolesInit: {
      admin: false,
      moderator: false,
      editor: false,
      user: true,
    },
    logget: [],
    tken: "",
    users: [],
    colums: [],
    rolesAuth: [],
    userCreated: {
      addUserRole: {
        admin: false,
        moderator: false,
        editor: false,
        user: true
      }
    },
    keysCellClick: [],
    cellClick: [],
  };
  const [state, dispatch] = useReducer(UsersReducer, initialState);
  const router = useRouter();

  useEffect(() => {
    async function loadUser() {
      const token = () => tokenhelp.getToken();
      if (!token()) {
        return logOut()
      }
      try {
        console.log("state", state, "state")
        return await userlog(token())
      }
      catch (error) {
      }
    }
    loadUser();
  }, [state.logget]);

  const logger = async (user) => {
    try {
      const resToken = await usershelp.logIn(user)
      tokenhelp.setToken(resToken.data.token)
      await userlog(resToken.data.token)
      dispatch({ type: POST_LOGIN, payload: resToken.data.token });
    } catch (error) { }
  };

  async function userlog(tok) {
    try {
      const res = await usershelp.getuser(tok)
      dispatch({ type: AUTH_USER_LOG, payload: res });
    } catch (error) { }
  };

  async function logOut() {
    try {
      dispatch({ type: LOG_OUT, payload: initialState });
      return (() => router.push(`/`))()
    } catch (error) { }
  }

  //Crear USUARIO
  async function createUser(value) {
    try {
      const res = await usershelp.createNewUser(value)
      //   const resTok = await usershelp.getuser(res)
      dispatch({ type: POST_USER, payload: res });
      return alert("creado");
    } catch (error) {
      alert('Se ha producido un error: ' + error.response.data);
    }
  };

  async function handleChex(event) {
    const res = event
    try {
      dispatch({ type: CHECK_USERS, payload: res });
    } catch (error) { }
  };
  async function getUser(tk) {
    try {
      const res = await usershelp.getuser(tk)
      dispatch({ type: GET_USER_ID, payload: res });
    } catch (error) {
      alert('Se ha producido un error: ' + error.response.data);
    }
  };

  async function getUsers() {
    try {
      const res = await usershelp.getUsers()
      //console.log(res, "res")
      dispatch({ type: GET_USERS, payload: res.data });
      //return res.data
    } catch (error) { }
  };
  function setCellClick(event) {
    const res = event
    try {
      dispatch({ type: HANDLE_CELL_CLICK, payload: res });
    } catch (error) { }
  };

  function setSelectionModel(e) {
    const res = e
    try {
      dispatch({ type: SET_SELECTION_MODEL, payload: res });
    } catch (error) { }
  }

  // console.log("state", state, "state")
  return (
    <UsersContext.Provider
      value={{
        state,
        logger,
        logget: state.logget,
        logOut,
        tken: state.tken,
        createUser,
        userCreated: state.userCreated,
        rolesInit: state.rolesInit,
        handleChex,
        getUsers,
        users: state.users,
        colums: state.colums,
        setCellClick,
        cellClick: state.cellClick,
        setSelectionModel,
        keysCellClick: state.keysCellClick,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
export default UsersState;
