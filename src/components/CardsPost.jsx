import React, { useEffect, useState } from 'react'
import { apiRequest } from 'utils/apiRequest';

function CardsPost() {

    const [messages, setMessages] = useState("");
    const [disabled, setDisabled] = useState(true);

    useEffect (() => {
        if (messages) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            message : messages,
        };
        apiRequest("https://virtserver.swaggerhub.com/HERIBUDIYANA/Sosial-Media-API/1.0.0/myposts", "POST", body)
        .then ((res) => {
            const { message } = res.message;
            if (res.message) {
                localStorage.setItem('statusUser', JSON.stringify(res));
              alert('Status Diperbaharui')
              e.target.reset();
            }
          })
          .catch ((err) => {
            const { message } = err.response.message;
            alert(message)
          })
          .finally ();
    };

  return (
    <div className="p-4 w-full bg-bg-color3 rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-bg-dark dark:border-gray-700 mt-3 mb-3">
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                    <textarea className="font-pt-sans px-0 w-full text-sm text-text-color bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white
                     dark:placeholder-gray-400" placeholder="Apa yang sedang terjadi?" required="" id="comment" rows="4" name="messages" onChange={(e) => setMessages(e.target.value)}>
                     </textarea>
                     <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                        <div className="flex pl-0 space-x-1 sm:pl-2">
                            <button type="button" className="inline-flex justify-center p-2 text-bg-color2 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path></svg>
                                <span className="sr-only">Upload Images</span>
                            </button>
                            <button type="button" className="inline-flex justify-center p-2 text-bg-color2  rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.919,4.633l-3.833,2.48V6.371c0-1-0.815-1.815-1.816-1.815H3.191c-1.001,0-1.816,0.814-1.816,1.815v7.261c0,1.001,0.815,1.815,1.816,1.815h9.079c1.001,0,1.816-0.814,1.816-1.815v-0.739l3.833,2.478c0.428,0.226,0.706-0.157,0.706-0.377V5.01C18.625,4.787,18.374,4.378,17.919,4.633 M13.178,13.632c0,0.501-0.406,0.907-0.908,0.907H3.191c-0.501,0-0.908-0.406-0.908-0.907V6.371c0-0.501,0.407-0.907,0.908-0.907h9.079c0.502,0,0.908,0.406,0.908,0.907V13.632zM17.717,14.158l-3.631-2.348V8.193l3.631-2.348V14.158z"></path></svg>
                                <span className="sr-only">Upload Videos</span>
                            </button>
                        </div>
                            <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" type="submit">
                                Update
                            </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CardsPost;