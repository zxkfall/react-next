import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
            // 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
            // 基于这些更改的不可变的 state。
            state.value += 1
            console.log(state.value)
        },
        decremented: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    }
})


const store = configureStore({
    reducer: counterSlice.reducer
})

// 可以订阅 store
store.subscribe(() => console.log(store.getState()))

export const {incremented, decremented, incrementByAmount} = counterSlice.actions

export {store}