import { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'


function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data])
  }

  const handleRemoveBtn = (id) => {
    setUsers(() => users.filter((item, index) => index!=id))
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-zinc-500">
        <div className="container mx-auto">
          <Cards handleRemoveBtn={handleRemoveBtn} users={users}  />
          <Form handleFormSubmitData={handleFormSubmitData} />
        </div>
      </div>
    </>
  )
}

export default App
