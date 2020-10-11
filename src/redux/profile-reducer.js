const ActionType = {
  ADD_NEW_POST: `ADD_NEW_POST`,
};

export const addPostActionCreator = (element) => {
  return {
    type: ActionType.ADD_NEW_POST,
    element: element,
  };
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_NEW_POST:
      state.userPosts.push({
        id: state.userPosts.length + 1,
        avatarSrc:
          "https://avatars.mds.yandex.net/get-zen_doc/1911932/pub_5d518c6435ca3100ae8f4dbc_5d518ce495aa9f00af908c99/scale_1200",
        postText: action.element.value,
      });
      action.element.value = ``;
      break;
  }

  return state;
};

export default profileReducer;