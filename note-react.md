声明式：数据-状态-视图
组件化：管理自身状态，轻松传递数据、保持状态和DOM分离
跨平台：Web、Node、ReactNative

状态树
数据流

JSX：类似XML的写法

# 工具链
  https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658


# setState

# diff算法

# 虚拟DOM

# hook

# useState

# useEffect

# setState

# fiber

# 类组件 VS 函数式组件

# Redux
  作用：集中式管理应用中多个组件共享的状态
  Store, Reducers, Action Creators, UI Components
    UI Components -> eventHandle -> 
    Action Creators -> dispatch(action{type,data}) -> Store
    Store -> (oldState, action) -> Reducers -> newState
    UI Components -> subscribe{getStore}
  Action: 
    异步Action: 
  Reducer: 
  Store: 
  
  https://www.baidu.com/s?wd=Redux对比Mobx

# React-Redux
  容器组件Provider：
    与redux通信，将结果交给UI组件
    通过props向UI组件传递：redux中保存的状态、操作状态的方法
  hook
    useSelector
    useDispatch
  mapStateToProps

