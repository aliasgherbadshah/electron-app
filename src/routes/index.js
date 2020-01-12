import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Routes from './routes';
import io from 'socket.io-client';
import axios from 'axios';
import moment from 'moment'


class IndexRoutes extends Component {
    componentDidMount() {

        const socket = io("http://localhost:3993");



        let user = window.localStorage.getItem("user")
        if (user) {
            user = JSON.parse(user)
            axios.defaults.headers.common['Authorization'] = "Bearer " + user.accessToken;
            this.props.history.replace('/moorning');

            socket.on('listen_interval', (data) => {
                this.commonPopupHandler(socket)
            })
            socket.on('reminnder_timer', (data) => {
                this.remonderPopupHandler(socket)
            })
            socket.on('hydrated_timer', (data) => {
                this.props.history.replace('/hydrate');
                socket.emit("show_app", "Open the app");
            })

        } else {
            this.props.history.replace('/')
        }

    }
    remonderPopupHandler = (socket) => {
        let reminders = window.localStorage.getItem('todo');
        let remindersTime = window.localStorage.getItem('todo_time');
        let time = moment().format('HH:mm');
        if (time == "05:00") {
            this.props.history.replace('/reminder');
            socket.emit("show_app", "Open the app");
        }
        if (reminders && remindersTime) {
            reminders = JSON.parse(reminders);
            remindersTime = JSON.parse(remindersTime)
            console.log(reminders)
            if (remindersTime.indexOf(time) >= 0) {

                let newReminder = [];
                let newReminderTime = []
                reminders.map((obj, i) => {
                    if (i !== remindersTime.indexOf(time)) {
                        newReminder.push(obj);
                        newReminderTime.push(obj.time)
                    }
                })
                window.localStorage.setItem('todo', JSON.stringify(newReminder))
                window.localStorage.setItem('todo_time', JSON.stringify(newReminderTime))
                window.localStorage.setItem('last_reminder', reminders[remindersTime.indexOf(time)].reminder)
                this.props.history.replace('/last-reminder');
                socket.emit("show_app", "Open the app");
            }
        } else {

        }
    }
    commonPopupHandler = (socket) => {
        let modalData = window.localStorage.getItem('modalData');
        let day = moment().format('dddd');
        let time = moment().format('HH:mm');
        const timePlus45Min = moment().add(45, "minute").format('HH:mm');
        if (modalData) {
            console.log(modalData)
            modalData = JSON.parse(modalData);
            if (modalData.day == day) {
                // if (modalData.next_screen_time == time) {
                switch (modalData.last_screen) {
                    case 0:
                        this.resetStackHandler(socket, timePlus45Min, 1)
                        break;
                    case 1:
                        this.resetStackHandler(socket, timePlus45Min, 2)
                        break;
                    case 2:
                        this.resetStackHandler(socket, timePlus45Min, 3)
                        break;
                    case 3:
                        this.resetStackHandler(socket, timePlus45Min, 4)
                        break;
                    case 4:
                        this.resetStackHandler(socket, timePlus45Min, 5)
                        break;
                    case 5:
                        this.resetStackHandler(socket, timePlus45Min, 6)
                        break;
                    case 6:
                        this.resetStackHandler(socket, timePlus45Min, 7)
                        break;
                    case 7:
                        this.resetStackHandler(socket, timePlus45Min, 8)
                        break;
                    case 8:
                        this.resetStackHandler(socket, timePlus45Min, 9)
                        break;

                }
                // }
            } else {
                this.resetStackHandler(socket, timePlus45Min, 0)
            }
        } else {
            this.resetStackHandler(socket, timePlus45Min, 0)
        }
        // console.log(day, time, timePlus45Min)
    }

    resetStackHandler = (socket, time, screenIndex) => {
        // console.log(" Resetter =>>", time, screenIndex)
        let screans = ['/fact', '/breath', '/stretch', '/joke', '/puzzel', '/riddle', '/stretch', '/breath', '/tips', '/empower']
        let data = {
            day: moment().format('dddd'),
            last_screen: screenIndex,
            next_screen_time: time
        }
        window.localStorage.setItem('modalData', JSON.stringify(data))
        this.props.history.replace(screans[screenIndex])
        socket.emit("show_app", "Open the app")
    }

    render() {
        return (
            <div>
                {
                    Routes.routes.renderRoutes()
                }
            </div>
        )
    }
}
export default IndexRoutes