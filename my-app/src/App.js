import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUserList } from './actions';

import './App.css';

import image1 from './img/avatar.jpg';

const App = ({ getUserList, userList}) => {

 
  useEffect(() => {
    getUserList();
  },[]);

  return (
    <div className="App">
      <p className="header">List User</p>
      <div className="search-bar">
        <input type="text" className="search-text" placeholder="search by name, username, email"/>
      </div>
      <div className="list-user">
        {userList && userList.length > 0 ?
          userList.map((item, index) => {
            return(
              <div key={item.id} className="box">
                <div className="top-section">
                  <div className="name">{item.name}</div>
                  <div className="profilePicture">
                    <img src={image1} className="image"/>
                  </div>
                  <div className="detail-user-information">
                    <div>{item.username}</div>
                    <div>{item.email}</div>
                    <div>{item.phone}</div>
                    <div>{item.website}</div>
                  </div>  
                 </div>
                 <div className="contact-information">
                   <div className="adress"> Address</div>
                   <div>Street: {item.address.street}</div>
                   <div>City: {item.address.city}</div>
                 </div>
                  
                  <div className="company-information">
                    <div className="company"> Company </div>
                    <div>{item.company.name}</div>
                    <div className="company-detail">
                      <div>{item.company.catchPhrase}</div>
                      <div>{item.company.bs}</div>
                    </div>
                  </div>
                  
              </div>
              );
            }) :
            <tr>
              <td>Loading</td>
            </tr>
          }   
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  }
}

export default connect(mapStateToProps, { getUserList })(App);
