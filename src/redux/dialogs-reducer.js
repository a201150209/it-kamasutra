import store from "./store";

const ActionType = {
  ADD_NEW_MESSAGE: `ADD_NEW_MESSAGE`,
  CHANGE_ACTIVE_DIALOG: `CHANGE_ACTIVE_DIALOG`,
};

const initialState = {
  dialogs: [
    {
      id: 1,
      name: "Dmitriy",
      lastUpdateDate: "2015-01-26T13:51:50.417-07:00",
      isActive: true,
    },
    {
      id: 2,
      name: "Vasiliy",
      lastUpdateDate: "2018-01-26T13:51:50.417-07:00",
      isActive: false,
    },
    {
      id: 3,
      name: "Ivan",
      lastUpdateDate: "2012-01-26T13:51:50.417-07:00",
      isActive: false,
    },
    {
      id: 4,
      name: "Goga",
      lastUpdateDate: "2012-02-26T13:51:50.417-07:00",
      isActive: false,
    },
  ],
  messages: [
    {
      id: 1,
      dialogId: 1,
      text: "How are you?",
      isReplied: false,
      deliveredDate: "2015-01-26T13:51:50.417-07:00",
      ownerId: 1,
    },
    {
      id: 2,
      dialogId: 1,
      text: "Go away",
      isReplied: false,
      deliveredDate: "2015-01-25T13:51:50.417-07:00",
      ownerId: 1,
    },
    {
      id: 3,
      dialogId: 2,
      text: "Go home",
      isReplied: false,
      deliveredDate: "2015-01-24T13:51:50.417-07:00",
      ownerId: 2,
    },
    {
      id: 4,
      dialogId: 2,
      text: "Go go",
      isReplied: false,
      deliveredDate: "2015-01-23T13:51:50.417-07:00",
      ownerId: 2,
    },
    {
      id: 5,
      dialogId: 2,
      text: "wait",
      isReplied: false,
      deliveredDate: "2015-01-22T13:51:50.417-07:00",
      ownerId: 2,
    },
    {
      id: 6,
      dialogId: 3,
      text: "this is nagatinskaya",
      isReplied: false,
      deliveredDate: "2015-01-21T13:51:50.417-07:00",
      ownerId: 3,
    },
  ],
};

export const addMessageActionCreator = (element) => {
  return {
    type: ActionType.ADD_NEW_MESSAGE,
    element: element,
    dialogId: store._state.dialogs.dialogs.find((d) => {
      return d.isActive;
    }).id,
    ownerId: 0,
  };
};

export const changeActiveDialogActionCreator = (newId) => {
  return {
    type: ActionType.CHANGE_ACTIVE_DIALOG,
    currentActiveDialog: store._state.dialogs.dialogs.find((d) => {
      return d.isActive;
    }),
    newActiveDialog: store._state.dialogs.dialogs.find((d) => {
      return d.id === newId;
    }),
  };
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_NEW_MESSAGE:
      state.messages.push({
        id: state.messages.length + 1,
        dialogId: action.dialogId,
        text: action.element.value,
        isReplied: false,
        deliveredDate: new Date().toISOString(),
        ownerId: action.ownderId,
      });
      action.element.value = ``;
      break;
    case ActionType.CHANGE_ACTIVE_DIALOG:
      if (action.currentActiveDialog.id !== action.newActiveDialog.id) {
        action.currentActiveDialog.isActive = false;
        action.newActiveDialog.isActive = true;
      }
      break;
  }

  return state;
};

export default dialogsReducer;
