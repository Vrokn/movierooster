import React, { useState } from 'react';
import { Menu, Image, Dropdown, Input } from 'semantic-ui-react'
import logo from '../MediaFiles/Rooster.png'

export function NavHeader() {
    const [activeItem, setActiveItem] = useState('Top Rated');
    const [language, setLanguage] = useState('en-US');

    return (
        <Menu inverted secondary stackable  >
            <Menu.Item className='brand' >
                <Image href='\' src={logo} size='tiny' verticalAlign='middle' />
                <a href='\'>MovieRooster</a></Menu.Item>
            <Dropdown item text='Discover'>
                <Dropdown.Menu language={language} >
                    <Menu.Item

                        href='top_rated'
                        name='Top Rated'
                        active={activeItem === 'Top Rated'}
                        onClick={() => setActiveItem('Top Rated')}
                    />
                    <Menu.Item

                        href='upcoming'
                        name='Upcoming'
                        active={activeItem === 'Upcoming'}
                        onClick={() => setActiveItem('Upcoming')}
                    />
                    <Menu.Item

                        href='popular'
                        name='Popular'
                        active={activeItem === 'Popular'}
                        onClick={() => setActiveItem('Popular')}
                    />
                    <Menu.Item

                        href='now_playing'
                        name='Now Playing'
                        active={activeItem === 'Now Playing'}
                        onClick={() => setActiveItem('Now Playing')}
                    />
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='My Lists' >
                <Dropdown.Menu>
                    <Menu.Item
                        name='Favourites'
                        active={activeItem === 'Favourites'}
                        onClick={() => setActiveItem('Favourites')}
                    />
                    <Menu.Item
                        name='Watched'
                        active={activeItem === 'Watched'}
                        onClick={() => setActiveItem('Watched')}
                    />
                    <Menu.Item
                        name='Watch Later'
                        active={activeItem === 'Watch Later'}
                        onClick={() => setActiveItem('Watch Later')}
                    />
                </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position='right'>
                <Menu.Item name='Log In' />
                <Menu.Item>
                    <Input
                        transparent
                        icon={{ name: 'search', link: true, inverted: true }}
                        placeholder='Search movies...'
                    />
                </Menu.Item>
            </Menu.Menu>

        </Menu>
    );
}

