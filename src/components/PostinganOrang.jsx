import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { MdSend } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { IconContext } from "react-icons";

function PostinganOrang(props) {
  const [datas, setDatas] = useState([]);
  const isLoggedin = useSelector((state) => state.data.isLoggedin);
  const Users = useSelector((state) => state.data.Users);
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (comment) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [comment]);

  useEffect(() => {
    fetchPostingan();
  }, []);

  function fetchPostingan() {
    axios
      .get(
        `https://virtserver.swaggerhub.com/HERIBUDIYANA/Sosial-Media-API/1.0.0/posts`
      )
      .then((res) => {
        const { post } = res.data;
        const temp = [...datas];
        temp.push(...post);
        setDatas(temp);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://virtserver.swaggerhub.com/HERIBUDIYANA/Sosial-Media-API/1.0.0/comments/1`,
        {
          comment: comment,
        }
      )
      .then((res) => {
        localStorage.setItem("commentUser", JSON.stringify(res));
        alert("Komentar ditambahkan");
        e.target.reset();
      })
      .catch((err) => {
        const { message } = err.response.message;
        alert(message);
      })
      .finally();
  };

  return (
    <>
      {datas.map((data) => (
        <>
          <div className="read-post-card my-5">
            <div className="read-post-card-inside flex flex-col p-3 bg-bg-color3 dark:bg-bg-dark2 rounded-2xl ">
              <div className="read-post-card-prof flex flex-row mb-6">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-64/pokemon-pokeball-pikachu-thunder-electric-shock-32217.png"
                  className="read-post-card-profpic object-cover h-10 w-10 rounded-full"
                  alt=""
                />
                <h1 className="read-post-card-profname text-black dark:text-text-color2 object-right ml-5 font-pt-sans place-self-center">
                  {data.name}
                </h1>
              </div>
              <p className="read-post-card-content text-black dark:text-text-color2 mb-6 text-normal font-pt-sans">
                {data.content}
              </p>
              <div className="read-post-card-comment-container flex flex-row justify-between">
                {isLoggedin && (
                  <>
                    <div className="w-auto read-post-card-sendIcon place-self-center">
                      <div className="read-post-card-sendIcon mr-5" alt="icon">
                        <IconContext.Provider
                          value={{
                            color: "red",
                            className:
                              "h-6 w-6 flex items-end place-self-center",
                          }}
                        >
                          <div>
                            <AiFillHeart />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </div>

                    <form
                      onSubmit={(e) => handleSubmit(e)}
                      className="grow grid grid-cols-2"
                    >
                      <input
                        onChange={(e) => setComment(e.target.value)}
                        className="read-post-card-comment rounded-xl h-10 p-3 flex w-full align-middle text-lg  text-text-color bg-white border-0 dark:bg-bg-dark focus:ring-0 dark:text-white
              dark:placeholder-gray-400"
                        type="text"
                        name="name"
                        placeholder="Post a comment ..."
                      />
                      <button className="">
                        <div className="w-auto read-post-card-sendIcon place-self-center">
                          <div
                            className="read-post-card-sendIcon ml-5"
                            alt="icon"
                          >
                            <IconContext.Provider
                              value={{
                                className:
                                  "h-6 w-6 flex items-end place-self-center fill-bg-dark dark:fill-bg-color3",
                              }}
                            >
                              <div>
                                <MdSend />
                              </div>
                            </IconContext.Provider>
                          </div>
                        </div>
                      </button>
                    </form>
                  </>
                )}
              </div>
              <div className="read-post-card-Postingan-container grid-cols-2 flex flex-row">
                <img
                  src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
                  alt=""
                  className="object-cover h-10 w-10 rounded-full"
                />
                <div className="flex-initial my-3 mx-5">
                  <p className="font-pt-sans font-bold">
                    {data.comment[0].name}
                  </p>
                  <p className="font-pt-sans">{data.comment[0].comment}</p>
                  <p className="font-pt-sans text-xs text-gray-600 dark:text-gray-300">
                    Posted on {data.comment[0].createdAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default PostinganOrang;
