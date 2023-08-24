import { configureStore } from '@reduxjs/toolkit';
import whoReducer from './reducers/who-reducer';
import youtubeReducer from './reducers/youtube-reducer';
import authReducer from './reducers/auth-reducer';
import commentsReducer from './reducers/comments-reducer';
import usersReducer from './reducers/users-reducer';
import adminReducer from './reducers/admin-reducer';

const store = configureStore({
    reducer: { 
        whoToFollowList: whoReducer,
        vids: youtubeReducer,
        user: authReducer,
        comments: commentsReducer,
        users: usersReducer,
        admin: adminReducer
    }
});

export default store;