import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { storeData } from "./store/index";
import CreateButton from "./components/CreateButton";
import Card from "./components/Card";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';


function App() {
    const data = useSelector((state) => state.index);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
        .then(({ data }) => {
            data.forEach(({ id, title, description, status, createdAt }) => {
                dispatch(storeData({
                    id,
                    title,
                    description,
                    createdDate: new Date(createdAt),
                    status
                }));
            });
        })
    }, []);

    return (
        <Container>
            <h1>To Do List</h1>
            <h2 className="font-weight-700 mt-32px text-success">Belum Selesai</h2>
            <Row>
                <Col md={3} xs={12} >
                    <div class="h-24px"></div>
                    <CreateButton />
                </Col>
                { data.unfinished
                    .map(value => (
                    <Col md={3} xs={12} key={value.id}>
                        <div class="h-24px"></div>
                        <Card
                            id={value.id}
                            title={value.title}
                            description={value.description}
                            createdDate={value.createdDate}
                            isShowEdit={value.status === 0}
                        />
                    </Col>
                )) }
            </Row>

            <h2 className="font-weight-700 text-primary mt-32px">Selesai</h2>
            <Row>
                { data.finished.map(value => (
                    <Col md={3} xs={12} >
                        <div class="h-24px"></div>
                        <Card
                            id={value.id}
                            title={value.title}
                            description={value.description}
                            createdDate={value.createdDate}
                        />
                    </Col>
                )) }
            </Row>
        </Container>
    );
}

export default App;
