import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Hi, how are you?", like: 5 },
                { id: 2, message: "It's my first post", like: 6 },
                { id: 3, message: "and my second post", like: 10 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            messageData : [
                { id: 0, message: 'Hello' },
                { id: 1, message: 'How are you' },
                { id: 2, message: 'Yo' }
            ],
            updateMessage: '',

            dialogsData : [
                { id: 0, name: "Sergey" },
                { id: 1, name: "Andrey" },
                { id: 2, name: "Grisha" },
                { id: 3, name: "Masha" },
                { id: 4, name: "Dasha" }
            ]
        },
        navPage: {
            friendsData: [
                {id: 0, name: 'Andrew', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpnFKklZBeoDxYhmM63xKCzvnAwhfckERUmrIsYvmHg&s'},
                {id: 1, name: 'Sasha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JXIIGMkVpEvAVwnzWCWeQg91CxY8YG1p-G1x78E5&s'},
                {id: 2, name: 'Pasha', img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/85c9204f-169c-46fd-8ca7-7473134c450b/1920x'}
            ]}
          
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
        },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navPage = sidebarReducer(this._state.navPage, action)
        this._callSubscriber(this._state)
        }}

export default store
 