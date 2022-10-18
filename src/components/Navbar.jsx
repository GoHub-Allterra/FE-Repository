import React, { Component } from 'react';
import { BsSun } from 'react-icons/bs';

export class Navbar extends Component {
    render() {
        return (
            <nav className="w-full bg-bg-color2 sticky top-0">
                <div className='p-10 flex flex-row justify-between'>
                <div className="text-white font-pt-sans text-5xl whitespace-nowrap mr-10">YOUR STORY</div>
                <form className='grow place-self-center'>
                    <input className='font-pt-sans read-post-card-comment rounded-xl h-10 p-3 flex w-full align-middle text-lg' type="text" name="name" placeholder='Temukan pasanganmu disini...' />
                </form>
                <BsSun className='read-post-card-sendIcon flex items-end h-8 w-8 ml-10 place-self-center text-white'/>
                </div>
            </nav >
        )
    }
}

export default Navbar