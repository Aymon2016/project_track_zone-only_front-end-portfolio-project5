import ProjectAction from "../component/project_action/Project_action"
import ProjectList from "../component/project_list/project_list"
import Container from "../component/shared/ui/container"

const App = () => {
  const init = {
    id: '',
    projectName: '',
  }



  return (
    <Container>
      <ProjectAction state={init} projectAction={false} />
      <ProjectList />
    </Container>
  )
}



export default App
