import React from 'react';
import {
    Page,
    Navbar,
    Block,
    BlockTitle,
    Toolbar,
    Link
} from 'framework7-react';

import Header from '../components/Header/Header.jsx';

import '../css/toolbar.css';

const About = () => (
    <Page name='about'>
        <Header backLink title='Rediger profil' />
        <BlockTitle>About My App</BlockTitle>
        <Block strong>
            <p>
                Fugiat perspiciatis excepturi, soluta quod non ullam deleniti.
                Nobis sint nemo consequuntur, fugiat. Eius perferendis animi
                autem incidunt vel quod tenetur nostrum, voluptate omnis quasi
                quidem illum consequuntur, a, quisquam.
            </p>
            <p>
                Laudantium neque magnam vitae nemo quam commodi, in cum dolore
                obcaecati laborum, excepturi harum, optio qui, consequuntur?
                Obcaecati dolor sequi nesciunt culpa quia perspiciatis,
                reiciendis ex debitis, ut tenetur alias.
            </p>
        </Block>
        <Block strong>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                molestiae laudantium dignissimos est nobis delectus nemo ea
                alias voluptatum architecto, amet similique, saepe iste
                consectetur in repellat ut minus quibusdam!
            </p>
            <p>
                Molestias et distinctio porro nesciunt ratione similique, magni
                doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam
                a recusandae, fugiat in ea voluptates fuga eius, velit corrupti
                reprehenderit dignissimos consequatur!
            </p>
            <p>
                Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos
                doloremque ipsa ullam eligendi commodi deserunt doloribus
                inventore magni? Ea mollitia veniam nostrum nihil, iusto
                doloribus a at! Ea molestiae ullam delectus!
            </p>
        </Block>
        <Toolbar className='bottomToolbar' tabbar labels bottom>
            <Link
                className='bottomToolbarLink toolbarIcon'
                href='/'
                iconF7='home'
            />
            <Link
                className='bottomToolbarLink toolbarIcon'
                href='/sok/'
                iconF7='search'
            />
            <Link
                className='bottomToolbarLink toolbarIcon'
                href='/activities/'
                iconF7='calendar'
            />
            <Link
                className='bottomToolbarLink toolbarIcon'
                href='/profile/me'
                iconF7='person_round'
            />
        </Toolbar>
    </Page>
);

export default About;
