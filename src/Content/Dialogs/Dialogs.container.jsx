import React from "react";
import {
  addMessageActionCreator,
  changeActiveDialogActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (element) => {
      const action = addMessageActionCreator(element);
      dispatch(action);
    },
    changeActiveDialog: (id) => {
      const action = changeActiveDialogActionCreator(id);
      dispatch(action);
    }
  }
  };


  const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
  export default DialogsContainer;
