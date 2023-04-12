import {FromComponent} from './components/FromComponent'
import {ListComponent} from './components/ListTcomponent'
import { Provider } from 'react-redux'
import { store } from './globalState/store/store'

export default function Home() {
  return (
    <>
      <Provider store = {store}>
      <FromComponent/>
      <ListComponent />
      </Provider>
    </>
  )
}
