import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import Context from '../Context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'react-native-elements';

export default class DashboardComponent extends React.Component {
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
            <ScrollView>
                <View style={styles.container}>

                </View>
            </ScrollView>
                <View style={styles.footerBackground}>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity style={styles.newsBtn} onPress={this.handleLogin}>
                            <Text style={styles.loginText}><FontAwesomeIcon inverse icon={faNewspaper} size="2x"/></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.favBtn} onPress={this.handleLogin}>
                            <Text style={styles.loginText}><FontAwesomeIcon inverse icon={faHeart} size="2x"/></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.homeBtn} onPress={this.handleLogin}>
                            <Text style={styles.loginText}><FontAwesomeIcon inverse icon={faHouse} size="2x"/></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.walletBtn} onPress={this.handleLogin}>
                            <Text style={styles.loginText}><FontAwesomeIcon inverse icon={faWallet} size="2x"/></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.configBtn} onPress={this.handleLogin}>
                            <Text style={styles.loginText}><FontAwesomeIcon inverse icon={faGear} size="2x"/></Text>
                        </TouchableOpacity>
                    </View>
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
    footerBackground: {
        shadowColor: "black",
        backgroundColor: '#1B213B',
        height: '5rem'
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    bgImg: {
        flex: 1,
        justifyContent: 'center'
    },
    newsBtn: {
        paddingTop: '1rem',
        width: "21%",
        borderRadius: 2,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    favBtn: {
        paddingTop: '1rem',
        width: "21%",
        borderRadius: 2,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    homeBtn: {
        marginTop: '0.5rem',
        width: "15%",
        borderRadius: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#3552AD'
    },
    walletBtn: {
        paddingTop: '1rem',
        width: "21%",
        borderRadius: 2,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    configBtn: {
        paddingTop: '1rem',
        width: "21%",
        borderRadius: 2,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});