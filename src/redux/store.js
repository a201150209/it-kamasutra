const ActionType = {
  ADD_NEW_POST: "ADD_NEW_POST",
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
        },
        {
          id: 2,
          dialogId: 1,
          text: "Go away",
          isReplied: false,
          deliveredDate: "2015-01-25T13:51:50.417-07:00",
        },
        {
          id: 3,
          dialogId: 2,
          text: "Go home",
          isReplied: false,
          deliveredDate: "2015-01-24T13:51:50.417-07:00",
        },
        {
          id: 4,
          dialogId: 2,
          text: "Go go",
          isReplied: false,
          deliveredDate: "2015-01-23T13:51:50.417-07:00",
        },
        {
          id: 5,
          dialogId: 2,
          text: "wait",
          isReplied: false,
          deliveredDate: "2015-01-22T13:51:50.417-07:00",
        },
        {
          id: 6,
          dialogId: 3,
          text: "this is nagatinskaya",
          isReplied: false,
          deliveredDate: "2015-01-21T13:51:50.417-07:00",
        },
      ],
    },
  },
  _callSubscriber: null, //callSubscriber
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
    fieldElement.value = "";
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    //action - object
    if (action.type === ActionType.ADD_NEW_POST) {
      this.addNewPost(action.element);
    }
  },
};

export const addPostActionCreator = (fieldElement) => {
  return {
    type: ActionType.ADD_NEW_POST,
    element: fieldElement,
  };
};

export default store;
