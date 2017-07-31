import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import appStyles  from '../app/styles';

import { authenticate } from '../../redux/reducers/user';

const mapDispatchToProps = () => ({ authenticate });
const mapStateToProps = ({ user }) => ({ user }); 

export class Page extends Component {

    constructor(props) {
        super(props);
    }

    //componentWillReceiveProps
    componentDidMount() {
        this.props.initialize({
            login: this.props.user.login,
            password: "****"
        });
    }

    submit(values) {
        this.props.authenticate(values);
    }

    render() {
        const props = this.props;
        return (
            <Container>
                <Content>
                    {/* <CustomForm onSubmit={this.submit.bind(this)} {...props}/> */}
                    <Button onPress={this.submit.bind(this)}>
                        <Text>Connexion</Text>
                    </Button>
                </Content>
            </Container>
        );
  }
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
    return <Input onChangeText={onChange} {...restInput} />
}

const CustomForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, user, onSubmit } = props;
    return (
      <Form>
        <Item fixedLabel>
            <Label>Username</Label>
            <Field name="login" component={renderInput} />
        </Item>
        <Item fixedLabel last>
            <Label>Password</Label>
            <Field name="password" component={renderInput} />
        </Item>
{user.error &&
        <Text style={{color: "#ff0066" }}>{user.error.toString()}</Text>
}
        <Button onPress={handleSubmit(onSubmit)}>
            <Text>Connexion</Text>
        </Button>
        <Button onPress={reset}>
            <Text>Cancel</Text>
        </Button>
    </Form>
  )
}

Page = reduxForm({
    form: 'login',
    enableReinitialize: true
})(Page)

export default connect(mapStateToProps, mapDispatchToProps)(Page);