import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  ListButton,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block,
  BlockHeader,
  View,
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  Col,
  Views,
  Tabs,
  Tab,
  Toolbar,
  Link
} from 'framework7-react';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Tab id="tab-company" labels className="page-content">
                <Block>
                    <p>Engasjer folk i arbeidet dere gjør og øk samtidig sjansen for å finne de beste ansatte for din bedrift.​</p>
                    <List form>
                        <ListInput
                            label="Bedriftens navn"
                            type="text"
                            name="company"
                            placeholder=""
                        ></ListInput>

                        <ListInput
                            label="Bedriftens organisasjonsnummer"
                            type="text"
                            name="org"
                            placeholder=""
                        ></ListInput>

                        <ListInput
                            label="Stilling"
                            type="text"
                            name="position"
                            placeholder=""
                        ></ListInput>

                        <ListInput
                            label="Kode"
                            type="text"
                            placeholder=""
                        ></ListInput>

                        <ListInput
                            label="Bedriftens nettside"
                            type="url"
                            placeholder="(valgfritt)"
                        ></ListInput>
                    </List>
                    <Button raised fill large>Registrer</Button>
                </Block>
            </Tab>
        )
    }
}
