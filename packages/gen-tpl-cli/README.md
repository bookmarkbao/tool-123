# test template generator 

CLI util for easy generate test files

## Installation

```js
npm install -g @tool-123/jest-template-generator
```

## Usage

```bash
gt --help
```

### Create new spec.js file

```bash
gt test
```

Will generate all template file:

**login-form.spec.js**

**login-form-tpl2.spec.js**

**login-form-tpl3.spec.js**

```javascript
import Vue from 'vue';
import LoginformComponent from './index.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('LoginformComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    // expect(typeof LoginformComponent.created).toBe('function');
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    // expect(typeof LoginformComponent.data).toBe('function')
    // const defaultData = LoginformComponent.data();
    // expect(defaultData.message).toBe('hello!');
  })
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    // const vm = new Vue(LoginformComponent).$mount();
    // expect(vm.message).toBe('bye!');
  })
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    // const Ctor = Vue.extend(LoginformComponent);
    // const vm = new Ctor().$mount();
    // expect(vm.$el.textContent).toBe('bye!');
  })
})
```

### Create new test single file

```bash
gt -s home
```

will generate one test file:

**home.spec.js**

```javascript
import Vue from 'vue';
import FooterComponent from './index.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('FooterComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    // expect(typeof FooterComponent.created).toBe('function');
  });
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    // expect(typeof FooterComponent.data).toBe('function')
    // const defaultData = FooterComponent.data();
    // expect(defaultData.message).toBe('hello!');
  });
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    // const vm = new Vue(FooterComponent).$mount();
    // expect(vm.message).toBe('bye!');
  });
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    // const Ctor = Vue.extend(FooterComponent);
    // const vm = new Ctor().$mount();
    // expect(vm.$el.textContent).toBe('bye!');
  });
});
```

### Create new test single file inside new folder

```bash
gt -s home --folder
```

### If you want use postfix in file name, use -- postfix

```bash
gt dialog --postfix page
```

Will generate files with postfix:

- dialog.page.spec.js

### Change the default file types for spec

```bash
sudo gt --spec ts
```

### Contribute

If you want to fix/improve the templates you're welcome to create a PR.
