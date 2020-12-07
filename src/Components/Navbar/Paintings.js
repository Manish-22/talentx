import React from 'react';
import GalleryApp from './GalleryApp';
import './style2.css'
import './Paintings.css'
class Paintings extends React.Component {
    
      
      constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
    
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Comfirm submit');
      event.preventDefault();
      
    }
    
    render() {
     
      return (
        <div className='Paintings'>
          <div className='Upload-form '>
        <form onSubmit={this.handleSubmit}>
          <div className='text center'>
          <label>
            Image:
            <input type="text" value={this.state.value} onChange={this.handleChange } />
          </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
        </div>
        <GalleryApp />
        <div className='form center pa4 br3 shadow-5'>
        <img src={this.state.value} alt='' width='500px' heigh='auto'/>
        </div>
        </div>
       
         
      );
    }
  }
  
  export default Paintings