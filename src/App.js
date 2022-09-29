import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team-matches/:id" component={TeamMatches} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
