# vue + typescript 踩坑记录

## vue-class-component

### 变量声明阶段，不可以使用this
准确来说，并非不可使用，而是this的指向的不是组件实例。bind，apply，call了解一下
常见误解用法在antd-design-vue 的form 配合ts 的 vue-class-component时易出现。

#### 正例

``` ts
export default class LoginForm {
  form: any = null
  
  created() {
    this.form = this.$form.createForm(this);
    
  }
}
```

#### 反例

``` ts
export default class LoginForm {
  form: any = this.$form.createForm(this);
  created() {
    
  }
}
```
## tsx


### render 函数

在使用tsx编写render函数时，h(或者createElement) 不会被自动注入. 

[参考链接](https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/174)（jsx中此问题似乎被babel插件解决）

但仍有办法解决。

#### 正例

```tsx

@Component
export default class HelloWorld extends Vue {
  render(h){
    return <div>HelloWorld</div>
  }
}

```

```tsx

@Component
export default class HelloWorld extends Vue {
  render(){
    const h = this.$createElement
    return <div>HelloWorld</div>
  }
}

```

#### 反例

```ts 

@Component
export default class HelloWorld extends Vue {
  render(){
    return <div>HelloWorld</div>
  }
}

```


## typescript 易混概念

### 命名空间不应与模块混用

    如下这句话非常关键，这指出了着他和模块的本质的不同

> **命名空间是位于全局命名空间下的一个普通的带有名字的JavaScript对象**。 这令命名空间十分容易使用。 它们可以在多文件中同时使用，并通过 --outFile结合在一起。 命名空间是帮你组织Web应用不错的方式，你可以把所有依赖都放在HTML页面的 \<script>标签里。但就像其它的全局命名空间污染一样，它很难去识别组件之间的依赖关系，尤其是在大型的应用中。

[命名空间和模块](https://www.tslang.cn/docs/handbook/namespaces-and-modules.html)


## 优秀ts文章

1. [巧用 Typescript](https://zhuanlan.zhihu.com/p/39620591)
2. [巧用 Typescript2](https://zhuanlan.zhihu.com/p/64423022)


# todo

1. vue文件的在template 和style 中，路径提示不正确
2. vue文件中函数参数似乎没有校验问题确认