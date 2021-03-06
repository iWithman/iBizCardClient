import React, { Component } from 'react';
import { getCard, saveCard } from '../../services/cardService';

class CardForm extends Component {
  state = { 
    data: {
      company: '',
      slogan: '',
      name: '',
      profession: '',
      phone: '',
      email: '',
      address: '',
      website: ''
    }
  }

  async componentDidMount() {
    try {
      const cardId = this.props.match.params.id
      if(cardId === 'new') return

      const { data: card } = await getCard(cardId)
      this.setState({ data: this.cardViewModel(card) })
    } catch (ex) {
      console.log(ex);
    }
  }

  cardViewModel(card) {
    return {
        _id: card._id,
        company: card.company,
        slogan: card.slogan,
        name: card.name,
        profession: card.profession,
        phone: card.phone,
        email: card.email,
        address: card.address,
        website: card.website,
    }
  }

  handleInputChange = ({ currentTarget: input }) => {
    const data = {...this.state.data}
    data[input.name] = input.value
    this.setState({ data })
  }

  handleSubmit = async e => {
      e.preventDefault()
      await saveCard(this.state.data)
      this.props.history.push('/profile')
  }

  renderInput = (label, name, value) => {
    return (
      <div>
        <label className="mt-3">{label}</label>
        <input type='text' className="form-control" name={name} value={value} onChange={this.handleInputChange} />
      </div>
    )
  } 
  
  goBack = () => {
    this.props.history.goBack()
  }

  render() { 
    const { data: card } = this.state
    return ( 
      <div style={{ margin: '15px' }}>
        <div>
          <h2>Card Form - {this.props.match.params.id}</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('Company Name', 'company', card.company, 'company')} 
          {this.renderInput('Slogan', 'slogan', card.slogan, 'slogan')} 
          {this.renderInput('Name', 'name', card.name, 'name')} 
          {this.renderInput('Profession', 'profession', card.profession, 'profession')} 
          {this.renderInput('Phone', 'phone', card.phone, 'phone')} 
          {this.renderInput('Email', 'email', card.email, 'email')} 
          {this.renderInput('Address', 'address', card.address, 'address')} 
          {this.renderInput('Website', 'website', card.website, 'website')} 
          <button onClick={this.goBack} type='button' className="btn btn-secondary mt-2 mb-2 mr-2">Cancel</button>
          <button type='submit' className="btn btn-primary mt-2 mb-2">Save</button>
        </form>
      </div>
    );
  }
}

export default CardForm;