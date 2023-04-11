// npm add react@experimental react-dom@experimental
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { use } from 'react';
import { fetching } from './apicall';
const Testing = () => {
    let data = use(fetching());
    console.log(data);
    let fun = (d)=>{
        return `${d.slice(0,80)}...`;
    }
    return (
        <>
            <div className='d-flex align-item-center justify-content-around flex-wrap my-4 mx-2'>
                {
                    data.map(data => {
                        return (
                            <Card style={{ width: '19rem' }} className='mx-2 my-4' key={data.id}>
                                <Card.Img variant="top" src={data.thumbnail} style={{width:"302px",height:"150px"}} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text style={{ minHeight: "80px" }}>
                                        {fun(data.description)}
                                    </Card.Text>
                                    <Button variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </>

    );
}


export default Testing;