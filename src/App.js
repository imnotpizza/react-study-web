import React from "react";
import axios from "axios"

export default class App extends React.Component {
   constructor(props){
      super(props);
      this.state={
        input: "",
        values: []
      }
    }
  exexuteSearch=()=>{
    const query=this.state.input
    console.log(this.state);
    this.fetchImages(query)
  }

  applyValue=(e)=>{
    this.setState({
      input: e.target.value
    })
  }

  displayItems=()=>{
    
  }

  fetchImages=(query)=>{
   

    axios.get("https://dapi.kakao.com/v2/search/image?query="+query, 
      {
        headers: {
        Authorization: "KakaoAK 7b214de97084240d9f62c44e3744e069"
      }
    }
    )
    .then(response=>{

      console.log(response);

      this.setState({
        values: response.data.documents
      })

     
    })
  }

  render() {
  
      return (
        <div>
          <h1>카카오 이미지 검색 API</h1>

          <p>
            검색어 입력  :   
            <input type="text" id="query" onChange={this.applyValue}></input>
            <button onClick={this.exexuteSearch}>Click</button>
          </p>

          {this.state.values.map((item, i)=>{
            return(
            <div key={i}>
              <img  src={item.image_url} width="400" height="250"></img>
              <p>게시일 : {item.datetime}</p>
              <p><a href={item.doc_url}>경로 방문하기</a></p>
            </div>
            )
          })}
        </div>
      ); 
    
  }
}
