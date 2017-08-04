import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Container, Header, Title, Content, List, ListItem, InputGroup, Icon, Input, Text, Button } from 'native-base';
import { View, Image } from 'react-native';
import styles from './styles';

import { authenticate } from '../../redux/reducers/user';

const mapDispatchToProps = { authenticate };
const mapStateToProps = ({ user }) => ({ user }); 

export class Page extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            login: '',
            password: ''
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState(nextProps);
    // }

    submit(values) {
        this.props.authenticate(this.state);
    }

    render() {
        let { error } = this.props.user;

        return (
            <View style={{
                flex: 1,
                backgroundColor: "#333"
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    minHeight: 200
                }}>
                    <Image source={require('../../assets/images/logo-audi.png')} />
                </View>

                <View style={{ marginBottom: 64 }}>
                    <List style={{ marginBottom: 32 }}>
{error &&
                        <ListItem style={{borderColor: "transparent", marginBottom: 16 }}>
                            <InputGroup >
                                <Icon name="alert" style={{ color: '#d33', paddingRight: 16 }} />
                                <Text style={{ color: '#fff' }}>
                                    {error}
                                </Text>
                            </InputGroup>
                        </ListItem>
}
                        <ListItem>
                            <InputGroup>
                                <Icon name="person" style={{ color: '#fff', paddingRight: 16 }} />
                                <Input
                                    style={{ color: '#fff'}}
                                    onChangeText={(text) => this.setState({login: text})}
                                    value={this.state.login}
                                    placeholder={"Email Address"} 
                                />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="unlock" style={{ color: '#fff', paddingRight: 16 }} />
                                <Input
                                    onChangeText={(text) => this.setState({password: text})}
                                    value={this.state.password}
                                    secureTextEntry={true}
                                    placeholder={"Password"} 
                                />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button full onPress={this.submit.bind(this)} >
                        <Text>Connexion</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);