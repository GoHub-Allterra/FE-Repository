import React from "react";
import { MdSend } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { IconContext } from "react-icons";

function ReadPost() {
  return (
    <div className="read-post-card text-pt-sans">
      <div className="read-post-card-inside flex flex-col p-10 bg-bg-color3 dark:bg-bg-dark2 rounded-2xl">
        <div className="read-post-card-prof flex flex-row mb-6">
          <img
            className="read-post-card-profpic object-cover h-20 w-20 rounded-full"
            alt="profile picture"
          ></img>
          <div className="read-post-card-profname text-black dark:text-text-color2 object-right ml-5 text-2xl place-self-center">
            Profile Name
          </div>
        </div>
        <div className="read-post-card-content text-black dark:text-text-color2 mb-6 text-3xl">
          placeholder isi text placeholder isi textplaceholder isi
          textplaceholder isi textplaceholder isi text
        </div>
        <div className="read-post-card-comment-container flex flex-row justify-between">
          {/* <img src="" className='read-post-card-likeIcon' /> */}

          <div className="w-auto read-post-card-sendIcon place-self-center">
            <div className="read-post-card-sendIcon mr-5" alt="icon">
              <IconContext.Provider
                value={{
                  color: "red",
                  className: "h-6 w-6 flex items-end place-self-center",
                }}
              >
                <div>
                  <AiFillHeart />
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <form className="grow">
            <input
              className="read-post-card-comment rounded-xl h-10 p-3 flex w-full align-middle text-lg  text-text-color bg-white border-0 dark:bg-bg-dark focus:ring-0 dark:text-white
              dark:placeholder-gray-400"
              type="text"
              name="name"
              placeholder="Post a comment ..."
            />
          </form>

          <div className="w-auto read-post-card-sendIcon place-self-center">
            <div className="read-post-card-sendIcon ml-5" alt="icon">
              <IconContext.Provider
                value={{
                  //   color: "black",
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
        </div>
      </div>
    </div>
  );
}

export default ReadPost;
