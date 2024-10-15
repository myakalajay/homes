import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Newspage() {
  return (
    <div className="container py-5">
      <h2 className='w-100 text-center pt-5'>Our latest articles</h2>
      <div className="card-container d-flex flex-nowrap border-0 pt-2 pb-5">
        <Card className='border-0 px-2'>
          <Card.Img variant="top" src="./assets/images/home-page/cardImage.png" />
          <Card.Body className='p-0 mt-4'>
            <p className='text-primary'>Alec Whitten • 17 Jan 2022</p>
            <Card.Title>Bill Walsh leadership lessons</Card.Title>
            <Card.Text className='text-black-50 bg-white'>
              Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
            </Card.Text>
            <span className="badge text-primary text-bg-primary me-3 bg-opacity-10">Leadership</span>
            <span className="badge text-danger text-bg-danger me-3 bg-opacity-10">Management</span>
          </Card.Body>
        </Card>

        <Card className='border-0 px-4'>
          <Card.Img variant="top" src="./assets/images/home-page/cardImage2.png" />
          <Card.Body className='p-0 mt-4'>
            <p className='text-primary'>Alec Whitten • 17 Jan 2022</p>
            <Card.Title>Bill Walsh leadership lessons</Card.Title>
            <Card.Text className='text-black-50 bg-white'>
              Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
            </Card.Text>
            <span className="badge text-primary text-bg-primary me-3 bg-opacity-10">Leadership</span>
            <span className="badge text-danger text-bg-danger me-3 bg-opacity-10">Management</span>
          </Card.Body>
        </Card>

        <Card className='border-0'>
          <Card.Img variant="top" src="./assets/images/home-page/cardImage3.png" />
          <Card.Body className='p-0 mt-4'>
            <p className='text-primary'>Alec Whitten • 17 Jan 2022</p>
            <Card.Title>Bill Walsh leadership lessons</Card.Title>
            <Card.Text className='text-black-50 bg-white'>
              Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
            </Card.Text>
            <span className="badge text-primary text-bg-primary me-3 bg-opacity-10">Leadership</span>
            <span className="badge text-danger text-bg-danger me-3 bg-opacity-10">Management</span>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Newspage;
