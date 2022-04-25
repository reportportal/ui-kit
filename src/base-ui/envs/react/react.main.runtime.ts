import { MainRuntime } from '@teambit/cli';
import { ReactAspect as BitReactAspect, ReactMain as BitReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';

import { ReactAspect } from './react.aspect';
import { previewConfigTransformer, devServerConfigTransformer } from './webpack/webpack-transformers';
// import tsConfig from './typescript/tsconfig.json';
// import eslintConfig from './eslint/eslintrc';
import prettierConfig from './prettier/prettier.config';

export class ReactMain {
  static slots = [];

  static dependencies = [BitReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [BitReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      // TODO: use correct TS config overriding
      // react.overrideTsConfig(tsConfig),
      // react.useTypescript({
      //   devConfig: [(config) => config.mergeTsConfig(tsConfig)],
      //   buildConfig: [(config) => config.mergeTsConfig(tsConfig)],
      // }),
      react.useWebpack({
        previewConfig: [previewConfigTransformer],
        devServerConfig: [devServerConfigTransformer],
      }),
      react.overrideJestConfig(require.resolve('./jest/jest.config')),

      // TODO: use correct eslint config overriding (provided setRule not working)
      // eslint-disable-next-line no-param-reassign
      // config.raw.config.overrideConfig = eslintConfig;
      // config.addOverrides(eslintConfig);
      react.useEslint({
        transformers: [
          (config) => {
            config.setRule('max-len', ['warn', { code: 120 }]);
            return config;
          },
        ],
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      react.usePrettier({
        transformers: [
          (config) => { // also, `config.setKey` can be used to modify default config
            // eslint-disable-next-line no-param-reassign
            config.raw = { ...config.raw, ...prettierConfig };
            return config;
          },
        ],
      }),

      /* Default peerDependencies:
          "react-dom": "^16.8.0 || ^17.0.0",
          "react": "^16.8.0 || ^17.0.0",
      */
      react.overrideDependencies({ // overrides dependencies for components that uses env
        peerDependencies: {
          react: '^16.8.0 || ^17.0.0',
        },
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new ReactMain();
  }
}

ReactAspect.addRuntime(ReactMain);
