import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function CommonBlog() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const path = useLocation().pathname
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5000/blog${path}`)
      .then((response) => {
        setData(response.data);
        setLoading(false)
      })
  }, [path])


  let dataFun1 = (item, index) => {
    if (index < 7) {
      return (
        <div key={index} className='left'>
          <img className='homeArticles' src={item.img} alt='not found' />
          <div className='info'>
            <h3 className='lHead'><Link to={`/Blog/${item.id}`}>{item.title.slice(0, 80)}....</Link></h3>
            <p className='des'>{item.desc.slice(0, 180)}....</p>
            <p className='ref'>Bollywood : 17-10-23</p>
          </div>
        </div>
      )
    }
  }
  let dataFun2 = (item, index) => {
    if (index === 7) {
      return (
        <div key={index} className='topPost'>
          <img id='topPost' src={item.img} alt='not found' />
          <div className='info'>
            <h3 className='lHead'><Link to={`/Blog/${item.id}`}>{item.title}</Link></h3>
            <p className='ref'>Bollywood : 17-10-23</p>
          </div>
        </div>
      )
    }
  }
  let dataFun3 = (item, index) => {
    if (index > 7) {
      return (
        <div key={index} className='right'>
          <img id='rightImg' src={item.img} alt='not found' />
          <div className='info'>
            <h3 className='r8Head'><Link to={`/Blog/${item.id}`}>{item.title}</Link></h3>
            <p className='ref'>Bollywood : 17-10-23</p>
          </div>
        </div>
      )
    }
  }
  return (
    <div className='main'>
      {
        loading ? <p>Loading</p> : <>
          <div className='leftCont'>
            <h2 id='bolly'>{path.split("/")[1]}</h2>
            {data.map(dataFun1)
            }
          </div>

          <div className='rightCont'>
            <h2>Top Posts</h2>
            {data.map(dataFun2)}
            {data.map(dataFun3)
            }
            <div className='addvert'>
              <img className='bollyAdd' src='data:image/jpeg;base64,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' alt='not found'></img>
            </div>
          </div>
        </>
      }
    </div>
  )
}
