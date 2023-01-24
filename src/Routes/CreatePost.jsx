import React, { useState, useEffect } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { useNavigate } from "react-router-dom";
import Styles from "../Styles/Route-Styles/CreatePost.module.scss";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../Firebase";

const CreatePost = ({isAuth}) => {
  TabTitle("Tiny Post | Create Post")

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  let Navigate = useNavigate();

  const postCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      subject,
      message,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    Navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      Navigate("/");
    }
  }, []);

  return (
    <div className={Styles.Page}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Form_Title}>What's On Your Mind?</p>
        <form className={Styles.Post_Form}>
          <input
            type="text"
            placeholder="Title"
            required
            className={Styles.Input}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="Text"
            placeholder="Subject"
            required
            className={`${Styles.Input} ${Styles.Subject}`}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            required
            className={`${Styles.Input} ${Styles.Message}`}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </form>
        <button
          type={"submit"}
          className={Styles.Submit_Button}
          onClick={createPost}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
