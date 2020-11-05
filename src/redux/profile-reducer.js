const ActionType = {
  ADD_NEW_POST: `ADD_NEW_POST`,
};

const initialState = {
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
};

export const addPostActionCreator = (element) => {
  return {
    type: ActionType.ADD_NEW_POST,
    element: element,
  };
};

const profileReducer = (state = initialState, action) => {
  const stateCopy = {...state};

  switch (action.type) {
    case ActionType.ADD_NEW_POST:
      stateCopy.userPosts = [...stateCopy.userPosts];
      stateCopy.userPosts.push({
        id: stateCopy.userPosts.length + 1,
        avatarSrc:
          "https://avatars.mds.yandex.net/get-zen_doc/1911932/pub_5d518c6435ca3100ae8f4dbc_5d518ce495aa9f00af908c99/scale_1200",
        postText: action.element.value,
      });
      action.element.value = ``;
      break;
  }

  return stateCopy;
};

export default profileReducer;
