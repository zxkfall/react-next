This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# React 组件通信

## 常见的组件通信方式

Props(p->c), 回调函数(c->p)，Context(multi)

父子传值
父组件通过props传递给子组件，子组件通过回调函数传递给父组件

兄弟组件传值
通过父组件作为中间层，将数据传递给兄弟组件

跨级组件传值
通过Context跨级传递数据

事件监听传值

## 优缺点对比

在 React 开发中，event (eventTarget/emitter)、redux、context、回调函数 和 props 各有其独特的用途和优缺点。以下是它们的详细对比：

1. Event (eventTarget / Emitter)
   事件驱动机制通常用于处理组件之间或应用内的事件通信。eventTarget 是浏览器原生的事件机制，EventEmitter 是 Node.js
   中常用的事件机制。

优点：
解耦：事件可以在不直接依赖于组件结构的情况下触发和监听，使得组件间通信更加灵活。
异步处理：事件驱动机制支持异步操作，可以轻松处理复杂的异步逻辑。
广泛适用：适用于多个独立组件之间的通信，适合处理不相关组件的交互。
缺点：
难以跟踪：随着应用规模增加，多个事件的处理逻辑可能变得难以追踪和调试。
依赖事件名称：事件名称必须小心管理，避免冲突和命名错误。
性能问题：如果频繁触发事件，可能导致性能问题，尤其是在大型应用中。
适用场景：
组件间松耦合通信或全局事件处理，如通知系统、WebSocket 消息处理。

2. Redux
   Redux 是一个集中式状态管理库，通常用于管理复杂的全局状态。

优点：
全局状态管理：Redux 提供了统一的状态管理方案，所有状态集中存储在一个地方，便于调试和管理。
可预测性：通过纯函数（reducer）更新状态，状态变化可预测，容易测试。
中间件支持：Redux 具有丰富的中间件支持，可以轻松处理异步操作（如 redux-thunk、redux-saga）。
缺点：
学习曲线陡峭：Redux 的概念较多（如 actions、reducers、store），对初学者不太友好。
样板代码多：简单的状态更新可能需要编写大量的样板代码，增加了开发成本。
复杂性高：对于小型应用，Redux 可能显得过于复杂和臃肿。
适用场景：
大型应用程序，或需要集中管理和共享复杂状态的场景。

3. Context
   React Context API 用于在组件树中传递数据，而无需通过每个组件的 props 逐层传递。

优点：
减少 props drilling：通过 Context，可以避免组件树深层的 props 传递，简化代码。
轻量级状态管理：适用于全局状态不多的场景，避免引入复杂的状态管理库。
React 内置：无需额外的依赖，直接使用 React 提供的功能。
缺点：
性能问题：频繁更新的 Context 会导致不必要的组件重新渲染，影响性能。
单一职责难维护：如果 Context 中包含太多不同类型的数据，可能导致复杂性增加，难以维护。
适用场景：
中小型应用，需要在组件树中传递少量全局状态的场景。

4. 回调函数 (Callback Functions)
   回调函数是一种将函数作为参数传递给另一个函数的技术，常用于子组件向父组件传递数据或事件。

优点：
灵活性强：回调函数可以在不同组件之间传递任意逻辑，适用范围广。
解耦合：子组件只需要调用回调函数，而不需要了解父组件的实现细节，组件之间耦合度低。
简单直观：回调函数非常直观且易于理解，特别是在小型组件中。
缺点：
复杂性增加：当嵌套的回调函数过多时，代码的可读性和维护性下降（即“回调地狱”问题）。
依赖性：回调函数通常会创建对父组件的依赖，可能导致组件之间的意外耦合。
适用场景：
组件之间需要传递行为逻辑，如事件处理函数。

5. Props
   Props 是 React 组件之间传递数据的主要方式。

优点：
父子关系明确：通过 props 传递数据和回调函数，组件之间的关系清晰。
不可变性：Props 是不可变的，能确保数据的可靠性，不会被子组件意外修改。
简单易用：适合简单的父子组件之间的数据和行为传递。
缺点：
props drilling：当组件层次较深时，需要逐层传递 props，可能导致代码臃肿和维护困难。
不适用于全局状态：Props 只能在父子组件之间传递数据，无法在不相关的组件之间共享状态。
适用场景：
父子组件之间简单的数据和事件传递。
总结对比：

| 特性                              | 优点                             | 缺点                      | 适用场景             |
|---------------------------------|--------------------------------|-------------------------|------------------|
| **Event (eventTarget/emitter)** | 解耦、异步处理、灵活适用                   | 难以跟踪、依赖事件名称、可能有性能问题     | 组件间松耦合通信、全局事件处理  |
| **Redux**                       | 全局状态管理、可预测性高、中间件支持             | 学习曲线陡峭、样板代码多、复杂性高       | 大型应用、复杂状态和异步操作管理 |
| **Context**                     | 减少 props drilling、轻量级状态管理、内置支持 | 性能问题、复杂性随规模增加           | 中小型应用、简单全局状态管理   |
| **回调函数**                        | 灵活性强、解耦合、简单直观                  | 复杂性增加、可能导致依赖性           | 组件间行为逻辑传递，如事件处理  |
| **Props**                       | 父子关系明确、不可变性、简单易用               | props drilling、无法全局共享状态 | 父子组件之间的数据和事件传递   |

根据具体场景选择适当的工具和概念，可以提高代码的可维护性、灵活性和性能。