import store from "./store";

const ActionType = {
  ADD_NEW_MESSAGE: `ADD_NEW_MESSAGE`,
  CHANGE_ACTIVE_DIALOG: `CHANGE_ACTIVE_DIALOG`,
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

const dialogsReducer = (state, action) => {
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
