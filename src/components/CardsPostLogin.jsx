import React from 'react'
import sendIcon from './send.png'
import ronaldo from './ronaldo.jpg'
import heart from './heart.png'

function ReadPost() {
    return (
        <div className='read-post-card text-pt-sans'>
            <div className='read-post-card-inside flex flex-col p-10 bg-bg-color3 rounded-2xl'>
                <div className='read-post-card-prof flex flex-row mb-6'>
                    <img src={ronaldo} className='read-post-card-profpic object-cover h-20 w-20 rounded-full' />
                    <div className='read-post-card-profname object-right ml-5 text-2xl place-self-center'>
                        Profile Name
                    </div>
                </div>
                <div className='read-post-card-content mb-6 text-3xl'>
                    placeholder isi text placeholder isi textplaceholder isi textplaceholder isi textplaceholder isi text
                </div>
                <div className='read-post-card-comment-container flex flex-row justify-between'>
                    {/* <img src="" className='read-post-card-likeIcon' /> */}
                    <div className='w-auto read-post-card-sendIcon' >
                        <img src={heart} className='read-post-card-sendIcon flex items-end h-6 w-6 mr-5 '  alt="icon"/>
                    </div>
                    <form className='grow'>
                        <input className='read-post-card-comment rounded-xl h-10 p-3 flex w-full align-middle text-lg' type="text" name="name" placeholder='Post a comment ...' />
                    </form>
                    <img src={sendIcon} className='read-post-card-sendIcon flex items-end h-6 w-6 ml-5' alt="icon"/>
                </div>
            </div>
        </div>
    )
}

export default ReadPost