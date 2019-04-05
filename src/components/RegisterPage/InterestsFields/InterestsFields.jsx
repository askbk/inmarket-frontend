import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
  Row,
  Col,
  Input
} from 'framework7-react';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Input
                            label="Kompetanse 1"
                            type="text"
                            name="competence-input-1"
                            placeholder="Kompetanse 1"
                            outline
                        ></Input>
                    </Col>
                    <Col>
                        <Input
                            label="Interesse 1"
                            type="text"
                            name="interest-input-1"
                            placeholder="Interesse 1"
                        ></Input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            label="Kompetanse 1"
                            type="text"
                            name="competence-input-1"
                            placeholder="Kompetanse 1"
                            outline
                        ></Input>
                    </Col>
                    <Col>
                        <Input
                            label="Interesse 1"
                            type="text"
                            name="interest-input-1"
                            placeholder="Interesse 1"
                        ></Input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            label="Kompetanse 1"
                            type="text"
                            name="competence-input-1"
                            placeholder="Kompetanse 1"
                            outline
                        ></Input>
                    </Col>
                    <Col>
                        <Input
                            label="Interesse 1"
                            type="text"
                            name="interest-input-1"
                            placeholder="Interesse 1"
                        ></Input>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
