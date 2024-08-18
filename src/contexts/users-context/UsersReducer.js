//"use client"
import {
  GET_USERS,
  POST_LOGIN,
  POST_USER,
  LOG_OUT,
  CHECK_USERS,
  AUTH_USER_LOG,
  HANDLE_CELL_CLICK,
  SET_SELECTION_MODEL,
} from "@context/users-context/usersTypes";
import * as tokenhelp from "@service/token-helpers"
import { StyleRendCellLista, } from "@style/StyleRendCellLista";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case POST_LOGIN:
      return {
        ...state,
      };

    case AUTH_USER_LOG:
      const tknn = payload.config.headers['x-access-token']
      return {
        ...state,
        user: {
          ...payload.data[0],
          roles: {
            admin: payload.data[1].includes("admin"),
            moderator: payload.data[1].includes("moderator"),
            editor: payload.data[1].includes("editor"),
            user: payload.data[1].includes("user"),
          },
        },
        rolesAuth: payload.data[1],
        logget: true,
        tken: tknn
      };

    case CHECK_USERS:
      return {
        ...state,
        userCreated: {
          addUserRole: {
            ...state.userCreated.addUserRole,
            [payload.target.name]: payload.target.checked,
          },
        },
      }

    case POST_USER:
      return {
        ...state,
        userCreated: {
          ...state.userCreated,
          tokenCreado: payload.data.token
        },
      }

    case GET_USERS:
      const entries = ["id"].concat(Object.entries(payload[0]).map(e => e[0]))
      const mapEntries = entries.map((mapEntrie, i) => {
        const mapEnt = {
          id: i,
          field: mapEntrie,
          headerName: i < 1 ? "ID" : entries[i],
          type: "number",
          width: 1, minWidth: 1, maxWidth: 2,
          flex: 1,
          cellClassName: "name-column--cell",
          headerAlign: "left",
          align: "left",
          roles: entries[4],
          _id: mapEntrie,
          renderCell: ({ row: { roles } }) => (<StyleRendCellLista sroles={roles} />)
        }
        const { id, field, headerName, type, flex,
          cellClassName, headerAlign, align, roles,
          width, minWidth, maxWidth, renderCell } = mapEnt
        if (field == "id") { return { id, field, headerName, align, width } }
        if (field == "username") { return { id, field, headerName, cellClassName, align, flex, } }
        if (field == "email") { return { id, field, headerName, headerAlign, flex } }
        if (field == "roles") { return { field, headerName, roles, renderCell, flex } }
      }).filter(x => x !== undefined)

      return {
        ...state,
        users: [...payload].map((ii, i) => ({
          ...ii, id: i, roles: [ii.roles
            .map((rl, ii) => rl.name)

          ]
          //.map(rr => rr.name)
        })),
        colums: mapEntries
      };
    case HANDLE_CELL_CLICK:
      //console.log(payload, "payload")
      const de = payload.row
      const { _id, username, roles, id } = de

      return {
        ...state,
        cellClick: {
          ...state.cellClick,
          [id]: [_id, username, roles[0]]
        }
      }
    case SET_SELECTION_MODEL:
      //console.log(payload, "payload")
      const stateCellClick = state.cellClick
      const keysStateCellClick = Object.keys(stateCellClick)
        .map(keyState => parseInt(keyState))
        .filter(key => payload.includes(Number(key)))
        .reduce((obj, key) => {
          obj[key] = stateCellClick[key];
          return obj;
        }, {});

      return {
        ...state,
        keysCellClick: payload,
        cellClick: keysStateCellClick,

      }

    case LOG_OUT:
      tokenhelp.deleteToken()
      return {
        user: {
        },
        rolesInit: {
          admin: false,
          moderator: false,
          editor: false,
          user: true,
        },
        logget: false,
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
        cellClick: []
      }
  };
}
