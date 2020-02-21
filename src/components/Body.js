// import React from 'react'

// export default function Body(props) {
//     console.log(props.checkStatus);

//     return (
//         <div className="body">
//             <h1>New Content API</h1>
//             <nav>
//                 <a href="/">Home
//                 <img src="https://img.icons8.com/doodle/24/000000/home.png" alt="" style={{ display: props.checkStatus ? '' : 'none' }} />
//                 </a>
//                 <a href="/">Blog
//                 <img src="https://img.icons8.com/color/24/000000/blogger.png" alt=""
//                         style={{ display: props.checkStatus ? '' : 'none' }}></img>
//                 </a>
//                 <a href="/">Github
//                 <img src="https://img.icons8.com/nolan/24/github.png" alt=""
//                         style={{ display: props.checkStatus ? '' : 'none' }}></img>
//                 </a>
//                 <a href="/">Instagram
//                 <img src="https://img.icons8.com/cute-clipart/24/000000/instagram-new.png" alt=""
//                         style={{ display: props.checkStatus ? '' : 'none' }}></img>
//                 </a>
//             </nav>
//             <p>In a typical <span style={{ display: props.checkStatus ? 'none' : '' }}>React </span>
//                 <img src="https://img.icons8.com/nolan/24/react-native.png" style={{ display: props.checkStatus ? '' : 'none' }} alt="" />
//                 application, data is passed <span style={{ display: props.checkStatus ? 'none' : '' }}> top </span>
//                 <img src="https://img.icons8.com/nolan/24/up.png" style={{ display: props.checkStatus ? '' : 'none' }} alt=""/>-
//                 <span style={{ display: props.checkStatus ? 'none' : '' }}> down</span>
//                 <img src="https://img.icons8.com/nolan/24/down.png" style={{ display: props.checkStatus ? '' : 'none' }} alt=""/> (
//                     <span style={{ display: props.checkStatus ? 'none' : '' }}> parent</span> 
//                     <img src="https://img.icons8.com/color/24/000000/family-two-women.png" style={{ display: props.checkStatus ? '' : 'none' }} alt=""/> to 
//                     <span style={{ display: props.checkStatus ? 'none' : '' }}> child</span>
//                 <img src="https://img.icons8.com/emoji/24/000000/child-emoji.png" style={{ display: props.checkStatus ? '' : 'none' }} alt="" />
//                 ) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI
//                 <span style={{ display: props.checkStatus ? 'none' : '' }}> theme</span>
//                 <img src="https://img.icons8.com/color/24/000000/paint-palette.png" style={{ display: props.checkStatus ? '' : 'none' }} alt=""/>
//                 ) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the
//                 <span style={{ display: props.checkStatus ? 'none' : '' }}> tree</span>
//                 <img src="https://img.icons8.com/color/24/000000/deciduous-tree.png" style={{ display: props.checkStatus ? '' : 'none' }} alt="" />
//             </p>
//         </div>
//     )
// }