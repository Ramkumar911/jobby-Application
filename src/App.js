import './App.css'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import TopicContext from './Context/TopicContext'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here

class App extends Component {
  state = {
    isWelcomeStatus: false,
    nameInput: '',
    topicInput: topicsList[0].id,
    isError: false,
  }

  isChangeWelcomeStatus = () => {
    this.setState({isWelcomeStatus: true})
  }

  isChangeName = value => {
    this.setState({nameInput: value})
  }

  isChangeTopic = value => {
    this.setState({topicInput: value})
  }

  isChangeErrorStatus = () => {
    this.setState({isError: true})
  }

  render() {
    const {isWelcomeStatus, nameInput, topicInput, isError} = this.state
    console.log(nameInput)
    console.log(topicInput)
    return (
      <TopicContext.Provider
        value={{
          isWelcomeStatus,
          nameInput,
          topicInput,
          isError,
          isChangeName: this.isChangeName,
          isChangeTopic: this.isChangeTopic,
          isChangeWelcomeStatus: this.isChangeWelcomeStatus,
          isChangeErrorStatus: this.isChangeErrorStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </TopicContext.Provider>
    )
  }
}

export default App
