import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Context from '../Context/context';
import Modal from 'modal-enhanced-react-native-web';

export default class ProjectViewComponent extends React.Component {
    modal = React.createRef();
    static contextType = Context;
    state = {
        projects: [
            {
                title: "Some camera",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                founded: 100000,
                goal: 1000000,
                src: require('../assets/stockImgs/camera.jpg'),
                creator: 'Jorge Almada',
                backers: 420
            },
            {
                title: "Some watch",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                founded: 200000,
                goal: 1000000,
                src: require('../assets/stockImgs/watch.jpg'),
                creator: 'Jorge Almada',
                backers: 420
            },
            {
                title: "Some glasses",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                founded: 300000,
                goal: 1000000,
                src: require('../assets/stockImgs/glasses.jpg'),
                creator: 'Jorge Almada',
                backers: 420
            },
            {
                title: "Some shoes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                founded: 400000,
                goal: 1000000,
                src: require('../assets/stockImgs/shoes.jpg'),
                creator: 'Jorge Almada',
                backers: 420
            },
            {
                title: "Some headphones",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                founded: 500000,
                goal: 1000000,
                src: require('../assets/stockImgs/headphones.jpg'),
                creator: 'Jorge Almada',
                backers: 420
            },
            {
                title: "Some lipstick",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                founded: 600000,
                goal: 1000000,
                src: require('../assets/stockImgs/lipstick.jpg'),
                creator: 'Jorge Almada',
                backers: 420
            },
            {
                title: "A plant",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                founded: 700000,
                goal: 1000000,
                src: require('../assets/stockImgs/plant.jpg'),
                creator: 'Jorge Almada',
                backers: 420
            },

        ],
        selectedElement: {},
        modalVisible: false,
        supportAmmount: 0,
        selectedIndex: null
    }

    openModal = (element, index) => {
        this.setState({
            selectedElement: element,
            selectedIndex: index
        })
        if (this.modal.current) {
            this.modal.current.open();
        }
        console.log(element)
    }

    openSecondModal = (state) => {
        this.setState({ modalVisible: state })
    }

    handleDonate = () => {
        let supportBody = {
            supportAmmount: Number(this.state.supportAmmount),
            userId: this.context.userData._id,
            projectId: this.state.selectedElement._id
        }
        this.context.supportProject(supportBody)
        this.state.selectedElement
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.outerCont}>
                <View style={styles.container}>
                    <Text>{this.context.state}</Text>
                    {this.context.projects.map((element, index) => {
                        return <TouchableOpacity style={styles.fullWidth} key={index} onPress={() => this.openModal(element, index)}>
                            <View style={styles.projectContainer}>
                                <ImageBackground source={require('../assets/stockImgs/glasses.jpg')} resizeMode="cover" style={styles.bgImg} imageStyle={{ borderRadius: 10 }}>
                                    <View style={styles.textContainer}>
                                        <View style={styles.textFlex}>
                                            <Text style={styles.projectHeader}>{element.title}
                                            </Text>
                                            <Text style={styles.projectText}>{element.founded.toLocaleString() + ' GULAG'}
                                            </Text>
                                        </View>
                                        <View style={styles.progressBar}>
                                            <ProgressBar progress={(element.founded / element.goalAmmount)} color={'#dbc922'} />
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    })}
                    <TouchableOpacity style={styles.newProjectButton} onPress={() => this.props.navigation.navigate('Create a new project')}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View >
                <Modalize
                    ref={this.modal}
                    // HeaderComponent={this.renderHeader}
                    modalHeight={500}
                >
                    <ScrollView>
                        <View style={styles.modalFirstSection}>
                            <Text style={styles.modalHeader}>{this.state.selectedElement.title}</Text>
                            <Text style={styles.modalCreatorName}>by {this.state.selectedElement.owner ? this.state.selectedElement.owner.fullName : ''}</Text>
                        </View>
                        <View style={styles.modalSecondSection}>
                            <View style={styles.firstPart}>
                                {/* <ProgressCircle
                                    percent={this.state.selectedElement.founded / this.state.selectedElement.goal * 100}
                                    radius={50}
                                    borderWidth={8}
                                    color="#3399FF"
                                    shadowColor="#999"
                                    bgColor="#fff"
                                >
                                </ProgressCircle> */}
                                <AnimatedCircularProgress
                                    size={40}
                                    width={4}
                                    fill={this.state.selectedElement.founded / this.state.selectedElement.goalAmmount * 100}
                                    tintColor="#dbc922"
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor="#e7e9ee" />
                            </View>
                            <View style={styles.firstPart}>
                                <Text style={styles.modalCreatorName}>
                                    Raised
                                </Text>
                                <Text style={styles.mainText}>
                                    {(this.state.selectedElement.founded / this.state.selectedElement.goalAmmount * 100).toFixed(1)}%
                                </Text>
                            </View>
                            <View style={styles.bigPart}>
                                <Text style={styles.modalCreatorName}>Pledged of {this.state.selectedElement.goalAmmount}</Text>
                                <Text style={styles.mainText}>{this.state.selectedElement.founded}</Text>
                            </View>
                            <View style={styles.firstPart}>
                                <Text style={styles.modalCreatorName}>Backers</Text>
                                <Text style={styles.mainText}>{this.state.selectedElement.backers}</Text>
                            </View>
                        </View>
                        <View style={styles.thirdSection}>
                            <Text style={styles.descriptionText}>{this.state.selectedElement.description}</Text>
                            <Text style={styles.readMoreText}>Read more about the project {'>'}</Text>
                        </View>
                        <View style={styles.buttonSection}>
                            <TouchableOpacity style={styles.loginBtn} onPress={() => this.openSecondModal(true)}>
                                <Text style={styles.loginText}>SUPPORT PROJECT</Text>
                            </TouchableOpacity>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            isVisible={this.state.modalVisible}
                            onBackdropPress={() => this.setState({ modalVisible: false })}
                        >
                            <View style={styles.moneyModal}>
                            <View style={styles.inputView} >
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Ammount to donate"
                                    placeholderTextColor="#ffffff"
                                    keyboardType='number-pad'
                                    onChangeText={text => this.setState({ supportAmmount: text })} />
                                    </View>
                                <TouchableOpacity style={styles.loginBtn} onPress={this.handleDonate}>
                                    <Text style={styles.loginText}>Support Project</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </ScrollView>
                </Modalize>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    outerCont: {
        flex: 1,
        maxHeight: '100%',
        overflow: 'hidden'
    },
    container: {
        flexGrow: 1,
        backgroundColor: '#191607',
        alignItems: 'center',
        maxHeight: Dimensions.get("window").height - 64,
        overflow: 'scroll'
        // justifyContent: 'center',
    },
    fullWidth: {
        width: '100%',
        alignItems: 'center'
    },
    newProjectButton: {
        width: 50,
        backgroundColor: "#fec950",
        borderRadius: "50%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        position: 'fixed',
        bottom: '10px',
        right: '10px'
    },
    buttonText: {
        color: "#ffffff"
    },
    projectContainer: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: 160,
        width: '96%',
        // padding: 10,
        textAlign: 'left',
        backgroundColor: '#302b0d',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        overflow: 'hidden'
    },
    projectHeader: {
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: 'bold'
    },
    projectText: {
        color: '#ffffff',
        fontSize: '10px',
        opacity: 0.6
    },
    textContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000c0',
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    bgImg: {
        flex: 1,
        justifyContent: "center"
    },
    progressBar: {
        paddingHorizontal: 30,
        width: '100%',
        marginBottom: 30
    },
    textFlex: {
        width: '100%',
        paddingHorizontal: 30,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "flex-end"
    },
    // MODAL STYLES
    modalFirstSection: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 30,
        backgroundColor: '#28353f'
    },
    modalHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    modalCreatorName: {
        fontSize: 10,
        opacity: 0.8,
        color: '#fff'
    },
    modalSecondSection: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'rgba(219, 201, 34, .6)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#28353f'
    },
    firstPart: {
        width: '20%',
        flex: '0 0 20%',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    bigPart: {
        width: '40%',
        flex: '0 0 40%',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    mainText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    thirdSection: {
        textAlign: 'justify',
        padding: 15,
        backgroundColor: '#28353f'
    },
    descriptionText: {
        fontSize: 14,
        color: '#fff'
    },
    readMoreText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 15
    },
    buttonSection: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#28353f'
    },
    loginBtn: {
        width: "90%",
        backgroundColor: "#3cbf83",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    },
    loginText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 'bold'
    },
    moneyModal: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        padding: 20
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
      inputText:{
        height:50,
        color:"#ffffff"
      }
});