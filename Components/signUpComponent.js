import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Context from '../Context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'react-native-elements';

export default class SignUpComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    handleLogin = () => {
        let loginBody = {
            email: this.state.email,
            password: this.state.password
        }
        this.context.login(loginBody, this.props)
        // this.props.navigation.navigate('Browse Projects')
    }
    handleBack = () => {
        this.props.navigation.navigate('Login');
    }

    static contextType = Context;
    render() {
        return (
            <ImageBackground source={require('../assets/img/wallpaper.png')} resizeMode="cover" style={styles.bgImg}>
            <View style={styles.container}>
                {/* <Text style={styles.logo}>HeyAPP</Text> */}
                {/* <Image
                    style={styles.logo}
                    source={require('../assets/gtokenlogo.png')}>
                </Image> */}
                <View style={styles.topContainer}>
                    <TouchableOpacity style={styles.topContainerAngle} onPress={this.handleBack} >
                        <FontAwesomeIcon inverse icon={faAngleLeft} size="2x"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topContainerLogin} onPress={this.handleBack}>
                        <Text style={styles.whiteBold}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secondTopContainer}>
                    <Text style={styles.loginTagText}>Sign up</Text>
                </View>
                <br></br>
                <br></br>
                <View style={styles.userView} >
                    <Input
                        placeholderStyle={styles.placeholderText}
                        placeholder='First Name'
                        style={styles.inputText}
                        labelStyle={styles.labelStyle}
                        onChangeText={text => this.setState({ firstName: text })}
                    />
                </View>
                <View style={styles.userView} >
                    <Input
                        placeholderStyle={styles.placeholderText}
                        placeholder='Last Name'
                        style={styles.inputText}
                        labelStyle={styles.labelStyle}
                        onChangeText={text => this.setState({ lastName: text })}
                    />
                </View>
                <View style={styles.userView} >
                    <Input
                        placeholderStyle={styles.placeholderText}
                        placeholder='Email'
                        style={styles.inputText}
                        labelStyle={styles.labelStyle}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </View>
                <View style={styles.passView} >
                    {/* <PasswordTextBox icon='lock' label='New Password' onChange={(v) => this._updateState('new', v)} /> */}
                    <Input
                        placeholderStyle={styles.placeholderText}
                        placeholder='Password'
                        labelStyle={styles.labelStyle}
                        style={styles.inputText}
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ password: text })}
                    />
                </View>
                <View style={styles.forgotPass}>
                    <Text style={styles.signUpText}>Forgot Password ?</Text>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={this.handleLogin}>
                    <Text style={styles.loginText}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.bottomContainer}>
                    <Text style={styles.whiteBold}>No Account Yet ? <Text style={styles.signUpText}> Sign Up</Text></Text>
                </View>
                <View style={ styles.separator}>
                    <View style={{backgroundColor: 'white', height: 3, flex: 1, alignSelf: 'center'}} />
                    <Text style={{color:'white', alignSelf:'center', paddingHorizontal:5, fontSize: 15 }}>OR</Text>
                    <View style={{backgroundColor: 'white', height: 3, flex: 1, alignSelf: 'center'}} />
                </View>
                <TouchableOpacity style={styles.googleBtn} onPress={this.handleLogin}>
                    <Text style={styles.loginText}>Google</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#191607',
        alignItems: 'center'
        // justifyContent: 'center',
    },
    topContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '4rem'
    },
    topTwo: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between'
    },
    logo: {
        width: 200,
        height: 50,
        marginBottom: '10%',
        marginTop: '10%'
    },
    separator:{
        paddingTop: '40px',
        flexDirection: 'row'
    },
    image: {
        flex: 0,
        justifyContent: "center"
    },
    userView: {
        width: "100%",
        // backgroundColor:"#9b8c57",
        // borderRadius:25,
        // borderColor: "#ffffff",
        // borderWidth: '1px',
        height: 50,
        marginBottom: 30,
        justifyContent: "center",
        padding: 20
    },
    passView: {
        width: "100%",
        // backgroundColor:"#9b8c57",
        // borderRadius:25,
        // borderColor: "#ffffff",
        // borderWidth: '1px',
        height: 50,
        marginBottom: 5,
        justifyContent: "center",
        padding: 20
    },
    angleLeft: {
        color: "white",
    },
    sign: {
        width: "100%",
        // backgroundColor:"#9b8c57",
        // borderRadius:25,
        // borderColor: "#ffffff",
        // borderWidth: '1px',
        height: 50,
        marginBottom: 30,
        justifyContent: "right",
        padding: 20
    },
    labelStyle: {
        color: '#ffffff',
        opacity: 0.8
    },
    inputText: {
        height: 50,
        color: "white"
    },
    placeholderText: {
        color: "white"
    },
    forgot: {
        textAlign: 'right',
        color: "#ffffff",
        fontSize: 11
    },
    googleBtn: {
        width: "30%",
        backgroundColor: "#3746A7",
        borderRadius: 2,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: '30px',
        marginBottom: '7px'
    },
    loginBtn: {
        width: "85%",
        backgroundColor: "#3746A7",
        borderRadius: 2,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: '10%',
        marginBottom: '7px'
    },
    loginText: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: '18px'
    },
    signUpText: {
        color: "#34419D",
        fontSize: '14px',
        fontWeight: 'bold',
    },
    whiteBold: {
        color: "white",
        fontSize: '14px',
        fontWeight: 'bold',
    },
    bottomContainer: {
        flex: 0,
        width: '100%',
        textAlign: 'center',
    },
    topContainerAngle: {
        paddingTop: '20%',
        paddingBottom: '10%',
        alignItems: "center",
        justifyContent: "center",
    },
    topContainerLogin: {
        paddingTop: '20%',
        paddingBottom: '10%',
        alignItems: "center",
        justifyContent: "center",
    },
    forgotPass: {
        width: '100%',
        textAlign: 'right',
        paddingRight: 30
    },
    logoContainer: {
        width: '100%',
        textAlign: 'center',
        paddingTop: 30,
        paddingRight: 30
    },
    secondTopContainer: {
        width: '100%',
        textAlign: 'left',
        paddingTop: 10,
        paddingLeft: 30
    },
    loginTagText:{
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: '40px',
    },
    bgImg: {
        flex: 1,
        justifyContent: "center"
    }
});