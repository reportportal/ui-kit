# Report Portal UI kit

Common description will be here.

## Development

#### Available commands

To get started straight away run `pnpm start` or `bit start` and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment.

```bash
pnpm start # or
bit start
```

_Note:_ If you don't have `pnpm` installed, see [pnpm docs](https://pnpm.io/installation).

### Create new components

To create new React component using Bit, just run the next command:

```bash
bit create react {namespace}/{component-name}
# typical namespaces are buttons, inputs, etc
```

This command will generate basic [component](https://bit.dev/docs/getting-started/composing/creating-components#component-directory) structure, including docs, test and composition files.

>By default, components are created according to the `defaultScope` defined in the `workspace.json` (e.g. `main`), and the env defined as part of the template.
Override any of them by passing the `--scope` (`base` f.e. if you want to add new component to the `base` scope) and `--env` flags to the create command. Change the location of the component by passing the `--path` flag.

Bit [docs](https://bit.dev/docs/getting-started/composing/creating-components) reference.


### Adding new dependencies

You can simply add the new dependency to the `workspace.jsonc` file in `dependencies` section. <br />
Not necessary to separate some of them to the `devDependencies` as the Bit will automatically [recognize](https://bit.dev/docs/dependencies/dependency-policies#dev-dependencies) the development one.

### Customizing workplace environment

This workplace uses custom react environment based on [teambit/react](https://bit.cloud/teambit/react/react) environment, where you can see basic tools configuration provided by it.


### Glossary

**workspace**

**scope**

**namespace**

**component**

**env** - Component environment that configure how component should be build, developed and compiled (see [bit envs](https://bit.dev/docs/envs/envs-overview)). Changing the component env means that the component will be marked as `modified`.

**variant** - Workspace configuration for specifying aspects (env, publish config, etc.) for components by patterns.

**aspect** -

## What's included

- **workspace.jsonc**

This is the main configuration file of bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the React env. However you can create other components and apply other envs to them such as node, html, angular and aspect envs.

Use Variants as an efficient alternative to manually configuring each component's component.json.

- **.bitmap**

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.


- **Demo Components**

A folder (unless the --empty flag was used) containing demo components are included in this workspace. These components are used to demonstrate the different features of Bit. If you would like to remove these components you can run the following command.

```jsx
bit remove "ui/*" --delete files
```

This removes the components from the bitmap as well as removes the files.
