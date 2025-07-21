import React from 'react'
import SNavbar from "../../components/SNavbar";
import Footer from '../../components/Footer';
import ArticleTable from '../../components/AdminComponents/ArticleTable';

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
    <SNavbar/>

    <div className='AMPBody'>
      <br /><br />
      <h2 class = 'AArticle'>Articles</h2>
      <ArticleTable articles={articles} />
        <br /><br />

        <br /><br /><br /><br /><br /><br /><br /><br />
</div>

      <Footer />

    </div>
 );
}



export default AdminArticle;