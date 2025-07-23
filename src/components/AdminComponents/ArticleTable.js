import React from "react";
import { Link } from 'react-router-dom';



function ArticleTable(props) {

    return (

        <>
            <br />
            <table class='AAtable'>
                <tr>
                    <th>User ID</th>
                    <th>Topic</th>
                    <th>Published Date</th>
                    <th colSpan="3"></th>
                </tr>

                {props.articles.map((article) =>(

                    <tr>
                    <td>{article.userId}</td>
                    <td>{article.topic}</td>
                    <td>{article.publishedDate}</td>
                    <td><Link to="/AdminArticleTable">View User Profiles</Link></td>
                    <td><Link to="/AdminArticleTable">View Article</Link></td>
                    <td><Link to="/AdminArticleTable" className="link-red">Delete Article</Link></td>
                </tr>

                ))}


            </table>
        </>







    )
}
export default ArticleTable;
