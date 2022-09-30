import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches/index'

import './App.css'

const App = () => (
  <div>
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </>
  </div>
)

export default App
