import React from 'react';

import './header.css';

export default function Header(props) {

    const chaptersBoxClass = ' links col-sm-12 col-md-4' + (props.highlight === 'chapters' ? ' highlight' : '');
    const blogsBoxClass = 'links col-sm-12 col-md-4' + (props.highlight === 'blogs' ? ' highlight' : '');
    const oppsBoxClass = 'links col-sm-12 col-md-4' + (props.highlight === 'opportunities' ? ' highlight' : '');

    return (
        <>

            <div className="header-box mt-5">
                <div className="header">
                    <div className="links-box row">
                        <div className={chaptersBoxClass}>
                            <div className='link-box px-3'>
<<<<<<< HEAD
                                <a href="/chapters" className='link'>TLC Pit Area</a>
=======
                                <a href="/chapters" className='link'>LLadle Health</a>
>>>>>>> 687324e6cd6e02e91d105e32df10a9be05fae9db
                            </div>
                        </div>
                        <div className={blogsBoxClass}>
                            <div className='link-box px-3'>
<<<<<<< HEAD
                                <a href="/blogs" className='link'>Ladle Health</a>
=======
                                <a href="/blogs" className='link'>TLC Pit area</a>
>>>>>>> 687324e6cd6e02e91d105e32df10a9be05fae9db
                            </div>
                        </div>
                        <div className={oppsBoxClass}>
                            <div className='link-box px-3'>
<<<<<<< HEAD
                                <a href="/opportunities" className='link'>TLC Pit Converter</a>
=======
                                <a href="/opportunities" className='link'>Converter</a>
>>>>>>> 687324e6cd6e02e91d105e32df10a9be05fae9db
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='header-box'>
                <div className="header">
                    <div className='boxes'>
                        <div className={chaptersBoxClass}>
                            <div className="link-box">
                                <a href="/chapters" className='link'>
                                    Chapters
                                </a>
                            </div>
                        </div>
                        <div className={blogsBoxClass}>
                            <div className="link-box">
                                <a href="/blogs" className='link'>
                                    Blogs
                                </a>
                            </div>
                        </div>
                        <div className={oppsBoxClass}>
                            <div className="link-box">
                                <a href="/opportunities" className='link'>
                                    Opportunities
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}