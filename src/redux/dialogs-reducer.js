const ActionType = {
  ADD_NEW_MESSAGE: `ADD_NEW_MESSAGE`,
  CHANGE_ACTIVE_DIALOG: `CHANGE_ACTIVE_DIALOG`,
};

const initialState = [
  {
    id: 1,
    name: "Dmitriy",
    lastUpdateDate: "2015-01-26T13:51:50.417-07:00",
    isActive: true,
    messages: [
      {
        id: 1,
        text: "How are you?",
        isReplied: false,
        deliveredDate: "2015-01-26T13:51:50.417-07:00",
        ownerId: 1,
      },
      {
        id: 2,
        text: "Go away",
        isReplied: false,
        deliveredDate: "2015-01-25T13:51:50.417-07:00",
        ownerId: 100,
      },
    ],
  },
  {
    id: 2,
    name: "Vasiliy",
    lastUpdateDate: "2018-01-26T13:51:50.417-07:00",
    isActive: false,
    messages: [
      {
        id: 1,
        text: "vasya ?",
        isReplied: false,
        deliveredDate: "2015-01-26T13:51:50.417-07:00",
        ownerId: 2,
      },
      {
        id: 2,
        text: "Go away",
        isReplied: false,
        deliveredDate: "2015-01-25T13:51:50.417-07:00",
        ownerId: 100,
      },
    ],
  },
  {
    id: 3,
    name: "Ivan",
    lastUpdateDate: "2012-01-26T13:51:50.417-07:00",
    isActive: false,
    messages: [
      {
        id: 1,
        text: "ivan ?",
        isReplied: false,
        deliveredDate: "2015-01-26T13:51:50.417-07:00",
        ownerId: 3,
      },
      {
        id: 2,
        text: "Go away",
        isReplied: false,
        deliveredDate: "2015-01-25T13:51:50.417-07:00",
        ownerId: 100,
      },
    ],
  },
  {
    id: 4,
    name: "Goga",
    lastUpdateDate: "2012-02-26T13:51:50.417-07:00",
    isActive: false,
    messages: [
      {
        id: 1,
        text: "goga ?",
        isReplied: false,
        deliveredDate: "2015-01-26T13:51:50.417-07:00",
        ownerId: 2,
      },
      {
        id: 2,
        text: "Go away",
        isReplied: false,
        deliveredDate: "2015-01-25T13:51:50.417-07:00",
        ownerId: 100,
      },
    ],
  },
];

export const addMessageActionCreator = (state, element) => {
  // нормально ли пробрасывать стейт из пропсов?
  return {
    type: ActionType.ADD_NEW_MESSAGE,
    element: element,
    dialog: state.find((dialog) => {
      return dialog.isActive;
    }),
    ownerId: 100,
  };
};

export const changeActiveDialogActionCreator = (state, newId) => {
  return {
    type: ActionType.CHANGE_ACTIVE_DIALOG,
    currentActiveDialog: state.find((dialog) => {
      return dialog.isActive;
    }),
    newActiveDialog: state.find((dialog) => {
      return dialog.id === newId;
    }),
  };
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_NEW_MESSAGE:
      action.dialog.messages.push({
        id: action.dialog.messages.length + 1,
        text: action.element.value,
        isReplied: false,
        deliveredDate: new Date().toISOString(),
        ownerId: action.ownerId,
      });
      //нормально ли очищать поле в редьюсере?
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
