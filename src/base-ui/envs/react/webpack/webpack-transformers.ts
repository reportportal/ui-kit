import {
  WebpackConfigTransformer,
  WebpackConfigMutator,
  WebpackConfigTransformContext,
} from '@teambit/webpack';
import webpackConfig from './webpack.config';

function commonTransformation(
  config: WebpackConfigMutator,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _context: WebpackConfigTransformContext,
) {
  config.merge([webpackConfig]);
  return config;
}

export const previewConfigTransformer: WebpackConfigTransformer = (
  config: WebpackConfigMutator,
  context: WebpackConfigTransformContext,
) => {
  const newConfig = commonTransformation(config, context);
  return newConfig;
};

export const devServerConfigTransformer: WebpackConfigTransformer = (
  config: WebpackConfigMutator,
  context: WebpackConfigTransformContext,
) => {
  const newConfig = commonTransformation(config, context);
  return newConfig;
};
