import React, { useContext, useEffect, useState } from 'react'
import tech from './tech.jpg'
import fit from './fit.jpg'
import jujutsu from './jujutsu.webp'
import add from './add.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [blogData, setBlogData] = useState([])
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5000/`)
      .then((response) => {
        setBlogData(response.data);
        setLoading(false)
      })
  }, [])
  return (
    <>
      <div className='images'>
        <img className='img1' src={jujutsu} alt='not found' />
        <img className='img2' src={tech} alt='not found' />
        <img className='img3' src={fit} alt='not found' />
      </div>
      {
        loading ? <p>Loading..</p> : <>
          <h2 className='latestHead'>The Latest</h2>
          <div className='theLatest'>
            <div className='left section1'>
              <img className='homeLatest' src={blogData[2]?.img} alt='not found' />
              <div className='info home'>
                <h3 className='titleLink'><Link to={`/Blog/${blogData[2]?.id}`}>{blogData[2]?.title}</Link></h3>
                <p className='des'>{blogData[2]?.desc.slice(0, 100)}....</p>
                <p className='ref'>Bollywood : 17-10-23</p>
              </div>
            </div>
            <div className='left section1'>
              <img className='homeLatest' src={blogData[22]?.img} alt='not found' />
              <div className='info home'>
                <h3><Link to={`/Blog/${blogData[22]?.id}`}>{blogData[22]?.title}</Link></h3>
                <p className='des'>{blogData[22]?.desc.slice(0, 150)}....</p>
                <p className='ref'>Bollywood : 17-10-23</p>
              </div>
            </div>
            <div className='left section1'>
              <img className='homeLatest' src={blogData[44]?.img} alt='not found' />
              <div className='info home'>
                <h3><Link to={`/Blog/${blogData[44]?.id}`}>{blogData[44]?.title}</Link></h3>
                <p className='des'>{blogData[44]?.desc.slice(0, 150)}....</p>
                <p className='ref'>Technology : 17-10-23</p>
              </div>
            </div>
          </div>

          <div className='latestArticles'>
            <div className='homePageLeft'>
              <h2 className='latestHead mainTopPost'>The Latest Articles</h2>
              <div className='left section2'>
                <img className='homeArticles' src={blogData[5]?.img} alt='not found' />
                <div className='info articles'>
                  <h3><Link to={`/Blog/${blogData[5]?.id}`}>{blogData[5]?.title}</Link></h3>
                  <p className='des'>{blogData[5]?.desc.slice(0, 150)}....</p>
                  <p className='ref'>Bollywood : 17-10-23</p>
                </div>
              </div>
              <div className='left section2'>
                <img className='homeArticles' src={blogData[16]?.img} alt='not found' />
                <div className='info articles'>
                  <h3><Link to={`/Blog/${blogData[16]?.id}`}>{blogData[16]?.title}</Link></h3>
                  <p className='des'>{blogData[16]?.desc.slice(0, 150)}....</p>
                  <p className='ref'>Fitness : 17-10-23</p>
                </div>
              </div>
              <div className='left section2'>
                <img className='homeArticles' src={blogData[22]?.img} alt='not found' />
                <div className='info articles'>
                  <h3><Link to={`/Blog/${blogData[22]?.id}`}>{blogData[22]?.title}</Link></h3>
                  <p className='des'>{blogData[22]?.desc.slice(0, 200)}....</p>
                  <p className='ref'>Food : 17-10-23</p>
                </div>
              </div>
              <div className='left section2'>
                <img className='homeArticles' src={blogData[33]?.img} alt='not found' />
                <div className='info articles'>
                  <h3><Link to={`/Blog/${blogData[33]?.id}`}>{blogData[33]?.title}</Link></h3>
                  <p className='des'>{blogData[33]?.desc.slice(0, 170)}....</p>
                  <p className='ref'>Hollywood : 17-10-23</p>
                </div>
              </div>
            </div>

            <div className='homeRight'>
              <img className='add' src={add} alt='not found'></img>
              <h2 className='latestHead mainTopPost'>Top Post</h2>
              <div className='homePost left section1'>
                <img className='homeLatest topImg' src={blogData[44]?.img} alt='not found' />
                <div className='info home'>
                  <h3><Link to={`/Blog/${blogData[44]?.id}`}>{blogData[44]?.title}</Link></h3>
                  <p className='ref'>Bollywood : 17-10-23</p>
                </div>
              </div>
            </div>

          </div>

          <h2 className='latestHead'>Latest Stories</h2>
          <div className='theLatest'>
            <div className='left section1'>
              <img className='homeLatest' src={blogData[12]?.img} alt='not found' />
              <div className='info home'>
                <h3><Link to={`/Blog/${blogData[12]?.id}`}>{blogData[12]?.title}</Link></h3>
                <p className='des'>{blogData[12]?.desc.slice(0, 120)}....</p>
                <p className='ref'>Bollywood : 17-10-23</p>
              </div>
            </div>
            <div className='left section1'>
              <img className='homeLatest' src={blogData[24]?.img} alt='not found' />
              <div className='info home'>
                <h3><Link to={`/Blog/${blogData[24]?.id}`}>{blogData[24]?.title}</Link></h3>
                <p className='des'>{blogData[24]?.desc.slice(0, 180)}....</p>
                <p className='ref'>Bollywood : 17-10-23</p>
              </div>
            </div>
            <div className='left section1'>
              <img className='homeLatest' src={blogData[36]?.img} alt='not found' />
              <div className='info home'>
                <h3><Link to={`/Blog/${blogData[36]?.id}`}>{blogData[36]?.title}</Link></h3>
                <p className='des'>{blogData[36]?.desc.slice(0, 120)}....</p>
                <p className='ref'>Hollywood : 17-10-23</p>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}
