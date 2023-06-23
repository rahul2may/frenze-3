import React, { useEffect, useState } from 'react'
import './CSS/Blog.css'
import Layout from '../Common/Layout'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Blog = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")
  const [searchData, setSearchData] = useState([])

  const getData = async () => {
    const BaseURL = 'https://jsonplaceholder.typicode.com';
    const responce = await axios.get(`${BaseURL}/photos`);
    setData(responce?.data);
    setSearchData(responce?.data);
  };
  // search function
  const filterData = (search, alldata) => {
    const res = alldata.filter((item) => {
      // return item["title"].toLowerCase().includes(search) || item['description'].toLowerCase().includes(search)
      return item.title.includes(search)
    })
    return res;
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const pdata = filterData(search, data)
    setSearchData(pdata)
    console.log("filter data", pdata);
  }

  console.log("search data", searchData);

  useEffect(() => {
    getData();
  }, [])
  console.log("main data", data);
  return (
    <>
      <Layout title={'Blog Page'}>

        <div className="container ">
          <div className="text-center mt-5 " style={{ marginBottom: 100 }}>
            <section>
              <div className="content">
                <h2>Our Clients Say!</h2>
                <h2>Our Clients Say!</h2>
              </div>
            </section>
          </div>
          {/* -------------------------------------------------------- */}
          <form className="form-inline" style={{ marginLeft: 910 }}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
              // value={}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit"
              onClick={handleSearch}

            >Search
            </button>
          </form>


          {/* -------------- */}
          <div id="boxes">
            <div id="rightbox">
              <div className='bg bg-glass'><h2 style={{ marginTop: 40, color: "#3399ff" }}>Categories</h2></div>
              Any geeks can help other geeks by writing
              articles on the GeeksforGeeks, publishing
              articles follow few steps that are Articles
              that need little modification/improvement
              from reviewers are published first.
            </div>
          </div>
          <div id="boxes2">
            <div id="rightbox2">
              <div className='bg bg-glass'><h2 style={{ marginTop: 40, color: "#3399ff" }}>New Post</h2></div>
              Any geeks can help other geeks by writing
              articles on the GeeksforGeeks, publishing
              articles follow few steps that are Articles
              that need little modification/improvement
              from reviewers are published first.
            </div>
          </div>
          {/* -------------------------------------------------------- */}
          <div className="row">
            {searchData?.slice(0,6).map((item, index) => {
              return (<>
                <div className="col-5">
                  <div className="card " style={{ width: '20rem', borderRadius: 30, marginBottom: 50 }}>
                    <img src={item.thumbnailUrl} className="card-img-top" style={{ borderRadius: 30 }} alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="#" className="btn btn-primary">Reply</Link>
                    </div>
                  </div>
                </div>
              </>)

            })}
          </div>
        </div>




      </Layout>

    </>
  )
}

export default Blog