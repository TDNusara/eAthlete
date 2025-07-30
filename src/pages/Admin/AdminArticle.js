import React from 'react'
import Navbar from "../../components/NavbarManager";
import Footer2 from '../../components/Footer2';
import ArticleTable from '../../components/AdminComponents/ArticleTable';
import "../../css/Admin.css"
import { Link } from 'react-router-dom';

function AdminArticle() {

      const articles = [
    {
      id: 1,
      userId: "user123",
      topic: "Introduction to React",
      publishedDate: "2023.05.15"
    },
    {
      id: 2,
      userId: "user456",
      topic: "Advanced CSS Techniques",
      publishedDate: "2023.06.22"
    },
    {
      id: 3,
      userId: "user789",
      topic: "JavaScript Best Practices",
      publishedDate: "2023.07.10"
    },
    // Add more articles as needed
  ];

  return (
    <div>
    <Navbar/>

    <div className='AMPBody'>
      <br /><br />
      <h2 class = 'AArticle'>Articles</h2>
      <ArticleTable articles={articles} />
        <br /><br />
        <div className='btnGroup'>
          <button className="btnL"><Link to="/AdminPanelUrl">Back To Admin Panel</Link></button>
        </div> 

        <br /><br /><br /><br /><br /><br /><br /><br />
</div>

      <Footer2 />

    </div>
 );
}



export default AdminArticle;