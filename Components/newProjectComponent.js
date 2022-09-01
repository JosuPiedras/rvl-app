import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Context from '../Context/context';

export default class NewProjectComponent extends React.Component {
    static contextType = Context;
    state = {
        title: "",
        description: "",
        goalAmmount: 0
    }

    handleCreateProject = () => {
        let projectBody = {
            title: this.state.title,
            description: this.state.description,
            goalAmmount: Number(this.state.goalAmmount),
            owner: this.context.userData._id
        }
        console.log(projectBody)
        this.context.createProject(projectBody)
        // this.context.login(loginBody, this.props)
        // this.props.navigation.navigate('Browse Projects')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Title of your project"
                        placeholderTextColor="#ffffff"
                        onChangeText={text => this.setState({ title: text })} />
                </View>
                <View style={styles.newView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="A brief description of your project"
                        placeholderTextColor="#ffffff"
                        multiline
                        numberOfLines={6}
                        onChangeText={text => this.setState({ description: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Gulag goal of your project"
                        placeholderTextColor="#ffffff"
                        keyboardType='number-pad'
                        onChangeText={text => this.setState({ goalAmmount: text })} />
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={this.handleCreateProject}>
                    <Text style={styles.loginText}>Create project</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191607',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView:{
        width:"80%",
        backgroundColor:"#9b8c57",
        borderColor: "#ffffff",
        borderWidth: '1px',
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      newView:{
        width:"80%",
        backgroundColor:"#9b8c57",
        borderColor: "#ffffff",
        borderWidth: '1px',
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"#ffffff"
      },
      loginBtn: {
          width: "60%",
          backgroundColor: "#7e7b2d",
          borderRadius: 10,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: '10%',
          marginBottom: '10%'
      },
      loginText: {
          color: "#ffffff",
          fontWeight: 'bold'
      }
});