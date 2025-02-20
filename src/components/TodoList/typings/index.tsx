// 数组的每一个对象类型
export interface ITodo{
    id: number,
    content: string,
    completed:boolean
}

// 数组类型
export interface IState{
    todoList: ITodo[]
}

// redux
// action对象的类型
/**
 * The payload property in the IAction interface is defined as a union type 
 * that allows it to accept different types of data (ITodo, ITodo[], or number) as payloads
 *  for different actions (INIT_TODOLIST, ADD_TODO, or UPDATE_COUNT). 
 */
export interface IAction{
    type: ACTION_TYPE,
    payload: ITodo | ITodo[] | number  // |符号值的是类型有可能为ITodo 也有可能为 number
}

// 枚举相当于常量,不可变的,方便于用来做判断
export enum ACTION_TYPE{
    ADD_TODO = 'addTodo',
    REMOVE_TODO = 'removeTodo',
    TOGGLE_TODO = 'toggleTodo',
    INIT_TODOLIST = 'initTodoList'
}