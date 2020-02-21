import React from 'react'
import Nav from './Nav';
import Title from './Title';
import Content from './Content';

export default function Body() {
    return (

        <div className="body">
            <Title/>
            <Nav />
            <Content />
        </div>
    )
}


