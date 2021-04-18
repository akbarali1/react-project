import React from 'react';
import {API_URL,API_V1} from './Config';
import { Link } from 'react-route';

class Blog extends React.Component {
  state = {
    blog: [],
  }
  componentDidMount(){
    fetch(API_V1 + '/blog-info/')
    .then((response) => response.json())
    .then(data => {
      // console.log(data);
      this.setState({blog: data});
    });
  }
    render() {
       return (
        <section id="blog" className="blog-mf sect-pt4 route">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">
              Blog
            </h3>
            <p className="subtitle-a">
            Mening shaxsiy fikirlarimni yozib boruvchi bloglarim.
            </p>
            <div className="line-mf"></div>
          </div>
        </div>
      </div>
      <div className="row">

      {this.state.blog.map((item)=> (

        <div className="col-md-4" key={item.id}>
          <div className="card card-blog">
            <div className="card-img">
             <Link to="/blog">
               <img src={API_URL+"blog/"+item.photo} alt="" className="img-fluid" />
            </Link>
            </div>
            <div className="card-body">
              <div className="card-category-box">
                <div className="card-category">
                  <h6 className="category">{item.cat_name}</h6>
                </div>
              </div>
              <h3 className="card-title"><a href="blog-single.html">{item.name}</a></h3>
              <p className="card-description">{item.info}</p>
            </div>
            <div className="card-footer">
              <div className="post-author">
                  <img src={API_URL+item.author_photo} alt="" className="avatar rounded-circle" />
                  <span className="author">{item.author}</span>
              </div>
              <div className="post-date">
                <span className="ion-ios-clock-outline"></span> {item.time}
              </div>
            </div>
          </div>
        </div>
          ))}

      </div>
    </div>
  </section>
       )
    }
}

export default Blog;