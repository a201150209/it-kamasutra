const ActionType = {
  ADD_NEW_POST: `ADD_NEW_POST`,
  ADD_NEW_MESSAGE: `ADD_NEW_MESSAGE`,
  CHANGE_ACTIVE_DIALOG: `CHANGE_ACTIVE_DIALOG`,
};

const store = {
  _state: {
    profile: {
      userPosts: [
        {
          id: 1,
          avatarSrc:
            "https://avatars.mds.yandex.net/get-zen_doc/1911932/pub_5d518c6435ca3100ae8f4dbc_5d518ce495aa9f00af908c99/scale_1200",
          postText: "random text",
        },
        {
          id: 2,
          avatarSrc:
            "https://avatars.mds.yandex.net/get-zen_doc/1911932/pub_5d518c6435ca3100ae8f4dbc_5d518ce495aa9f00af908c99/scale_1200",
          postText: "sber sber",
        },
        {
          id: 3,
          avatarSrc:
            "https://avatars.mds.yandex.net/get-zen_doc/1911932/pub_5d518c6435ca3100ae8f4dbc_5d518ce495aa9f00af908c99/scale_1200",
          postText: "go to sber",
        },
      ],
    },
    dialogs: {
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
    },
  },
  _callSubscriber: null,
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  addNewPost(fieldElement) {
    this._state.profile.userPosts.push({
      id: this._state.profile.userPosts.length + 1,
      avatarSrc:
        "https://avatars.mds.yandex.net/get-zen_doc/1911932/pub_5d518c6435ca3100ae8f4dbc_5d518ce495aa9f00af908c99/scale_1200",
      postText: fieldElement.value,
    });
    fieldElement.value = ``;
  },
  addNewMessage(fieldElement, dialogId, ownderId) {
    this._state.dialogs.messages.push({
      id: this._state.dialogs.messages.length + 1,
      dialogId: dialogId,
      text: fieldElement.value,
      isReplied: false,
      deliveredDate: new Date().toISOString(),
      ownerId: ownderId,
    });
    fieldElement.value = ``;
  },
  changeActiveDialog(currentActiveDialog, newActiveDialog) {
    if (currentActiveDialog.id !== newActiveDialog.id) {
      currentActiveDialog.isActive = false;
      newActiveDialog.isActive = true;
    }
  },
  dispatch(action) {
    //action - object
    if (action.type === ActionType.ADD_NEW_POST) {
      this.addNewPost(action.element);
    } else if (action.type === ActionType.ADD_NEW_MESSAGE) {
      this.addNewMessage(action.element, action.dialogId, action.ownerId);
    } else if (action.type === ActionType.CHANGE_ACTIVE_DIALOG) {
      this.changeActiveDialog(
        action.currentActiveDialog,
        action.newActiveDialog
      );
    }
    this._callSubscriber(this._state);
  },
};

export const addPostActionCreator = (fieldElement) => {
  return {
    type: ActionType.ADD_NEW_POST,
    element: fieldElement,
  };
};
export const addMessageActionCreator = (fieldElement) => {
  return {
    type: ActionType.ADD_NEW_MESSAGE,
    element: fieldElement,
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

export default store;
