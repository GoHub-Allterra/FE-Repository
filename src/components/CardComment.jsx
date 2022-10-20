import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CardComment() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchComment();
  }, []);

  function fetchComment() {
    axios
      .get(
        `https://virtserver.swaggerhub.com/HERIBUDIYANA/Sosial-Media-API/1.0.0/posts/comments/25`
      )
      .then((res) => {
        console.log(res.data);
        const { post } = res.data;
        const temp = [...datas];
        temp.push(...post);
        setDatas(temp);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <>
      {datas.map((data) => (
        <>
          <div className="container flex w-12/12  bg-bg-color3 dark:bg-bg-dark2 my-2 p-2">
            <img
              src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
              alt=""
              className="w-20 h-20 flex-none mt-3 mr-3 border-solid border-2  border-bg-dark items-center rounded-full"
            />
            <div className="flex-initial my-3">
              <p className="font-pt-sans font-bold">{data.comment[0].name}</p>
              <p className="font-pt-sans">{data.comment[0].comment}</p>
              <p className="font-pt-sans text-xs text-gray-600 dark:text-gray-300">
                Posted on {data.comment[0].createdAt}
              </p>
            </div>
          </div>
          <div className="container flex w-12/12  bg-bg-color3 dark:bg-bg-dark2 my-2 p-2">
            <img
              src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
              alt=""
              className="w-20 h-20 flex-none mt-3 mr-3 border-solid border-2  border-bg-dark items-center rounded-full"
            />
            <div className="flex-initial my-3">
              <p className="font-pt-sans font-bold">{data.comment[1].name}</p>
              <p className="font-pt-sans">{data.comment[1].comment}</p>
              <p className="font-pt-sans text-xs text-gray-600 dark:text-gray-300">
                Posted on {data.comment[1].createdAt}
              </p>
            </div>
          </div>
          <div className="container flex w-12/12  bg-bg-color3 dark:bg-bg-dark2 my-2 p-2">
            <img
              src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
              alt=""
              className="w-20 h-20 flex-none mt-3 mr-3 border-solid border-2  border-bg-dark items-center rounded-full"
            />
            <div className="flex-initial my-3">
              <p className="font-pt-sans font-bold">{data.comment[3].name}</p>
              <p className="font-pt-sans">{data.comment[3].comment}</p>
              <p className="font-pt-sans text-xs text-gray-600 dark:text-gray-300">
                Posted on {data.comment[3].createdAt}
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
