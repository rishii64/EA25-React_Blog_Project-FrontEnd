import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import axios from "axios";

export default function ReadCompo() {
    const nav = useNavigate()
    const readData = useParams().id
    let count = 0
    const [loading, setLoading] = useState(false)
    const [blogData, setBlogData] = useState([])
    const [filterData, setFilterData] = useState([])
    useEffect(() => {
        setLoading(true)
        axios.get(`https://reactblogbackend-ih05.onrender.com`)
            .then((response) => {
                setBlogData(response.data);
                let data = response.data.filter((e, index) => {
                    return e.id === Number(readData)
                })
                setFilterData(data[0])
                setLoading(false)
            })
    }, [readData])

    return (
        <>
            {
                loading ? <p>Loading...</p> :
                    <div className="readBlog">
                        <h1 className="readTitle">{filterData.title}</h1>

                        <div className="readReporter">
                            <hr className="readLine"></hr>
                            <div className="readBlogUserdata">
                                <div className="readBlogUser">
                                    <i className="fa-solid fa-user"></i> Saptarsi {filterData.date}
                                </div>
                                <div className="readBlogLogo">
                                    <i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-youtube"></i>
                                </div>
                            </div>
                            <hr className="readLine"></hr>
                        </div>

                        <img className="readImg" src={filterData.img} alt='not found' />
                        <p className="readDesc">{filterData.desc}</p>

                        <div className="readReporter">
                            <hr className="readLine"></hr>
                            <div className="readBlogUserdata">
                                <div className="readBlogUser">
                                    <i className="fa-solid fa-user"></i> Saptarsi {filterData.date}
                                </div>
                                <div className="readBlogLogo">
                                    <i className="fa-solid fa-hands-clapping"></i> {filterData.clap}
                                </div>
                            </div>
                            <hr className="readLine"></hr>
                        </div>

                    </div>
            }
            <div className="share">
                <div>
                    <i className="fa-solid fa-hands-clapping"></i> {filterData.clap}
                </div>
                <div>
                    <i className="fa-solid fa-share-nodes"></i> Share
                </div>
            </div>
            <button className="readBtn" onClick={() => nav(-1)}>Back</button>

            <h2 className='latestHead'>More from Siren</h2>
            {
                loading ? <p>Loading...</p> :
                    <div className="readMore">
                        {
                            blogData.map((item, index) => {
                                if (item.cat === filterData.cat && item.id !== filterData.id && count < 5) {
                                    count++
                                    return <div key={index} className='left section1 readArticles'>
                                        <img className='homeLatest' src={item.img} alt='not found' />
                                        <div className='info home'>
                                            <h3><Link to={`/Blog/${item.id}`}>{item.title.slice(0, 80)}....</Link></h3>
                                            <p className='des'>{item.desc.slice(0, 40)}....</p>
                                            <p className='ref'>Bollywood : 17-10-23</p>
                                        </div>
                                    </div>
                                }
                                else {
                                    return null
                                }
                            })
                        }
                    </div>
            }
        </>
    )
}

