import React, { useEffect, useState } from "react";
import Styles from "../Styles/Route-Styles/Home.module.scss";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../Firebase";

const Home = () => {
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

  return (
    <div className={Styles.Page}>
      <div className={Styles.Content_Container}>
        {postList?.map((item) => {
          return (
            <div className={Styles.Post_Card} key={item.id}>
              <div className={Styles.Header}>
                <div className={Styles.User_Icon_Container}></div>

                <p className={Styles.Text}>{item.author.name}</p>
              </div>
              <div className={Styles.Image_Container}>
                <img src={""} alt="Image" className={Styles.Image} />
              </div>
              <div className={Styles.Info_Section}>
                <p className={Styles.Text}>{item.title}</p>
                <p className={Styles.Text}>{item.subject}</p>
                <p className={Styles.Text}>{item.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
