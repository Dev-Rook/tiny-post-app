import React, { useEffect, useState } from "react";
import {TabTitle} from "../Utilities/TabTitle"
import Styles from "../Styles/Route-Styles/Home.module.scss";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { getDocs, deleteDoc, doc, collection } from "firebase/firestore";
import { db, auth } from "../Firebase";
// import { Container } from "@chakra-ui/react";

const Home = ({isAuth}) => {

  TabTitle("Tiny Post | Home")

  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className={Styles.Page}>
      <div className={Styles.Content_Container}>
        {postList?.map((item) => {
          return (
            <div className={Styles.Post_Card} key={item.id}>
              <div className={Styles.Header}>
                <div className={Styles.User_Icon_Container}></div>
                <p className={Styles.Text}>{item.author.name}</p>
                {isAuth &&
                  item.author.id === auth.currentUser.uid && (
                    <RemoveCircleOutlineIcon
                      sx={{ color: "white" }}
                      onClick={() => {
                        deletePost(item.id);
                      }}
                    />
                  )}
              </div>
              {/* <div className={Styles.Image_Container}>
                <img src={""} alt="Image" className={Styles.Image} />
              </div> */}
              <div className={Styles.Info_Section}>
                <p className={Styles.Text}>Title: {item.title}</p>
                <p className={Styles.Text}>Subject: {item.subject}</p>
                <div className={Styles.Message_Container}>
                  <p className={Styles.Text}>{item.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
