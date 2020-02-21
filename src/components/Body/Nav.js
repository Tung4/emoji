import React, { useContext } from 'react'
import { Context } from '../../contexts/modal'

export default function Nav() {
        const Status = useContext(Context)
        return (
                <nav>
                        <a href="/">Home
                <img src="https://img.icons8.com/doodle/24/000000/home.png" alt=""
                                        style={{ display: Status.showIcon ? '' : 'none' }} />
                        </a>
                        <a href="/">Blog
                <img src="https://img.icons8.com/color/24/000000/blogger.png" alt=""
                                        style={{ display: Status.showIcon ? '' : 'none' }}></img>
                        </a>
                        <a href="/">Github
                <img src="https://img.icons8.com/nolan/24/github.png" alt=""
                                        style={{ display: Status.showIcon ? '' : 'none' }}></img>
                        </a>
                        <a href="/">Instagram
                <img src="https://img.icons8.com/cute-clipart/24/000000/instagram-new.png" alt=""
                                        style={{ display: Status.showIcon ? '' : 'none' }}></img>
                        </a>
                </nav>

        )
}
