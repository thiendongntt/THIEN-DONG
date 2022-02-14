import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";
// import { useSnackbar } from "notistack";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  // const { enqueueSnackbar } = useSnackbar();
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    const { data } = error.response;
    // enqueueSnackbar(data.message, { variant: "error" });

    alert(data.message);
    console.log(error);
  }
};
