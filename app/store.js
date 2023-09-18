import { configureStore } from '@reduxjs/toolkit'
import bookSlice from '@/features/books/bookSlice'
import { adminApi } from '@/features/AdminApi/adminApiSlice'
import { uAdminApi } from '@/features/UadminApi/uadminSliceApi'
import { userApi } from '@/features/UserApi/userSliceApi'


export default configureStore({
  reducer: {
    books: bookSlice,
    [adminApi.reducerPath]: adminApi.reducer,
    [uAdminApi.reducerPath]: uAdminApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware).concat(uAdminApi.middleware).concat(userApi.middleware),
})

