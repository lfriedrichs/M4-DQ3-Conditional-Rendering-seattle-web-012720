import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      page: Profile
    }
  }

  changeState = (id) => {
    switch(id) {
      case 'profile':
        this.setState({page: Profile});
        break;
      case 'photo':
        this.setState({page: Photos});
        break;
      case 'cocktail':
        this.setState({page: Cocktails});
        break;
      case 'pokemon':
        this.setState({page: Pokemon});
        break;
      default:
        this.setState({page: Profile});
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar changePage={this.changeState}/>
        {this.state.page}
      </div>
    )
  }

}

export default MainBox
