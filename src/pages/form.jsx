import React from 'react';
import {
    Page,
    Navbar,
    List,
    ListInput,
    ListItem,
    Toggle,
    BlockTitle,
    Row,
    Button,
    Range,
    Block,
    Toolbar,
    Link
} from 'framework7-react';

import Header from '../components/Header/Header.jsx';

import '../css/toolbar.css';

const Form = () => (
    <Page name='Settings'>
        <Header backLink title='Settings' />

        <BlockTitle>Form Example</BlockTitle>
        <List noHairlinesMd>
            <ListInput label='Name' type='text' placeholder='Your name' />

            <ListInput label='E-mail' type='email' placeholder='E-mail' />

            <ListInput label='URL' type='url' placeholder='URL' />

            <ListInput
                label='Password'
                type='password'
                placeholder='Password'
            />

            <ListInput label='Phone' type='tel' placeholder='Phone' />

            <ListInput label='Gender' type='select'>
                <option>Male</option>
                <option>Female</option>
            </ListInput>

            <ListInput
                label='Birth date'
                type='date'
                placeholder='Birth day'
                defaultValue='2014-04-30'
            />

            <ListItem title='Toggle'>
                <Toggle slot='after' />
            </ListItem>

            <ListInput label='Range' input={false}>
                <Range slot='input' value={50} min={0} max={100} step={1} />
            </ListInput>

            <ListInput type='textarea' label='Textarea' placeholder='Bio' />
            <ListInput
                type='textarea'
                label='Resizable'
                placeholder='Bio'
                resizable
            />
        </List>

        <BlockTitle>Buttons</BlockTitle>
        <Block strong>
            <Row tag='p'>
                <Button className='col'>Button</Button>
                <Button className='col' fill>
                    Fill
                </Button>
            </Row>
            <Row tag='p'>
                <Button className='col' raised>
                    Raised
                </Button>
                <Button className='col' raised fill>
                    Raised Fill
                </Button>
            </Row>
            <Row tag='p'>
                <Button className='col' round>
                    Round
                </Button>
                <Button className='col' round fill>
                    Round Fill
                </Button>
            </Row>
            <Row tag='p'>
                <Button className='col' outline>
                    Outline
                </Button>
                <Button className='col' round outline>
                    Outline Round
                </Button>
            </Row>
            <Row tag='p'>
                <Button className='col' small outline>
                    Small
                </Button>
                <Button className='col' small round outline>
                    Small Round
                </Button>
            </Row>
            <Row tag='p'>
                <Button className='col' small fill>
                    Small
                </Button>
                <Button className='col' small round fill>
                    Small Round
                </Button>
            </Row>
            <Row tag='p'>
                <Button className='col' large raised>
                    Large
                </Button>
                <Button className='col' large fill raised>
                    Large Fill
                </Button>
            </Row>
            <Row tag='p'>
                <Button className='col' large fill raised color='red'>
                    Large Red
                </Button>
                <Button className='col' large fill raised color='green'>
                    Large Green
                </Button>
            </Row>
        </Block>

        <BlockTitle>Checkbox group</BlockTitle>
        <List>
            <ListItem checkbox name='my-checkbox' value='Books' title='Books' />
            <ListItem
                checkbox
                name='my-checkbox'
                value='Movies'
                title='Movies'
            />
            <ListItem checkbox name='my-checkbox' value='Food' title='Food' />
        </List>

        <BlockTitle>Radio buttons group</BlockTitle>
        <List>
            <ListItem radio name='radio' value='Books' title='Books' />
            <ListItem radio name='radio' value='Movies' title='Movies' />
            <ListItem radio name='radio' value='Food' title='Food' />
        </List>
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

export default Form;
