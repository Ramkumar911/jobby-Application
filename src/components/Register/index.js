import {Component} from 'react'
import TopicContext from '../../Context/TopicContext'
import Header from '../Header'

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

class Register extends Component {
  state = {isErrorDisplay: false}

  render() {
    const {isErrorDisplay} = this.state
    return (
      <TopicContext.Consumer>
        {value => {
          const {nameInput, topicInput, isChangeName, isChangeTopic} = value
          const onChangeName = event => {
            isChangeName(event.target.value)
          }

          const onTopicChange = event => {
            isChangeTopic(event.target.value)
          }

          const onRegisterNow = event => {
            event.preventDefault()
            const {history} = this.props

            if (nameInput.length === 0) {
              this.setState({isErrorDisplay: true})
            } else {
              history.replace('/')
            }
          }
          return (
            <div>
              <Header />
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <div>
                  <h1>Let us join</h1>
                  <form onSubmit={onRegisterNow}>
                    <div>
                      <label htmlFor="name">Name</label>
                      <br />
                      <input
                        type="text"
                        id="name"
                        onChange={onChangeName}
                        value={nameInput}
                      />
                    </div>
                    <div>
                      <label htmlFor="topics">TOPICS</label>
                      <br />
                      <select
                        id="topics"
                        value={topicInput}
                        onChange={onTopicChange}
                      >
                        {topicsList.map(eachTopic => (
                          <option value={eachTopic.id} key={eachTopic.id}>
                            {eachTopic.displayText}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button type="submit">RegisterNow</button>
                    {isErrorDisplay && <p>please enter your name</p>}
                  </form>
                </div>
              </div>
            </div>
          )
        }}
      </TopicContext.Consumer>
    )
  }
}

export default Register
