import React from 'react';
import Context from './context';
export default class GlobalState extends React.Component{
state = {
  userData: {},
  projects: []
}
 
// addNewTask = (task) => {
//   const list = [...this.state.tasks, task];
//   this.setState({tasks: list});
// };
 
// deleteTask = (taskId) => {
//   this.setState(this.state.tasks.splice(taskId,1));
// };

login = (loginBody, mainPageProps) => {
  //   fetch('https://gulag-api.herokuapp.com/checkLogin', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     email: loginBody.email,
  //     password: loginBody.password
  //   })
  // }).then((response) => response.json())
  // .then((json) => {
  //   if(json){
  //     this.setState({userData: json})
  //     this.loadProjects()
  //     mainPageProps.navigation.navigate('Dashboard')
  //   }
  // }).catch((error) => {
  //   console.log(error)
  // });
  mainPageProps.navigation.navigate('Dashboard')
}

loadProjects = () => {
  fetch('https://gulag-api.herokuapp.com/projects', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json())
  .then((json) => {
    json.forEach(element => {
      element.founded = 0
      element.backers = 0
      if(element.projectsupports && element.projectsupports.length > 0){
        element.projectsupports.forEach(element2 => {
          element.founded = element.founded + element2.supportAmmount
          element.backers += 1
        })
      }
    });
    this.setState({projects: json})

  }).catch((error) => {
    console.log(error)
  })
}

createProject = (projectBody) => {
  fetch('https://gulag-api.herokuapp.com/projects', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(projectBody)
  }).then((response) => response.json())
  .then((json) => {
    if(json){
      console.log('Yay')
      this.loadProjects()
    }
  }).catch((error) => {
    console.log(error)
  });
}

supportProject = (supportBody) => {
  fetch('https://gulag-api.herokuapp.com/support-project', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(supportBody)
  }).then((response) => response.json())
  .then((json) => {
    if(json){
      this.loadProjects()
    }
  }).catch((error) => {
    console.log(error)
  });
}

render(){
 return (
  <Context.Provider 
   value={{
    userData: this.state.userData,
    projects: this.state.projects,
    login: this.login,
    createProject: this.createProject,
    supportProject: this.supportProject
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}